'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Contact Form Submission from ${formData.firstName} ${formData.lastName}`)
      const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Message:
${formData.message || 'No message provided'}
      `)
      
      const mailtoLink = `mailto:contact@fydback.com.au?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      })
      
      alert('Your email client should open with the message pre-filled.')
      
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight py-1">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to automate interviews, research, and feedback collection? We're here to help you get started.
          </p>
        </div>

        {/* Contact Form - Centered */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Get Started Today</CardTitle>
              <p className="text-muted-foreground">
                Contact us to learn more about Fydback's AI-powered voice feedback platform
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">How do you plan to use Fydback? (Optional)</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your use case..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center">
                We'll never spam you. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}