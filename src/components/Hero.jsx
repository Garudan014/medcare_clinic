import { Phone, ArrowRight, Stethoscope, FlaskConical, Users } from 'lucide-react'
import Img from './Img'
import { CLINIC } from '../data'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">YOUR HEALTHCARE PARTNER</span>
          <h1>Compassionate Care. <em>Better Health.</em> A Healthier Tomorrow.</h1>
          <p className="lead">Medcare Clinic in Karamana brings consultations, diagnostics, a pharmacy and bed facilities together for you and your family.</p>
          <div className="btn-row">
            <a href="#appointment" className="btn btn-primary">Book an Appointment <ArrowRight className="arrow" size={18} /></a>
            <a href="#services" className="btn btn-outline">Explore Our Services</a>
            <a href={CLINIC.tel} className="icon-btn" aria-label="Call the clinic" data-tip="Call clinic"><Phone size={20} /></a>
          </div>
          <div className="pill-row">
            <a href="#contact" className="pill">24-Hour Availability*</a>
            <a href="#facilities" className="pill">Diagnostic Services</a>
            <a href="#services" className="pill">Family Healthcare</a>
            <a href="#homecare" className="pill">Home Care Support</a>
          </div>
          <p className="note">*Hours as supplied; please verify with the clinic.</p>
        </div>
        <div className="hero-visual">
          
          <div className="hero-photo"><Img file="hero.jpg" alt="Doctor consulting with a patient (illustrative)" label="Hero image" className="hero-img" /></div>
        </div>
      </div>
    </section>
  )
}
