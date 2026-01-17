import React from 'react'

export default function Services(){
  return (
    <section className="container">
      <h3 className="section-title">Our Services</h3>
      <div className="grid cols-3">
        <div className="card">
          <h4>Short-Term Loans</h4>
          <p>Quick loans for immediate needs.</p>
        </div>
        <div className="card">
          <h4>Long-Term Loans</h4>
          <p>Extended repayment options.</p>
        </div>
        <div className="card">
          <h4>Payday Advances</h4>
          <p>Advance on your next paycheck.</p>
        </div>
      </div>
    </section>
  )
}
