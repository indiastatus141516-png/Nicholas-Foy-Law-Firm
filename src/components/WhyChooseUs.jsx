import React from 'react'

export default function WhyChooseUs(){
  return (
    <section id="why-choose-us" className="container">
      <h3 className="section-title">Why Choose Us</h3>
      <div className="grid cols-3">
        <div className="card">
          <h4>Trusted</h4>
          <p>Over 10,000 loans approved.</p>
        </div>
        <div className="card">
          <h4>Secure</h4>
          <p>Bank-level encryption and privacy.</p>
        </div>
        <div className="card">
          <h4>Support</h4>
          <p>24/7 customer service.</p>
        </div>
      </div>
    </section>
  )
}
