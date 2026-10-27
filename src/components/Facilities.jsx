import { useState } from 'react'
import { ArrowUpRight, Phone } from 'lucide-react'
import Img from './Img'
import Modal from './Modal'
import { CLINIC } from '../data'

const ITEMS = [
  { title: 'Diagnostic Laboratory', file: 'lab.jpg', desc: 'Laboratory diagnostics are offered at the clinic. Ask which tests are available and whether preparation such as fasting is needed.' },
  { title: 'ECG Facility', file: 'ecg.jpg', desc: 'An ECG facility is available at the clinic. Results should be reviewed by a doctor.' },
  { title: 'Minor Operation Theatre', file: 'minor-ot.jpg', desc: 'Minor procedures are handled at the clinic. Please call to ask what can be done.' },
  { title: 'Bed Facility', file: 'beds.jpg', desc: 'Bed facilities are available for patients. Contact the clinic for availability.' },
  { title: 'In-house Pharmacy', file: 'pharmacy.jpg', desc: 'A pharmacy on the premises. Bring your prescription when you visit.' },
]

export default function Facilities() {
  const [sel, setSel] = useState(null)
  return (
    <section id="facilities" className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FACILITIES</span>
          <h2>Facilities at the clinic</h2>
          <p>Images are illustrative, not verified photographs of the clinic.</p>
        </div>
        <div className="fac-grid">
          {ITEMS.map((f, i) => (
            <button key={f.title} className={`fac ${i === 0 ? 'big' : ''}`} onClick={() => setSel(f)} aria-label={`View ${f.title}`}>
              <Img file={f.file} alt={`${f.title} (illustrative image)`} label={f.title} className="fac-img" />
              <span className="fac-cap"><strong>{f.title}</strong><small>{f.desc.split('.')[0]}.</small><ArrowUpRight className="arrow" size={20} /></span>
            </button>
          ))}
        </div>
      </div>
      {sel && (
        <Modal title={sel.title} onClose={() => setSel(null)} wide>
          <Img file={sel.file} alt={`${sel.title} (illustrative image)`} label={sel.title} className="modal-img" />
          <div className="modal-body">
            <h3>{sel.title}</h3>
            <p>{sel.desc}</p>
            <p className="note">Illustrative image, not a verified photograph of the clinic.</p>
            <a className="btn btn-primary" href={CLINIC.tel}><Phone size={18} /> Call to enquire</a>
          </div>
        </Modal>
      )}
    </section>
  )
}
