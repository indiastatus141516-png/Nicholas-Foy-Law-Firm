import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="footer-top">
        <div className="container footer-grid">
          <div>
            <h6>LoanApp</h6>
            <p className="note">Fast and easy loans for everyone.</p>
            <p>© <span id="year">2025</span> LoanApp. All rights reserved.</p>
          </div>
          <div>
            <h6>Links</h6>
            <p><a href="#features">Features</a></p>
            <p><a href="#how-it-works">How It Works</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
