'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function UseCases() {

  const useCases = [
    {
      id: "retention",
      title: "Customer Retention & Win-Back",
      tagline: "Prevent churn by having intelligent conversations at critical moments",
      icon: "🔄",
      color: "from-purple-500 to-purple-600",
      examples: [
        "Telecom cancellation counter-offers",
        "Gym membership cancellation save calls",
        "Subscription service pause/cancel interventions",
        "Credit card cancellation retention offers",
        "SaaS downgrade/churn prevention conversations"
      ]
    },
    {
      id: "service-automation",
      title: "Service Business Automation",
      tagline: "Let AI handle routine inquiries so you focus on the work",
      icon: "🔧",
      color: "from-blue-500 to-blue-600",
      examples: [
        "Mobile mechanic service info & booking",
        "Real estate property inquiries & inspection scheduling",
        "Plumbing emergency triage and scheduling",
        "HVAC service appointment booking",
        "Electrician availability and quote requests"
      ]
    },
    {
      id: "renewal-upsell",
      title: "Proactive Renewal & Upsell Outreach",
      tagline: "Don't wait for renewals to lapse - engage customers proactively",
      icon: "📅",
      color: "from-cyan-500 to-cyan-600",
      examples: [
        "Health insurance renewal + experience check",
        "Car insurance policy renewal reminders",
        "Annual service contract renewals (HVAC, pest control)",
        "Subscription upgrade opportunities based on usage",
        "Warranty expiration and renewal offers"
      ]
    },
    {
      id: "appointment-confirmation",
      title: "Appointment Confirmation & No-Show Reduction",
      tagline: "Reduce no-shows and last-minute cancellations automatically",
      icon: "✅",
      color: "from-green-500 to-green-600",
      examples: [
        "Medical/dental appointment confirmations",
        "Restaurant reservation confirmations",
        "Salon/spa appointment reminders",
        "Home service appointment verification",
        "Event RSVP confirmation and details"
      ]
    },
    {
      id: "post-transaction",
      title: "Post-Transaction Follow-Up",
      tagline: "Capture feedback and resolve issues while the experience is fresh",
      icon: "💬",
      color: "from-orange-500 to-orange-600",
      examples: [
        "E-commerce delivery confirmation and satisfaction",
        "Restaurant dining experience feedback",
        "Service completion satisfaction (trades, repairs)",
        "Product onboarding assistance after purchase",
        "Support ticket resolution verification"
      ]
    },
    {
      id: "lead-qualification",
      title: "Lead Qualification & Discovery",
      tagline: "Identify high-intent prospects through natural conversation",
      icon: "🎯",
      color: "from-pink-500 to-pink-600",
      examples: [
        "Initial B2B lead qualification and needs assessment",
        "Real estate buyer/seller intent verification",
        "Insurance needs discovery and policy fit",
        "Event registration interest and qualification",
        "Product demo request follow-ups and scheduling"
      ]
    }
  ]

  const handleTryDemo = () => {
    // Scroll to demo section
    document.getElementById('voice-demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900/50 dark:via-purple-900/10 dark:to-blue-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            Real-World Applications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight py-1">
            Built for Your Use Case
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy AI voice agents that drive real business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {useCase.icon}
                </div>
                <CardTitle className="text-xl leading-tight mb-2">
                  {useCase.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {useCase.tagline}
                </p>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Examples:</p>
                  <ul className="space-y-2 text-sm">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                        <span className="text-muted-foreground leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border-2 border-purple-200 dark:border-purple-700 shadow-lg">
            <CardContent className="py-10 px-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Ready to Experience Voice AI in Action?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Try our interactive demo and see how natural conversations can transform your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  onClick={handleTryDemo}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  🎤 Try Live Demo Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg px-8 py-6"
                >
                  Talk to Our Team
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Don&apos;t see your use case? Our AI agents adapt to your specific needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
