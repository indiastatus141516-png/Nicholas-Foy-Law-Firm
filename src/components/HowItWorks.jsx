import React from 'react'

export default function HowItWorks(){
  return (
    <section id="how-it-works" className="container">
      <h3 className="section-title">How It Works</h3>
      <div className="grid cols-3">
        <div className="card">
          <h4>1. Apply Online</h4>
          <p>Fill out our simple form in under 5 minutes.</p>
        </div>
        <div className="card">
          <h4>2. Get Approved</h4>
          <p>Receive instant decision via email.</p>
        </div>
        <div className="card">
          <h4>3. Receive Funds</h4>
          <p>Money transferred to your account within 24 hours.</p>
        </div>
      </div>
    </section>
  )
}
