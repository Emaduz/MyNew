/**
 * Experience section component - Professional work history and achievements
 * Showcases EmadAlddine's career progression and key accomplishments
 */
import React from 'react'
import { Building2, MapPin, Calendar, Award, Users, TrendingUp } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'Al Masjid Al Nabawi',
      location: 'Saudi Arabia',
      position: 'Graphic Designer',
      period: 'Current Position',
      type: 'Institutional',
      achievements: [
        'Developed visuals for awareness and guidance campaigns viewed by millions of visitors',
        'Enhanced institutional branding through creative storytelling and innovative design solutions',
        'Collaborated with public affairs and media departments on comprehensive visual strategy',
        'Created culturally sensitive designs for international audiences from diverse backgrounds'
      ],
      highlights: ['Millions of Views', 'Global Audience', 'Cultural Sensitivity']
    },
    {
      company: 'Al Fanoos Trading Co.',
      location: 'Saudi Arabia', 
      position: 'Graphic & Printing Specialist',
      period: 'Current Position',
      type: 'Commercial',
      achievements: [
        'Designed high-quality print materials including brochures, business cards, and signage systems',
        'Coordinated with clients and production teams to consistently meet tight project deadlines',
        'Played a key role in boosting client satisfaction through meticulous attention to design detail',
        'Streamlined design-to-production workflows improving efficiency by 30%'
      ],
      highlights: ['Client Satisfaction', 'Quality Focus', 'Process Optimization']
    },
    {
      company: 'Freelance Projects',
      location: 'Remote / Global',
      position: 'Freelance Graphic Designer',
      period: 'Ongoing',
      type: 'Independent',
      achievements: [
        'Delivered personalized design solutions across industries including hospitality, tech, and retail',
        'Managed complete end-to-end design process from initial client briefing to final delivery',
        'Built a loyal client base and significantly increased referrals through consistent quality work',
        'Developed expertise in diverse design styles and brand requirements across various sectors'
      ],
      highlights: ['Multi-Industry', 'End-to-End Management', 'Client Loyalty']
    }
  ]

  const stats = [
    { number: '5+', label: 'Years Experience', icon: Calendar },
    { number: '100+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '95%', label: 'Client Satisfaction', icon: TrendingUp }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through impactful design roles and meaningful projects
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-blue-200 hidden md:block"></div>
              )}
              
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>
                
                <div className="md:ml-16">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          exp.type === 'Institutional' ? 'bg-green-100 text-green-800' :
                          exp.type === 'Commercial' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.position}</h4>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Bring Your Vision to Life?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            With extensive experience across various industries and design disciplines, 
            I'm ready to tackle your next creative challenge.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  )
}
