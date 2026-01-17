import React from 'react'

export default function Newsletter(){
  return (
    <section id="newsletter" className="container">
      <h3 className="section-title">Subscribe to Our Newsletter</h3>
      <form className="card">
        <input type="email" placeholder="Enter your email" />
        <button type="submit" className="btn primary">Subscribe</button>
      </form>
    </section>
  )
}
