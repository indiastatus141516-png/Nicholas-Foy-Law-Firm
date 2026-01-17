import React from 'react'

export function About(){
  return (
    <section id="about" className="container">
      <h3 className="section-title">About Our Firm</h3>
      <p className="section-lede">We provide strategic advice and trial‑tested representation. Our team focuses on business disputes, real estate, employment issues, construction matters, estate planning, and serious personal injury cases. Clients choose us for clear guidance, efficient execution, and results that hold up in the real world.</p>
      <div className="grid cols-3">
        <div className="card"><h4>Business‑First Strategy</h4><p className="note">We structure each matter around your objectives—because a legal win should move you forward.</p></div>
        <div className="card"><h4>Trial‑Ready</h4><p className="note">Courtroom experience informs our negotiations, settlements, and litigation tactics.</p></div>
        <div className="card"><h4>Clear Communication</h4><p className="note">Plain‑English updates and predictable billing options for every engagement.</p></div>
      </div>
    </section>
  )
}

export function Practice(){
  return (
    <section id="practice" className="container">
      <h3 className="section-title">Practice Areas</h3>
      <div className="grid cols-3">
        <div className="card"><h4>Business Litigation</h4><p>Contract claims, fraud, non‑compete enforcement, and shareholder disputes.</p></div>
        <div className="card"><h4>Real Estate</h4><p>Transactions, commercial leases, title issues, and property disputes.</p></div>
        <div className="card"><h4>Employment</h4><p>Wage &amp; hour, investigations, severance, and executive agreements.</p></div>
        <div className="card"><h4>Construction</h4><p>Payment disputes, liens, defects, and contract negotiation.</p></div>
        <div className="card"><h4>Estate Planning</h4><p>Wills, trusts, probate, and guardianship guidance for families and founders.</p></div>
        <div className="card"><h4>Personal Injury</h4><p>Serious injury and wrongful death—no fee unless we recover.</p></div>
      </div>
    </section>
  )
}

export function Attorneys(){
  return (
    <section id="attorneys" className="container">
      <h3 className="section-title">Attorneys</h3>
      <div className="grid cols-2">
        <div className="card"><h4>Nicholas Foy, Esq.</h4><p className="note">Managing Partner — Debt Litigation &amp; Complex Disputes</p></div>
        <div className="card"><h4>Jane Smith, Esq.</h4><p className="note">Partner — Real Estate, Employment &amp; Construction</p></div>
      </div>
    </section>
  )
}

export function Results(){
  return (
    <section id="results" className="container">
      <h3 className="section-title">Representative Results</h3>
      <div className="grid cols-3">
        <div className="card"><h4>$2.5M Settlement</h4><p>Resolved shareholder oppression dispute for a mid‑market company.</p></div>
        <div className="card"><h4>Defense Verdict</h4><p>Cleared a general contractor in a high‑exposure construction case.</p></div>
        <div className="card"><h4>Injunction Granted</h4><p>Enforced a non‑compete protecting proprietary information.</p></div>
      </div>
      <p className="note" style={{marginTop:'.75rem'}}>Every matter is unique. Past outcomes do not guarantee future results.</p>
    </section>
  )
}

export function Contact(){
  return (
    <section id="contact" className="container">
      <h3 className="section-title">Contact</h3>
      <div className="grid cols-2">
        <div className="card">
          <p><strong>Address</strong><br/>2686 Glenwood Ave SE, Suite 110<br/>Atlanta, GA 30316</p>
          <p><strong>Phone:</strong> <a href="tel:+14705895188">(470) 589‑5188</a><br/><strong>Email:</strong> <a href="mailto:help@nicholasfoylaw.com">help@nicholasfoylaw.com</a></p>
          <p><strong>Hours:</strong> Mon–Fri, 9:00am–5:30pm</p>
        </div>
        <div className="card" style={{padding:0,overflow:'hidden'}}>
          <iframe title="Map: 2686 Glenwood Ave SE, Atlanta GA" src="https://www.google.com/maps?q=2686+Glenwood+Ave+SE,+Suite+110,+Atlanta,+GA+30316&amp;output=embed" width="100%" height="320" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}

export function Footer(){
  return (
    <footer>
      <div className="footer-top">
        <div className="container footer-grid">
          <div>
            <h6>Nicholas Foy Law Firm</h6>
            <p className="note">2686 Glenwood Ave SE, Suite 110 Atlanta, GA 30316</p>
            <p><a href="tel:+14705895188">(470) 589‑5188</a> • <a href="mailto:help@nicholasfoylaw.com">help@nicholasfoylaw.com</a></p>
          </div>
          <div>
            <h6>Navigate</h6>
            <p><a href="#about">About</a></p>
            <p><a href="#practice">Practice Areas</a></p>
            <p><a href="#attorneys">Attorneys</a></p>
            <p><a href="https://nicholasfoylaw.com/privacypolicy.html">Privacy Policy</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div>© <span id="year">2025</span> Nicholas Foy Law Firm. All rights reserved.</div>
        <div className="note">Site follows ABA advertising guidance; contact information and responsible attorney listed.</div>
      </div>
    </footer>
  )
}
