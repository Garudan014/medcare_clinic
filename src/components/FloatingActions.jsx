import { Phone, MessageCircle, CalendarCheck, ArrowUp } from 'lucide-react'
import { CLINIC, openBooking } from '../data'

export default function FloatingActions({ showTop }) {
  return (
    <>
      {showTop && <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={20} /></button>}
      <a className="fab" href={CLINIC.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp the clinic" data-tip="WhatsApp us"><MessageCircle size={26} /></a>
      <nav className="mobile-bar" aria-label="Quick actions">
        <a href={CLINIC.tel}><Phone size={20} />Call</a>
        <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} />WhatsApp</a>
        <button onClick={() => openBooking()}><CalendarCheck size={20} />Book</button>
      </nav>
    </>
  )
}
