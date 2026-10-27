import { MapPin, Phone, Navigation, Copy, Clock } from 'lucide-react'
import { CLINIC, toast } from '../data'

const MAP = 'https://maps.google.com/maps?q=' + encodeURIComponent('FXJ9+PMX Kalpalayam Junction Karamana Thiruvananthapuram Kerala') + '&z=16&output=embed'

export default function Location() {
  const copy = async () => {
    try { await navigator.clipboard.writeText(CLINIC.address); toast('Address copied') } catch { toast('Could not copy. Please copy it manually.') }
  }
  return (
    <section id="location" className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FIND US</span>
          <h2>Our location</h2>
          <p>Kalpalayam Junction, Karamana, Thiruvananthapuram.</p>
        </div>
        <div className="loc-grid">
          <iframe title="Medcare Clinic location on Google Maps" src={MAP} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="loc-card">
            <ul className="contact-list">
              <li><MapPin size={20} /><span>{CLINIC.address}</span></li>
              <li><Phone size={20} /><a href={CLINIC.tel}>{CLINIC.phoneDisplay}</a></li>
              <li><Clock size={20} /><span>{CLINIC.hours}</span></li>
            </ul>
            <div className="btn-col">
              <a className="btn btn-primary" href={CLINIC.directions} target="_blank" rel="noreferrer"><Navigation size={18} /> Get Directions</a>
              <button className="btn btn-outline" onClick={copy}><Copy size={18} /> Copy Address</button>
            </div>
            <p className="note">Map pin is based on the supplied address and Plus Code. Please verify before publishing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
