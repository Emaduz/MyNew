/**
 * Skills section component - Technical expertise and competencies
 * Displays EmadAlddine's professional skills in various categories
 */
import React from 'react'
import { Palette, Monitor, Layers, PenTool, Eye, Users } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: 'Design Software',
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 95 },
        { name: 'Adobe InDesign', level: 90 },
        { name: '3D Modeling Tools', level: 85 }
      ]
    },
    {
      icon: Monitor,
      title: 'Digital Design',
      skills: [
        { name: 'UI/UX Design', level: 88 },
        { name: 'Mobile App Interface', level: 85 },
        { name: 'Web Design', level: 80 },
        { name: 'Digital Marketing Materials', level: 92 }
      ]
    },
    {
      icon: Layers,
      title: 'Branding & Identity',
      skills: [
        { name: 'Logo Design', level: 95 },
        { name: 'Brand Identity Development', level: 93 },
        { name: 'Typography', level: 90 },
        { name: 'Visual Storytelling', level: 88 }
      ]
    },
    {
      icon: PenTool,
      title: 'Print Design',
      skills: [
        { name: 'Layout Design', level: 93 },
        { name: 'Print Production', level: 90 },
        { name: 'Brochures & Catalogs', level: 92 },
        { name: 'Signage Design', level: 87 }
      ]
    }
  ]

  const additionalSkills = [
    { icon: Eye, title: 'Trend Analysis', description: 'Staying current with design trends and emerging technologies' },
    { icon: Users, title: 'Team Collaboration', description: 'Cross-functional teamwork and project management' },
    { icon: Palette, title: 'Creative Conceptualization', description: 'Transforming ideas into compelling visual narratives' }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set developed through 9+ years of professional experience
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Competencies */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">Arabic</div>
              <div className="text-gray-600">Native</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">English</div>
              <div className="text-gray-600">Advanced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">French</div>
              <div className="text-gray-600">Elementary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
