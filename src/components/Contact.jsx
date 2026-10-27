import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Clock, Navigation, CheckCircle2, Loader2 } from 'lucide-react'
import { CLINIC } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', category: 'General enquiry', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.contact.trim()) errs.contact = 'Please enter a phone number or email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.contact) && !/^(\+91)?[6-9]\d{9}$/.test(form.contact.replace(/[\s-]/g, ''))) errs.contact = 'Enter a valid phone number or email.'
    if (!form.message.trim()) errs.message = 'Please write a message.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 900) // demo: nothing is sent
  }

  return (
    <section id="contact" className="section">
      <div className="container two-col top">
        <div>
          <span className="eyebrow">Contact &amp; Location</span>
          <h2>Visit or contact us</h2>
          <ul className="contact-list">
            <li><MapPin size={20} /><span>{CLINIC.address}</span></li>
            <li><Phone size={20} /><a href={CLINIC.tel}>{CLINIC.phoneDisplay}</a></li>
            <li><Clock size={20} /><span>{CLINIC.hours}</span></li>
          </ul>
          <div className="btn-row">
            <a href={CLINIC.tel} className="btn btn-primary"><Phone size={18} /> Call Now</a>
            <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline"><MessageCircle size={18} /> WhatsApp</a>
            <a href={CLINIC.directions} target="_blank" rel="noreferrer" className="btn btn-ghost"><Navigation size={18} /> Get Directions</a>
          </div>
          <p className="note">The map is in the Find Us section above.</p>
        </div>

        {sent ? (
          <div className="card confirm" role="status">
            <CheckCircle2 size={48} />
            <h3>Demo message recorded</h3>
            <p className="note">This is a demonstration; your message was not sent to the clinic. Please call or WhatsApp to reach clinic staff.</p>
            <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name: '', contact: '', category: 'General enquiry', message: '' }) }}>Send another</button>
          </div>
        ) : (
          <form className="card form" onSubmit={submit} noValidate>
            <h3>Send an enquiry (demo)</h3>
            {[['name', 'Name', 'text'], ['contact', 'Phone or email', 'text']].map(([id, label, type]) => (
              <div className="field" key={id}>
                <label htmlFor={`c-${id}`}>{label} *</label>
                <input id={`c-${id}`} name={id} type={type} value={form[id]} onChange={change} />
                {errors[id] && <span className="error" role="alert">{errors[id]}</span>}
              </div>
            ))}
            <div className="field">
              <label htmlFor="c-category">Enquiry category</label>
              <select id="c-category" name="category" value={form.category} onChange={change}>
                {['General enquiry', 'Appointments', 'Diagnostics', 'Home healthcare'].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="c-message">Message *</label>
              <textarea id="c-message" name="message" rows="4" value={form.message} onChange={change} />
              {errors.message && <span className="error" role="alert">{errors.message}</span>}
            </div>
            <button className="btn btn-primary" disabled={loading}>
              {loading ? <><Loader2 size={18} className="spin" /> Sending...</> : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
