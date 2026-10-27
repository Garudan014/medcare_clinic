import { Phone, MessageCircle } from 'lucide-react'
import Img from './Img'
import { CLINIC } from '../data'

const MSG = encodeURIComponent('Hello Medcare Clinic, I would like to enquire about home healthcare support through Kaigo Home Health Care.')

export default function HomeCare() {
  return (
    <section id="homecare" className="section warm">
      <div className="container two-col">
        <div>
          <span className="eyebrow">HOME HEALTHCARE</span>
          <h2>Healthcare Support, Beyond the Clinic.</h2>
          <p>Medcare Clinic is associated with Kaigo Home Health Care for home healthcare support. Specific services, availability and response times are not stated here and must be confirmed with the clinic.</p>
          <div className="pill-row">
            <span className="pill static">1. Call or WhatsApp</span>
            <span className="pill static">2. Mention home care</span>
            <span className="pill static">3. Share the patient's needs</span>
          </div>
          <div className="btn-row">
            <a className="btn btn-primary" href={`${CLINIC.whatsapp}?text=${MSG}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Enquire About Home Care</a>
            <a className="btn btn-outline" href={CLINIC.tel}><Phone size={18} /> Contact the Clinic</a>
          </div>
        </div>
        <div className="img-wrap"><span className="shape" aria-hidden="true" /><Img file="homecare.jpg" alt="Healthcare at home (illustrative image)" label="Home care image" className="side-img zoom" /></div>
      </div>
    </section>
  )
}
