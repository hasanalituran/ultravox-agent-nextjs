// Ultravox API Response Types

export interface AgentCall {
  callId: string;
  agentId: string;
  created: string;
  ended?: string;
  status: string;
}

export interface ListAgentCallsResponse {
  results: AgentCall[];
  next?: string;
  previous?: string;
}

export interface JoinUrlResponse {
  joinUrl: string;
  callId: string;
}
