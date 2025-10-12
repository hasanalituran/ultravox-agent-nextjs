'use client';

import { useState, useRef, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { UltravoxSession } from 'ultravox-client';
import { UltravoxService } from '../services/ultravoxService';
import { JoinUrlResponse } from '@/types/ultravox';

export type CallStatus = 'idle' | 'creating' | 'connecting' | 'connected' | 'ended' | 'error';

interface UseUltravoxCallReturn {
  callStatus: CallStatus;
  error: string | null;
  createCall: () => void;
  endCall: () => Promise<void>;
}

export function useUltravoxCall(): UseUltravoxCallReturn {
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const uvSessionRef = useRef<UltravoxSession | null>(null);
  const ultravoxService = UltravoxService.getInstance();

  const joinCall = useCallback(async (joinUrl: string) => {
    try {
      setCallStatus('connecting');
      setError(null);

      // Create UltravoxSession following official examples pattern
      uvSessionRef.current = new UltravoxSession();

      if (uvSessionRef.current) {
        // Set up event listeners
        uvSessionRef.current.addEventListener('status', () => {
          const status = uvSessionRef.current?.status;
          console.log('Session status:', status);
          
          // Map UltravoxSession status to our CallStatus
          const statusStr = String(status).toLowerCase();
          if (statusStr.includes('disconnect')) {
            setCallStatus('ended');
          } else if (statusStr.includes('listening') || statusStr.includes('thinking') || statusStr.includes('speaking')) {
            setCallStatus('connected');
          } else {
            setCallStatus('connecting');
          }
        });

        uvSessionRef.current.addEventListener('error', (event: Event) => {
          console.error('Session error:', event);
          setError('Connection error occurred');
          setCallStatus('error');
        });

        // Join the call
        uvSessionRef.current.joinCall(joinUrl);
        console.log('Joining call with URL:', joinUrl);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join call');
      setCallStatus('error');
    }
  }, []);

  const { mutate: createCall } = useMutation<JoinUrlResponse, Error>({
    mutationFn: () => ultravoxService.createCall(),
    onMutate: () => {
      setCallStatus('creating');
      setError(null);
    },
    onSuccess: (data) => {
      if (data.joinUrl) {
        joinCall(data.joinUrl);
      } else {
        setError('No joinUrl received from the API.');
        setCallStatus('error');
      }
    },
    onError: (err) => {
      setError(err.message);
      setCallStatus('error');
    },
  });

  const endCall = useCallback(async () => {
    try {
      if (uvSessionRef.current) {
        await uvSessionRef.current.leaveCall();
        uvSessionRef.current = null;
      }
      setCallStatus('ended');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to end call');
      setCallStatus('error');
    }
  }, []);

  return {
    callStatus,
    error,
    createCall,
    endCall,
  };
}
