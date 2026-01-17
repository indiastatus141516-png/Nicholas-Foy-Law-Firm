import React from 'react'

export default function MobileMenu({open=false, onClose=()=>{}}){
  return (
    <div id="mobileMenu" className={"mobile-menu" + (open ? ' open' : '')}>
      <a href="#about" onClick={onClose}>About</a>
      <a href="#practice" onClick={onClose}>Practice Areas</a>
      <a href="#attorneys" onClick={onClose}>Attorneys</a>
      <a href="#results" onClick={onClose}>Results</a>
      <a className="btn primary" href="#contact" onClick={onClose}>Contact</a>
    </div>
  )
}
