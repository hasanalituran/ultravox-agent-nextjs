import { ListAgentCallsResponse, JoinUrlResponse } from '@/types/ultravox';

// Configuration constants
// Note: API keys are NOT included here - they're only used server-side in API routes
const AGENT_ID = process.env.NEXT_PUBLIC_ULTRAVOX_AGENT_ID || '1fbf806f-949b-467c-8092-3b85b9f143a5';
const DAILY_CALL_LIMIT = parseInt(process.env.NEXT_PUBLIC_ULTRAVOX_DAILY_CALL_LIMIT || '50', 10);

export class UltravoxService {
  private static instance: UltravoxService;

  static getInstance(): UltravoxService {
    if (!UltravoxService.instance) {
      UltravoxService.instance = new UltravoxService();
    }
    return UltravoxService.instance;
  }

  async checkAgentCapacity(): Promise<boolean> {
    try {
      console.log('Checking agent capacity via Ultravox API proxy...');
      
      // First, check if the agent is active
      const agentResponse = await fetch(`/api/agents/${AGENT_ID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('Ultravox Agent Details response status:', agentResponse.status);

      if (!agentResponse.ok) {
        const errorText = await agentResponse.text();
        console.error('Ultravox API error:', errorText);
        throw new Error(`Ultravox API error: ${agentResponse.status}, ${errorText}`);
      }

      // Now fetch the call history to check daily limit
      const callsResponse = await fetch(`/api/agents/${AGENT_ID}/calls`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('Ultravox Agent Calls response status:', callsResponse.status);

      if (!callsResponse.ok) {
        const errorText = await callsResponse.text();
        console.error('Ultravox API error when fetching calls:', errorText);
        throw new Error(`Ultravox API error: ${callsResponse.status}, ${errorText}`);
      }

      const callsData: ListAgentCallsResponse = await callsResponse.json();
      
      // Count calls made today
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      const callsMadeToday = callsData.results.filter(call => {
        const callDate = new Date(call.created).toISOString().split('T')[0];
        return callDate === today;
      }).length;
      
      console.log(`Calls made today: ${callsMadeToday}/${DAILY_CALL_LIMIT}`);
      
      return callsMadeToday < DAILY_CALL_LIMIT;
    } catch (error) {
      console.error('Error checking agent capacity:', error);
      throw new Error('Failed to check agent capacity');
    }
  }

  async createCall(templateContext?: object): Promise<JoinUrlResponse> {
    try {
      // Check if the agent has capacity before making the call
      const hasCapacity = await this.checkAgentCapacity();
      if (!hasCapacity) {
        throw new Error(`Daily call limit reached (maximum ${DAILY_CALL_LIMIT} calls per day) or agent is unavailable.`);
      }

      const authToken = await fetch('/api/backend/auth/token/api-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!authToken.ok) {
        throw new Error('Failed to authenticate with backend service');
      }
      const { token } = await authToken.json();
      console.log('Authenticated with backend, received token:', token);

      const body = {
        templateContext: templateContext || {
          "agentName": "Tylinn",
          "companyName": "Anytime Fitness Randwick", 
          "callId": "11",
          "agentId": "17",
          "authorization": `Bearer ${token}`
        },
        medium: { "webRtc": {} }
      };
      
      console.log('Attempting to call Ultravox API via proxy...');
      const response = await fetch(`/api/agents/${AGENT_ID}/calls`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...body }),
      });

      console.log('Ultravox API response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Ultravox API error:', errorText);
        throw new Error(`Ultravox API error: ${response.status}, ${errorText}`);
      }

      const data = await response.json();  
      return data;
    } catch (error) {
      console.error('Error in Ultravox service:', error);
      if (error instanceof Error) {
        throw new Error(`Error calling Ultravox API: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred.');
      }
    }
  }
}
