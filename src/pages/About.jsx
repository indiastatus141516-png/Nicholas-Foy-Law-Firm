import React from 'react'

export default function About(){
  return (
    <section className="container">
      <h3 className="section-title">About Us</h3>
      <p className="section-lede">We are a leading payday loan provider committed to helping you with quick financial solutions.</p>
      <div className="grid cols-2">
        <div className="card">
          <h4>Our Story</h4>
          <p>Founded in 2010, we have helped thousands of customers with their financial needs.</p>
        </div>
        <div className="card">
          <h4>Our Mission</h4>
          <p>To provide fast, fair, and transparent loan services to everyone.</p>
        </div>
      </div>
    </section>
  )
}
