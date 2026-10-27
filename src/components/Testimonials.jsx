import { useState } from 'react'
import { Quote, PenLine, Info } from 'lucide-react'
import Modal from './Modal'
import { toast } from '../data'

// DEMO CONTENT: replace with real feedback only from patients who have given permission.
const SAMPLES = [
  'The staff were welcoming and the consultation felt unhurried.',
  'Having the laboratory, pharmacy and consultation in one place saved time.',
  'Clear explanations and a calm, friendly atmosphere.',
]
const KEY = 'medcare_demo_feedback'
const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] } }

export default function Testimonials() {
  const [mine, setMine] = useState(load)
  const [open, setOpen] = useState(false)
  const [f, setF] = useState({ name: '', text: '' })
  const [err, setErr] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (f.text.trim().length < 10) { setErr('Please write at least 10 characters.'); return }
    const next = [...mine, { name: f.name.trim() || 'Anonymous', text: f.text.trim() }]
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* ignore */ }
    setMine(next); setF({ name: '', text: '' }); setErr(''); setOpen(false)
    toast('Thank you. Your feedback is saved on this device only (demo).')
  }

  return (
    <section id="reviews" className="section warm">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">PATIENT FEEDBACK</span>
          <h2>Words from our patients</h2>
          <p className="demo-line center"><Info size={16} /> Sample text for demonstration. Replace with real feedback shared with patient permission.</p>
        </div>
        <div className="t-grid">
          {SAMPLES.map((t, i) => (
            <figure className="t-card" key={i}>
              <Quote size={28} />
              <blockquote>{t}</blockquote>
              <figcaption>Sample patient <span className="tag">Sample</span></figcaption>
            </figure>
          ))}
          {mine.map((m, i) => (
            <figure className="t-card" key={`m${i}`}>
              <Quote size={28} />
              <blockquote>{m.text}</blockquote>
              <figcaption>{m.name} <span className="tag">Saved on this device</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="center-btn"><button className="btn btn-outline" onClick={() => setOpen(true)}><PenLine size={18} /> Share Your Experience</button></div>
      </div>
      {open && (
        <Modal title="Share your experience" onClose={() => setOpen(false)}>
          <form className="modal-body form" onSubmit={submit} noValidate>
            <h3>Share your experience</h3>
            <p className="note">Demo only: saved in your browser, not sent to the clinic. Please do not include medical details.</p>
            <div className="field"><label htmlFor="t-name">Name (optional)</label><input id="t-name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
            <div className="field"><label htmlFor="t-text">Your feedback *</label><textarea id="t-text" rows="4" value={f.text} onChange={(e) => setF({ ...f, text: e.target.value })} />{err && <span className="error" role="alert">{err}</span>}</div>
            <button className="btn btn-primary">Submit Feedback</button>
          </form>
        </Modal>
      )}
    </section>
  )
}
