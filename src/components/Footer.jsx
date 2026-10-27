import { Plus, ArrowRight, ArrowUp } from 'lucide-react'
import { CLINIC } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand light"><span className="brand-logo"><Plus size={22} strokeWidth={3.2} /></span> Medcare Clinic</div>
          <p>Accessible healthcare, consultations and diagnostics in Karamana, Thiruvananthapuram.</p>
          <a href="#appointment" className="btn btn-white">Book Appointment <ArrowRight className="arrow" size={16} /></a>
        </div>
        <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#doctor">Doctor</a><a href="#facilities">Facilities</a><a href="#contact">Contact</a></div>
        <div><h4>Our Services</h4><a href="#services">General Consultation</a><a href="#services">Diabetology</a><a href="#services">Pediatrics</a><a href="#facilities">Diagnostics</a><a href="#homecare">Home Healthcare</a></div>
        <div><h4>Contact Us</h4><a href={CLINIC.tel}>{CLINIC.phoneDisplay}</a><a href={CLINIC.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><span>{CLINIC.address}</span><span>Open 24 hours daily (verify)</span></div>
      </div>
      <div className="container copy">
        <span>&copy; {new Date().getFullYear()} Medcare Clinic. Demonstration website for a college project; forms do not reach clinic staff.</span>
        <button className="icon-btn light" aria-label="Back to top" data-tip="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={18} /></button>
      </div>
    </footer>
  )
}
