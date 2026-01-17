import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, Practice, Attorneys, Results, Contact, Footer } from './components/Sections'

export default function App(){
  useEffect(()=>{
    // set year into footer span once mounted
    const el = document.getElementById('year')
    if(el) el.textContent = new Date().getFullYear()
  }, [])

  return (
    <div>
      <a className="sr-only" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Practice />
        <Attorneys />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
