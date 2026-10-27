import { useState } from 'react'
import { Plus, Minus, ClipboardList } from 'lucide-react'
import { FAQS, PREP_TIPS } from '../data'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="info" className="section alt">
      <div className="container two-col top">
        <div>
          <span className="eyebrow">PATIENT INFORMATION</span>
          <h2>Preparing for your visit</h2>
          <div className="card prep">
            <h3><ClipboardList size={20} /> Before a consultation</h3>
            <ul>{PREP_TIPS.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="note">General information only; not medical advice.</p>
          </div>
        </div>
        <div>
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <div className="accordion">
            {FAQS.map((f, i) => {
              const open = openIdx === i
              return (
                <div className={`acc-item ${open ? 'open' : ''}`} key={f.q}>
                  <h3><button id={`faq-b${i}`} aria-expanded={open} aria-controls={`faq-p${i}`} onClick={() => setOpenIdx(open ? -1 : i)}>
                    {f.q} <span className="pm">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
                  </button></h3>
                  <div className="acc-panel" id={`faq-p${i}`} role="region" aria-labelledby={`faq-b${i}`}><div><p>{f.a}</p></div></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
