import { useEffect, useState } from 'react'
import { Menu, X, Plus, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { CLINIC } from '../data'

const LINKS = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Doctor', '#doctor'], ['Facilities', '#facilities'], ['Home Care', '#homecare'], ['Reviews', '#reviews'], ['Blog', '#blog'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      let cur = 'home'
      LINKS.forEach(([, h]) => { const el = document.getElementById(h.slice(1)); if (el && el.getBoundingClientRect().top <= 140) cur = h.slice(1) })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="container topbar-in">
          <a href={CLINIC.tel}><Phone size={14} /> {CLINIC.phoneDisplay}</a>
          <span><MapPin size={14} /> Kalpalayam Junction, Karamana, Thiruvananthapuram</span>
          <span><Clock size={14} /> Open 24 hours daily (verify)</span>
        </div>
      </div>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-logo"><Plus size={22} strokeWidth={3.2} /></span>
            <span>Medcare Clinic<small>Caring for your family</small></span>
          </a>
          <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href} className={active === href.slice(1) ? 'active' : ''} aria-current={active === href.slice(1) ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a href="#appointment" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Book Appointment <ArrowRight className="arrow" size={16} /></a>
          </nav>
          <a href={CLINIC.tel} className="icon-btn call-icon" aria-label="Call the clinic" data-tip="Call clinic"><Phone size={18} /></a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  )
}
