'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useUltravoxCall } from '@/hooks/useUltravoxCall'

export default function VoiceDemo() {
  const [isCallStarting, setIsCallStarting] = useState(false)
  const [agentName, setAgentName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [showValidationError, setShowValidationError] = useState(false)
  
  const { 
    callStatus, 
    error, 
    createCall, 
    endCall
  } = useUltravoxCall()
  
  const isDevelopment = process.env.NODE_ENV === 'development'

  const handleStartDemo = async () => {
    // Validate inputs before starting call
    if (!agentName.trim() || !companyName.trim()) {
      setShowValidationError(true)
      return
    }
    
    // Clear validation error if fields are filled
    setShowValidationError(false)
    
    try {
      setIsCallStarting(true)
      await createCall(agentName, companyName)
    } catch (error) {
      console.error('Failed to start demo:', error)
      alert('Failed to start demo. Please check your connection and try again.')
    } finally {
      setIsCallStarting(false)
    }
  }

  const handleEndCall = async () => {
    try {
      await endCall()
    } catch (error) {
      console.error('Failed to end call:', error)
    }
  }

  const getStatusText = () => {
    switch (callStatus) {
      case 'idle':
        return 'Ready to start'
      case 'creating':
        return 'Setting up call...'
      case 'connecting':
        return 'Connecting...'
      case 'connected':
        return 'Call active'
      case 'ended':
        return 'Call ended'
      case 'error':
        return 'Connection error'
      default:
        return 'Unknown status'
    }
  }

  const getStatusColor = () => {
    switch (callStatus) {
      case 'idle':
      case 'ended':
        return 'secondary'
      case 'creating':
      case 'connecting':
        return 'outline'
      case 'connected':
        return 'default'
      case 'error':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  return (
    <section id="voice-demo" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight py-1">
            Try Our Voice AI Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-time voice conversations with our demo AI agent.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2 border-purple-200 dark:border-purple-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2">
                Live Demo
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                Experience real-time voice conversations powered by advanced AI!
              </p>
              
              {/* Status Badge */}
              <div className="flex justify-center mt-4">
                <Badge 
                  variant={getStatusColor() as "default" | "secondary" | "destructive" | "outline"}
                  className="text-sm px-4 py-2"
                >
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    callStatus === 'connected' ? 'bg-green-500 animate-pulse' :
                    callStatus === 'error' ? 'bg-red-500' :
                    callStatus === 'connecting' || callStatus === 'creating' ? 'bg-yellow-500 animate-pulse' :
                    'bg-gray-400'
                  }`} />
                  {getStatusText()}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Call Interface */}
              <div className="text-center space-y-6">
                {/* Call Instructions */}
                <div className="max-w-2xl mx-auto">
                  {callStatus === 'idle' && (
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-semibold">Ready to Experience Voice AI?</h3>
                      <p className="text-muted-foreground">
                        Customize your demo experience below, then click the microphone button to start a conversation with our AI agent.
                      </p>
                      
                      {/* Customization Inputs */}
                      <div className="max-w-md mx-auto space-y-4 mt-6 bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700 shadow-md">
                        <div className="text-center mb-4">
                          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            ✨ Customize Your Demo Experience
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="agentName" className="block text-base font-semibold text-left text-purple-700 dark:text-purple-300">
                            🎭 Give Your Agent a Cool Name!
                          </label>
                          <Input
                            id="agentName"
                            type="text"
                            value={agentName}
                            onChange={(e) => {
                              setAgentName(e.target.value)
                              if (showValidationError && e.target.value.trim() && companyName.trim()) {
                                setShowValidationError(false)
                              }
                            }}
                            placeholder="e.g., Sarah, Alex, Jordan..."
                            className="w-full border-2 focus:border-purple-400 transition-colors"
                            required
                          />
                          <p className="text-xs text-muted-foreground text-left">
                            Choose a friendly name for your AI assistant
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="companyName" className="block text-base font-semibold text-left text-purple-700 dark:text-purple-300">
                            🏢 What&apos;s Your Company Name?
                          </label>
                          <Input
                            id="companyName"
                            type="text"
                            value={companyName}
                            onChange={(e) => {
                              setCompanyName(e.target.value)
                              if (showValidationError && agentName.trim() && e.target.value.trim()) {
                                setShowValidationError(false)
                              }
                            }}
                            placeholder="e.g., Acme Corp, Joe's Coffee..."
                            className="w-full border-2 focus:border-purple-400 transition-colors"
                            required
                          />
                          <p className="text-xs text-muted-foreground text-left">
                            The AI will reference this during the conversation
                          </p>
                        </div>
                        
                        {(!agentName.trim() || !companyName.trim()) && (
                          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-3 mt-4">
                            <p className="text-xs text-yellow-800 dark:text-yellow-200 text-center">
                              💡 Please fill in both fields to start your personalized demo
                            </p>
                          </div>
                        )}
                        
                        {/* Start Call Button */}
                        <div className="relative inline-flex items-center justify-center mt-6">
                          <Button
                            onClick={handleStartDemo}
                            disabled={isCallStarting}
                            size="lg"
                            className={`
                              w-24 h-24 rounded-full text-white font-bold text-2xl transition-all duration-300 shadow-lg hover:scale-105
                              bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-purple-500/30
                              ${isCallStarting ? 'cursor-not-allowed opacity-70 !hover:scale-100' : ''}
                            `}
                          >
                            <span>🎤</span>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Click to start your demo call</p>
                      </div>
                      
                      {/* Validation Error Warning */}
                      {showValidationError && (
                        <div className="max-w-md mx-auto mt-4 bg-red-50 dark:bg-red-900/30 border-2 border-red-400 dark:border-red-600 rounded-lg p-4 animate-shake">
                          <div className="text-center">
                            <h4 className="text-sm font-bold text-red-800 dark:text-red-200 mb-1 flex items-center justify-center gap-2">
                              Required Fields Missing
                              <span className="text-xl">⚠️</span>
                            </h4>
                            <p className="text-sm text-red-700 dark:text-red-300">
                              Please fill in both the agent name and company name to start your personalized demo experience!
                            </p>
                            <button
                              onClick={() => setShowValidationError(false)}
                              className="mt-2 text-xs text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 underline font-medium"
                            >
                              Dismiss
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <div className="grid sm:grid-cols-3 gap-4 mt-6">
                        <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                          <div className="text-2xl mb-2">🎯</div>
                          <h4 className="font-medium">Natural Conversation</h4>
                          <p className="text-sm text-muted-foreground">Speak naturally with our AI</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                          <div className="text-2xl mb-2">📊</div>
                          <h4 className="font-medium">Smart Analysis</h4>
                          <p className="text-sm text-muted-foreground">AI analyzes sentiment & insights</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                          <div className="text-2xl mb-2">⚡</div>
                          <h4 className="font-medium">Real-time</h4>
                          <p className="text-sm text-muted-foreground">Instant response & feedback</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {callStatus === 'creating' && (
                    <div className="text-center space-y-4">
                      <div className="animate-spin w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full mx-auto"></div>
                      <h3 className="text-xl font-semibold">Setting up your demo call...</h3>
                      <p className="text-muted-foreground">Please wait while we prepare the AI agent</p>
                    </div>
                  )}

                  {callStatus === 'connecting' && (
                    <div className="text-center space-y-4">
                      <div className="animate-pulse flex space-x-2 justify-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-semibold">Connecting to AI agent...</h3>
                      <p className="text-muted-foreground">Establishing secure voice connection</p>
                    </div>
                  )}

                  {callStatus === 'connected' && (
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold text-green-600">🎉 Connected to AI Agent!</h3>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          💡 <strong>Tip:</strong> Speak naturally with the AI agent. The conversation should flow like talking to a real person.
                        </p>
                      </div>
                      
                      {/* End Call Button */}
                      <div className="relative inline-flex items-center justify-center mt-6">
                        <Button
                          onClick={handleEndCall}
                          size="lg"
                          className="w-24 h-24 rounded-full text-white font-bold text-2xl transition-all duration-300 shadow-lg hover:scale-105 bg-red-500 hover:bg-red-600 shadow-red-500/30"
                        >
                          <span>📞</span>
                        </Button>

                        {/* Pulsing ring for active call */}
                        <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping opacity-30 pointer-events-none"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Click to end call</p>
                    </div>
                  )}

                  {callStatus === 'ended' && (
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold">👋 Call Ended</h3>
                      <p className="text-muted-foreground">
                        Thank you for trying our voice AI demo!
                      </p>
                    </div>
                  )}

                  {callStatus === 'error' && (
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold text-red-600">⚠️ Demo Temporarily Unavailable</h3>
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <p className="text-sm text-red-800 dark:text-red-200 mb-2">
                          We&apos;ve reached our daily demo limit. Please try again tomorrow or contact us for a personalized demo.
                        </p>
                        {/* Only show error details in development */}
                        {isDevelopment && error && (
                          <>
                            <p className="text-sm text-red-800 dark:text-red-200 mb-2 mt-4">
                              <strong>Error Details (dev only):</strong>
                            </p>
                            <p className="text-sm text-red-700 dark:text-red-300 font-mono bg-red-100 dark:bg-red-900/40 p-2 rounded">
                              {error}
                            </p>
                          </>
                        )}
                      </div>
                      
                      {/* Troubleshooting tips - only show in development */}
                      {isDevelopment && (
                        <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
                          <h4 className="font-medium text-sm mb-2">💡 Troubleshooting Tips (dev only):</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Check if your .env file contains ULTRAVOX_API_KEY</li>
                            <li>• Verify your API key is valid and has proper permissions</li>
                            <li>• Make sure pop-ups are allowed in your browser</li>
                            <li>• Check your internet connection</li>
                          </ul>
                        </div>
                      )}

                      <div className="flex justify-center space-x-4 mt-4">
                        <Button 
                          onClick={handleStartDemo} 
                          variant="outline"
                          className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200"
                        >
                          Try Again
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Information */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-center">What to Expect</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-medium flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Demo Scenario
                    </h5>
                    <p className="text-sm text-muted-foreground ml-4">
                      The AI will conduct a customer feedback interview about a recent experience
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Duration
                    </h5>
                    <p className="text-sm text-muted-foreground ml-4">
                      Demo typically lasts 2-3 minutes with natural conversation flow
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}