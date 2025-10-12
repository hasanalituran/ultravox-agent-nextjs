'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Configure Your Agent",
      description: "Customize your AI agent with specific tasks, personality traits, interview questions, and actionable outcomes for optimal results.",
      icon: "🤖"
    },
    {
      number: "2", 
      title: "Deploy Your Channel",
      description: "Generate phone numbers, QR codes, or enable web calls for customer access.",
      icon: "📞"
    },
    {
      number: "3",
      title: "Analyze Results", 
      description: "Review transcripts, sentiment analysis, and actionable insights from your interviews.",
      icon: "📊"
    }
  ]


  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight py-1">
            How Fydback Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple three-step process to start collecting valuable customer feedback through AI-powered voice interviews
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <CardTitle className="text-xl flex items-center justify-center space-x-2">
                  <span>{step.icon}</span>
                  <span>{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
