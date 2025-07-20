/**
 * Contact section component - Contact information and communication channels
 * Provides multiple ways for potential clients to reach EmadAlddine
 */
import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, Download, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Emad.i202020@gmail.com',
      link: 'mailto:Emad.i202020@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+966 504487308',
      link: 'tel:+966504487308',
      description: 'Call during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Al-Madina, Saudi Arabia',
      link: '#',
      description: 'Available for local projects'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:Emad.i202020@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into stunning visuals? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                    <div className="flex items-center">
                      <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                        <a 
                          href={info.link}
                          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
                        >
                          {info.value}
                          {info.link !== '#' && <ExternalLink className="w-4 h-4" />}
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Details</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Nationality: Yemeni</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Languages: Arabic (Native), English (Advanced), French (Elementary)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Available for: Full-time, Part-time, Freelance projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Portfolio: Available upon request</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>

            {/* Additional Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Prefer a more direct approach?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+966504487308'}
                  className="flex-1 bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:Emad.i202020@gmail.com'}
                  className="flex-1 bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Direct Email
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            "Excellence in design comes from understanding both the art and the audience." - EmadAlddine Ismael
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <span>© 2024 EmadAlddine Ismael</span>
            <span>•</span>
            <span>Senior Graphic Designer</span>
            <span>•</span>
            <span>Al-Madina, Saudi Arabia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
