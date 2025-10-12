'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Features() {
  const mainFeatures = [
    {
      title: "AI Interview Agents",
      description: "Adaptive conversational AI that follows up intelligently and drives outcomes.",
      icon: "🤖",
      highlight: "Adaptive AI"
    },
    {
      title: "Multi-Channel Access",
      description: "Phone, web, click-to-call, QR, SIP + messaging triggers — always on.",
      icon: "📋",
      highlight: "Omnichannel"
    },
    {
      title: "Automated Collection",
      description: "Capture feedback hands‑free with continuous, structured gathering.",
      icon: "⚡",
      highlight: "Always On"
    },
    {
      title: "Rapid Setup & Integrations",
      description: "Launch in minutes and connect to your stack with minimal effort.",
      icon: "⚙️",
      highlight: "Fast Launch"
    },
    {
      title: "Smart AI Analytics",
      description: "Automatic sentiment, topic trends, intent tagging and actionable recommendations from every conversation.",
      icon: "🧠",
      highlight: "Auto Insights"
    },
    {
      title: "Deep Agent Customization",
      description: "Configure voices, personas, tone, pacing, memory and behavioral goals.",
      icon: "🎨",
      highlight: "Persona Control"
    },
  ]

  const additionalFeatures = [
    {
      title: "Real-Time Events",
      description: "Stream live conversation events to power automation and integrations.",
      icon: "🛰️"
    },
    {
      title: "Real-time Transcription", 
      description: "Get instant, accurate transcriptions of all voice interviews with speaker identification",
      icon: "📝"
    },
    {
      title: "Multi-language Support",
      description: "Conduct interviews in multiple languages with native-speaking AI agents",
      icon: "🌍"
    },
    {
      title: "Custom Branding",
      description: "Personalize the experience with your company's branding and messaging",
      icon: "🎨"
    },
    {
      title: "CRM Integration",
      description: "Seamlessly integrate with your existing CRM and customer support tools",
      icon: "🔗"
    },
    {
      title: "Custom Phone Numbers",
      description: "Provision dedicated inbound numbers for branded experience.",
      icon: "📱"
    },
    {
      title: "Configurable Call Durations",
      description: "Set optimal interview lengths from quick 2-minute surveys to detailed 15-minute conversations. Our AI adapts to keep conversations engaging within your time constraints.",
      icon: "⏱️"
    },
    {
      title: "Live Call Transfers",
      description: "Escalate to a human agent seamlessly based on rules or intent.",
      icon: "👥"
    },
    {
      title: "Custom Agent Voices", 
      description: "Choose from a variety of natural-sounding AI voices or create custom voice profiles that match your brand personality and customer preferences.",
      icon: "🎤"
    }
  ]


  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to collect, analyze, and act on customer feedback through intelligent voice conversations
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-purple-200 dark:hover:border-purple-800">
              {feature.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-1 max-w-[120px] text-center">
                    {feature.highlight}
                  </Badge>
                </div>
              )}
              <CardHeader className="pr-32 sm:pr-36">
                <CardTitle className="flex items-start space-x-3 text-xl leading-tight">
                  <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                  <span className="break-words">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* More Capabilities Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">More Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose Fydback?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-5xl">🚀</div>
                <h4 className="text-xl font-semibold">Quick Setup</h4>
                <p className="text-muted-foreground">Get started in minutes, not weeks. No complex integrations required.</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl">🎯</div>
                <h4 className="text-xl font-semibold">Higher Response Rates</h4>
                <p className="text-muted-foreground">Voice interviews get 3x higher response rates than traditional surveys.</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl">💡</div>
                <h4 className="text-xl font-semibold">Deeper Insights</h4>
                <p className="text-muted-foreground">Capture nuanced feedback that text surveys miss through natural conversation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
