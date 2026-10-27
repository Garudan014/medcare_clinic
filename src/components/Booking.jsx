import { useState } from 'react'
import { CheckCircle2, Loader2, ArrowRight, ArrowLeft, Info } from 'lucide-react'
import { ICONS } from '../icons'
import { SERVICES, TIME_SLOTS, toast } from '../data'
import Modal from './Modal'

const EMPTY = { department: '', name: '', phone: '', email: '', date: '', time: '', reason: '' }
const STEPS = ['Service', 'Details', 'Review']
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` }

function validate(f) {
  const e = {}
  if (!f.department) e.department = 'Please choose a service.'
  if (!f.name.trim()) e.name = 'Please enter the patient name.'
  if (!f.phone.trim()) e.phone = 'Please enter a phone number.'
  else if (!/^(\+91)?[6-9]\d{9}$/.test(f.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (!f.date) e.date = 'Please choose a date.'
  else if (f.date < today()) e.date = 'Past dates cannot be selected.'
  if (!f.time) e.time = 'Please choose a time.'
  return e
}

export default function Booking({ initial, onClose }) {
  const [step, setStep] = useState(initial ? 1 : 0)
  const [f, setF] = useState({ ...EMPTY, department: initial || '' })
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [ref, setRef] = useState(null)
  const errs = validate(f)
  const stepOk = step === 0 ? !errs.department : step === 1 ? !['name', 'phone', 'email', 'date', 'time'].some((k) => errs[k]) : true

  const set = (k, v) => setF((p) => ({ ...p, [k]: v }))
  const bind = (k) => ({ id: k, value: f[k], onChange: (e) => set(k, e.target.value), onBlur: () => setTouched((t) => ({ ...t, [k]: true })) })
  const Err = ({ k }) => (touched[k] && errs[k] ? <span className="error" role="alert">{errs[k]}</span> : null)

  const submit = () => {
    setLoading(true)
    setTimeout(() => {
      const reference = `DEMO-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 90 + 10)}`
      try {
        const saved = JSON.parse(localStorage.getItem('medcare_demo_appointments') || '[]')
        saved.push({ reference, department: f.department, date: f.date, time: f.time }) // no personal details stored
        localStorage.setItem('medcare_demo_appointments', JSON.stringify(saved))
      } catch { /* ignore */ }
      setRef(reference); setLoading(false); toast('Demo request recorded. Nothing was sent to the clinic.')
    }, 900)
  }
  const restart = () => { setF(EMPTY); setTouched({}); setRef(null); setStep(0) }

  return (
    <Modal title="Book an appointment (demo)" onClose={onClose} wide>
      <div className="modal-body booking">
        <h3>Book an appointment</h3>
        <p className="demo-line"><Info size={16} /> Demo only. This does not book a real appointment or reach clinic staff.</p>
        {ref ? (
          <div className="confirm" role="status">
            <CheckCircle2 size={52} /><h3>Demo request recorded</h3>
            <p>Demo reference number</p><p className="ref">{ref}</p>
            <p className="note">Clinic staff have not received this request and nothing is confirmed. Please call or WhatsApp the clinic to book.</p>
            <div className="btn-row"><button className="btn btn-primary" onClick={restart}>Start a new booking</button><button className="btn btn-outline" onClick={onClose}>Close</button></div>
          </div>
        ) : (
          <>
            <ol className="progress" aria-label="Progress">
              {STEPS.map((s, i) => <li key={s} className={i === step ? 'now' : i < step ? 'done' : ''} aria-current={i === step ? 'step' : undefined}><span>{i < step ? '✓' : i + 1}</span>{s}</li>)}
            </ol>
            {step === 0 && (
              <div className="svc-pick" role="radiogroup" aria-label="Select a service">
                {SERVICES.map((s) => { const I = ICONS[s.iconKey]; return (
                  <button key={s.id} role="radio" aria-checked={f.department === s.title} className={f.department === s.title ? 'sel' : ''} onClick={() => set('department', s.title)}><I size={20} />{s.title}</button>
                ) })}
              </div>
            )}
            {step === 1 && (
              <div className="form">
                <div className="form-grid">
                  <div className="field"><label htmlFor="name">Patient name *</label><input {...bind('name')} autoComplete="name" /><Err k="name" /></div>
                  <div className="field"><label htmlFor="phone">Phone number *</label><input {...bind('phone')} type="tel" placeholder="9XXXXXXXXX" autoComplete="tel" /><Err k="phone" /></div>
                  <div className="field"><label htmlFor="email">Email (optional)</label><input {...bind('email')} type="email" /><Err k="email" /></div>
                  <div className="field"><label htmlFor="date">Preferred date *</label><input {...bind('date')} type="date" min={today()} /><Err k="date" /></div>
                </div>
                <div className="field"><span className="lbl">Preferred time *</span>
                  <div className="chips" role="radiogroup" aria-label="Preferred time">
                    {TIME_SLOTS.map((t) => <button key={t} type="button" role="radio" aria-checked={f.time === t} className={`pill ${f.time === t ? 'active' : ''}`} onClick={() => { set('time', t); setTouched((x) => ({ ...x, time: true })) }}>{t}</button>)}
                  </div><Err k="time" />
                </div>
                <div className="field"><label htmlFor="reason">Brief reason (optional)</label><textarea {...bind('reason')} rows="2" placeholder="Please avoid sensitive medical details." /></div>
              </div>
            )}
            {step === 2 && (
              <dl className="review">
                {[['Service', f.department], ['Name', f.name], ['Phone', f.phone], ['Email', f.email || 'Not provided'], ['Date', f.date], ['Time', f.time], ['Reason', f.reason || 'Not provided']].map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
            )}
            <div className="btn-row between">
              {step > 0 ? <button className="btn btn-ghost" onClick={() => setStep(step - 1)}><ArrowLeft size={18} /> Back</button> : <span />}
              {step < 2
                ? <button className="btn btn-primary" disabled={!stepOk} onClick={() => setStep(step + 1)}>Next <ArrowRight className="arrow" size={18} /></button>
                : <button className="btn btn-primary" disabled={loading} onClick={submit}>{loading ? <><Loader2 size={18} className="spin" /> Submitting...</> : 'Submit Demo Request'}</button>}
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}
