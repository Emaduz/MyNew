/**
 * About section component - Professional summary and background information
 * Highlights EmadAlddine's expertise and professional approach
 */
import React from 'react'
import { Award, Users, Lightbulb, Globe } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: '9+ Years Experience',
      description: 'Proven track record in graphic design and visual communication'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Experienced in leading design teams and cross-functional collaboration'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Expert in delivering impactful visual content for print and digital platforms'
    },
    {
      icon: Globe,
      title: 'Multilingual',
      description: 'Fluent in Arabic, English, and French for global communication'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating visual experiences that make a lasting impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Journey
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              As a Senior Graphic Designer with over 9 years of experience, I specialize in creating 
              compelling visual identities that resonate with audiences. My expertise spans across 
              branding, logo design, UI/UX design, and marketing materials for both print and digital platforms.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I've had the privilege of working with diverse organizations, from local printing houses 
              to prestigious institutions like Al Masjid Al Nabawi, where my designs have been viewed 
              by millions of people worldwide.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My approach combines creative vision with strategic thinking, ensuring that every design 
              not only looks exceptional but also serves its intended purpose effectively. I'm passionate 
              about staying current with design trends and continuously expanding my skill set.
            </p>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="space-y-6">
            <img 
              src="https://pub-cdn.sider.ai/u/U01AH8O39O6/web-coder/687cf394877a7836b0161b06/resource/7f704fde-fdde-4267-8ee7-a39f7181b992.jpg" 
              alt="Design workspace"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            {/* Education & Certifications */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Education & Certifications</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Bachelor's Degree in Graphic & Multimedia (2021)</li>
                <li>• TOEFL ITP Certificate (2021)</li>
                <li>• Diplôme Français Junior (2022)</li>
                <li>• ICDL Certificate (2016)</li>
                <li>• English Advanced Diploma (2018)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {highlights.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
