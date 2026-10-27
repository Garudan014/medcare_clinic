import { useState } from 'react'
import { ArrowUpRight, Phone, CalendarCheck } from 'lucide-react'
import { ICONS } from '../icons'
import { SERVICES, CATS, CLINIC, openBooking } from '../data'
import Modal from './Modal'

export default function Services() {
  const [cat, setCat] = useState('All Services')
  const [sel, setSel] = useState(null)
  const list = SERVICES.filter((s) => cat === 'All Services' || s.cat === cat)
  const SelIcon = sel && ICONS[sel.iconKey]

  return (
    <section id="services" className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">MEDICAL SERVICES</span>
          <h2>Care for every need</h2>
          <p>Please contact the clinic to confirm availability of any service.</p>
        </div>
        <div className="pill-row center" role="group" aria-label="Filter services">
          {CATS.map((c) => (
            <button key={c} className={`pill ${cat === c ? 'active' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="bento">
          {list.map((s) => {
            const Icon = ICONS[s.iconKey]
            return (
              <article key={s.id} className={`card svc `} onClick={() => setSel(s)}>
                <div className="svc-top"><span className="icon-bubble"><Icon size={26} /></span><span className="tag">{s.cat}</span></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <button className="link-btn" onClick={(e) => { e.stopPropagation(); setSel(s) }}>Learn More <ArrowUpRight className="arrow" size={18} /></button>
              </article>
            )
          })}
        </div>
      </div>
      {sel && (
        <Modal title={sel.title} onClose={() => setSel(null)}>
          <div className="modal-body">
            <span className="icon-bubble"><SelIcon size={28} /></span>
            <span className="tag">{sel.cat}</span>
            <h3>{sel.title}</h3>
            <p>{sel.more}</p>
            <p className="note">Information is general. Please contact the clinic to confirm details and availability.</p>
            <div className="btn-row">
              <button className="btn btn-primary" onClick={() => { const t = sel.title; setSel(null); openBooking(t) }}><CalendarCheck size={18} /> Book this service</button>
              <a className="btn btn-outline" href={CLINIC.tel}><Phone size={18} /> Call the clinic</a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
