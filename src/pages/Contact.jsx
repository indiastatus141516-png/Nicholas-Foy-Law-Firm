import React from 'react'

export default function Contact(){
  return (
    <section className="container">
      <h3 className="section-title">Contact Us</h3>
      <div className="grid cols-2">
        <div className="card">
          <h4>Get in Touch</h4>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="btn primary">Send</button>
          </form>
        </div>
        <div className="card">
          <h4>Contact Info</h4>
          <p>Address: 123 Loan St, City, State</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@loanapp.com</p>
        </div>
      </div>
    </section>
  )
}
