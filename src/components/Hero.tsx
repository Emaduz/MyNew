/**
 * Hero section component - Main banner with EmadAlddine's introduction
 * Features professional title, location, and call-to-action
 */
import React from 'react'
import { Button } from './ui/button'
import { MapPin, Phone, Mail, Download } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            EI
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          EmadAlddine Ismael
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
          Senior Graphic Designer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Creative and detail-oriented designer with 9+ years of experience in branding, logo design, 
          and marketing materials. Expert in Adobe Creative Suite, UI/UX design, and emerging design trends.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>Al-Madina, Saudi Arabia</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>+966 504487308</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <span>Emad.i202020@gmail.com</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('experience')}
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            View Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
