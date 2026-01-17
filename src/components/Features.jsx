import React from 'react'

export default function Features(){
  return (
    <section id="features" className="container">
      <h3 className="section-title">Features</h3>
      <div className="grid cols-3">
        <div className="card">
          <h4>Fast Approval</h4>
          <p>Get approved in minutes with our online process.</p>
        </div>
        <div className="card">
          <h4>Low Rates</h4>
          <p>Competitive interest rates starting from 5%.</p>
        </div>
        <div className="card">
          <h4>Flexible Terms</h4>
          <p>Repay over 1-7 years to suit your needs.</p>
        </div>
      </div>
    </section>
  )
}
