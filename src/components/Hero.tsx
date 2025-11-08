'use client';

import { Card } from '@/components/ui/card'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.12] md:leading-[1.08] bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent pb-2">
              Voice AI Agents for Intelligent and Adaptive Conversations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Automate customer retention, customer service and continuous feedback collection with intelligent, actionable, adaptive voice conversations. Deploy in minutes and scale across phone, web, and messaging.
            </p>
          </div>

          {/* Demo Visual */}
          <div className="mt-12">
            <Card className="max-w-2xl mx-auto p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gradient-to-r from-purple-200 to-blue-200">
              <div className="space-y-6">
                {/* Live Voice Indicator */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500/40 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">Live Voice Session</span>
                </div>

                {/* Voice Participants */}
                <div className="grid grid-cols-2 gap-6">
                  {/* AI Agent */}
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-gradient-to-b from-purple-50/70 to-purple-100/40 dark:from-purple-900/30 dark:to-purple-800/20 border border-purple-200/50 dark:border-purple-700/30">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">🤖</span>
                      </div>
                      {/* Alternating speaking rings */}
                      <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-purple-400/60 animate-ping"
                           style={{ animationDuration: '2s', animationDelay: '0s' }}></div>
                      <div className="absolute inset-[-4px] w-20 h-20 rounded-full border border-purple-300/40 animate-pulse"
                           style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"
                           style={{ animationDuration: '1.5s' }}></div>
                    </div>
                    
                    {/* Voice waves for agent */}
                    <div className="flex items-center justify-center space-x-1 h-8">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-gradient-to-t from-purple-400 to-purple-600 rounded-full animate-pulse"
                          style={{
                            height: `${20 + (i % 3) * 10}px`,
                            animationDelay: `${i * 150 + 5000}ms`,
                            animationDuration: '1.5s'
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">AI Agent</div>
                      <div className="text-xs px-2 py-1 rounded-full mt-1" 
                           style={{ 
                             animation: 'agentSpeakingState 10s infinite'
                           }}>
                        <span className="agent-status-text"></span>
                      </div>
                    </div>
                  </div>

                  {/* Customer */}
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-gradient-to-b from-blue-50/70 to-blue-100/40 dark:from-blue-900/30 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/30">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">👤</span>
                      </div>
                      {/* Customer speaking rings - delayed */}
                      <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-blue-400/60 animate-ping opacity-0"
                           style={{ animationDuration: '2s', animationDelay: '5s', animation: 'ping 2s infinite 5s' }}></div>
                      <div className="absolute inset-[-4px] w-20 h-20 rounded-full border border-blue-300/40 animate-pulse opacity-0"
                           style={{ animationDuration: '3s', animationDelay: '5s', animation: 'pulse 3s infinite 5s' }}></div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-400 rounded-full border-2 border-white dark:border-gray-900"
                           style={{ animation: 'customerStatusChange 10s infinite' }}></div>
                    </div>
                    
                    {/* Voice waves for customer */}
                    <div className="flex items-center justify-center space-x-1 h-8">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-full transition-all duration-1000"
                          style={{
                            height: `${12 + (i % 2) * 6}px`,
                            background: 'linear-gradient(to top, #d1d5db, #9ca3af)',
                            animation: `customerWaves 1.2s ease-in-out infinite ${i * 150 + 3000}ms`
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Customer</div>
                      <div className="text-xs px-2 py-1 rounded-full mt-1" 
                           style={{ 
                             animation: 'customerSpeakingState 10s infinite'
                           }}>
                        <span className="customer-status-text"></span>
                      </div>
                    </div>
                  </div>
                </div>



                {/* Voice Conversation Visualization */}
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 border backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Voice Conversation Flow</span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-mono">● Live Audio</span>
                  </div>
                  
                  {/* Alternating conversation waves */}
                  <div className="relative h-20 mb-4 bg-gray-50/50 dark:bg-gray-900/30 rounded-lg overflow-hidden" suppressHydrationWarning>
                    {/* Agent speaking waves (first half) */}
                    <div className="absolute inset-0 flex items-end justify-center space-x-1" style={{ animation: 'agentWaveVisibility 10s infinite' }} suppressHydrationWarning>
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={`agent-${i}`}
                          className="w-1.5 bg-gradient-to-t from-purple-500 to-purple-300 rounded-full"
                          suppressHydrationWarning
                          style={{
                            height: `${25 + (Math.sin(i * 0.8) * 15) + (Math.sin(i * 1.2) * 8)}%`,
                            animation: `agentVoiceWave 1.5s ease-in-out infinite ${i * 80}ms, agentWaveVisibility 10s infinite`,
                            opacity: 0.9
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Customer speaking waves (second half) */}
                    <div className="absolute inset-0 flex items-end justify-center space-x-1" style={{ animation: 'customerWaveVisibility 10s infinite' }} suppressHydrationWarning>
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={`customer-${i}`}
                          className="w-1.5 bg-gradient-to-t from-blue-500 to-blue-300 rounded-full"
                          suppressHydrationWarning
                          style={{
                            height: `${20 + (Math.sin(i * 0.6) * 12) + (Math.sin(i * 1.5) * 10)}%`,
                            animation: `customerVoiceWave 1.3s ease-in-out infinite ${i * 90 + 5000}ms, customerWaveVisibility 10s infinite`,
                            opacity: 0.9
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Silence indicator when neither is speaking */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs text-gray-400 dark:text-gray-500" style={{ animation: 'silenceIndicator 10s infinite' }}>
                        <span className="opacity-0">Listening...</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2 p-2 bg-purple-50/70 dark:bg-purple-900/20 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" style={{ animation: 'agentIndicatorPulse 10s infinite' }}></div>
                      <span>AI Agent Voice</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 p-2 bg-blue-50/70 dark:bg-blue-900/20 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'customerIndicatorPulse 10s infinite' }}></div>
                      <span>Customer Voice</span>
                    </div>
                  </div>
                </div>

                {/* Voice Features */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-white/40 dark:bg-gray-800/40 rounded-lg border">
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Natural Flow</div>
                    <div className="text-[10px] text-muted-foreground mt-1">Human-like turns</div>
                  </div>
                  <div className="text-center p-3 bg-white/40 dark:bg-gray-800/40 rounded-lg border">
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Intent Analysis</div>
                    <div className="text-[10px] text-muted-foreground mt-1">Real-time parsing</div>
                  </div>
                  <div className="text-center p-3 bg-white/40 dark:bg-gray-800/40 rounded-lg border">
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Adaptive</div>
                    <div className="text-[10px] text-muted-foreground mt-1">Dynamic responses</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes customerStatusChange {
            0%, 50% { background-color: #9ca3af; }
            51%, 100% { background-color: #10b981; }
          }
          @keyframes customerWaves {
            0%, 50% { opacity: 0.4; transform: scaleY(0.5); }
            51%, 70% { opacity: 1; transform: scaleY(1.2); background: linear-gradient(to top, #3b82f6, #06b6d4); }
            71%, 100% { opacity: 0.4; transform: scaleY(0.5); }
          }
          /* Agent speaking state - green when speaking, gray when listening */
          @keyframes agentSpeakingState {
            0%, 50% { 
              color: #10b981; 
              background-color: #dcfce7; 
            }
            51%, 100% { 
              color: #6b7280; 
              background-color: #f3f4f6; 
            }
          }
          
          /* Customer speaking state - gray when listening, green when speaking */
          @keyframes customerSpeakingState {
            0%, 50% { 
              color: #6b7280; 
              background-color: #f3f4f6; 
            }
            51%, 100% { 
              color: #10b981; 
              background-color: #dcfce7; 
            }
          }
          
          .agent-status-text::after {
            content: "Speaking";
            animation: agentTextSwitch 10s infinite;
          }
          
          .customer-status-text::after {
            content: "Listening";
            animation: customerTextSwitch 10s infinite;
          }
          
          @keyframes agentTextSwitch {
            0%, 50% { 
              content: "Speaking";
            }
            51%, 100% { 
              content: "Listening";
            }
          }
          
          @keyframes customerTextSwitch {
            0%, 50% { 
              content: "Listening";
            }
            51%, 100% { 
              content: "Speaking";
            }
          }
          
          /* Voice wave visibility animations */
          @keyframes agentWaveVisibility {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.2; }
          }
          
          @keyframes customerWaveVisibility {
            0%, 50% { opacity: 0.2; }
            51%, 100% { opacity: 1; }
          }
          
          @keyframes agentVoiceWave {
            0%, 100% { transform: scaleY(0.3); opacity: 0.6; }
            50% { transform: scaleY(1); opacity: 1; }
          }
          
          @keyframes customerVoiceWave {
            0%, 100% { transform: scaleY(0.4); opacity: 0.7; }
            50% { transform: scaleY(1.1); opacity: 1; }
          }
          
          @keyframes silenceIndicator {
            0%, 48% { opacity: 0; }
            49%, 51% { opacity: 0.5; }
            52%, 100% { opacity: 0; }
          }
          
          @keyframes agentIndicatorPulse {
            0%, 50% { opacity: 1; animation-name: pulse; }
            51%, 100% { opacity: 0.4; }
          }
          
          @keyframes customerIndicatorPulse {
            0%, 50% { opacity: 0.4; }
            51%, 100% { opacity: 1; animation-name: pulse; }
          }
        `
      }} />
    </section>
  )
}
