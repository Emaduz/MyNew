/**
 * Home page component - Main landing page for EmadAlddine Ismael's portfolio
 * Combines all major sections of the portfolio website
 */
import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}
