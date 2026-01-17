import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="container nav" role="navigation" aria-label="Primary">
        <a className="brand" href="#home" aria-label="Home">
          <span className="logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c-3 2-6 2-9 0v7c0 5.5 3.6 9.9 9 11 5.4-1.1 9-5.5 9-11V2c-3 2-6 2-9 0zm1 4v2h3v2h-2.2l3.2 5.6A3 3 0 0 1 13.3 18H13v3h-2v-3h-.3a3 3 0 0 1-3.9-2.4L10 10H8V8h3V6h2zm-1 3.5L9.8 12h4.4L12 9.5z"></path></svg>
          </span>
          <span className="title"><strong>Nicholas Foy Law Firm</strong><span>Debt &amp; Trial Attorneys</span></span>
        </a>

        <nav className="navlinks" role="menubar" aria-label="Primary navigation">
          <a role="menuitem" href="#about">About</a>
          <a role="menuitem" href="#practice">Practice Areas</a>
          <a role="menuitem" href="#attorneys">Attorneys</a>
          <a role="menuitem" href="#results">Results</a>
          <a role="menuitem" className="btn primary" href="#contact">Contact</a>
        </nav>

        <button className="menu-btn" aria-expanded={menuOpen} aria-controls="mobileMenu" aria-label="Open menu" onClick={()=>setMenuOpen(o=>!o)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b1e37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={()=>setMenuOpen(false)} />
    </header>
  )
}
