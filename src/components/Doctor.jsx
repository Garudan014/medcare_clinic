import { Award, Phone, ArrowRight } from 'lucide-react'
import Img from './Img'
import { CLINIC } from '../data'

export default function Doctor() {
  return (
    <section id="doctor" className="section">
      <div className="container two-col">
        <div className="img-wrap doc-wrap">
          <span className="panel" aria-hidden="true" />
          <Img file="doctor.jpg" alt="Portrait placeholder for Dr. Vishnu" label="Photo of Dr. Vishnu" className="side-img portrait zoom" />
          <div className="exp-badge"><strong>15+</strong><span>Years of Clinical Experience</span></div>
        </div>
        <div>
          <span className="eyebrow">OUR DOCTOR</span>
          <h2>Dr. Vishnu</h2>
          <p className="badge"><Award size={16} /> 15+ Years of Clinical Experience</p>
          <p>Dr. Vishnu leads clinical care at Medcare Clinic, seeing patients for general consultations and supporting the clinic's wide range of services.</p>
          <p className="note">Qualifications and registration details will be added once confirmed by the clinic.</p>
          <div className="btn-row">
            <a href="#appointment" className="btn btn-primary">Book a Consultation <ArrowRight className="arrow" size={18} /></a>
            <a href={CLINIC.tel} className="btn btn-outline"><Phone size={18} /> Call the Clinic</a>
          </div>
        </div>
      </div>
    </section>
  )
}
