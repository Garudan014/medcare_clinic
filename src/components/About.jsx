import { MapPin, Stethoscope, Users, FlaskConical, ArrowRight, Pill } from 'lucide-react'
import Img from './Img'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <div className="img-wrap">
          <span className="shape" aria-hidden="true" />
          <Img file="about.jpg" alt="Clinic reception (illustrative image)" label="Clinic image" className="side-img zoom" />
        </div>
        <div>
          <span className="eyebrow">ABOUT MEDCARE</span>
          <h2>Accessible, compassionate healthcare for every family</h2>
          <p>Consultations, diagnostics, a pharmacy and bed facilities under one roof, with home healthcare support through Kaigo Home Health Care.</p>
          <ul className="points">
            <li><span><Stethoscope size={20} /></span><div><strong>Consultations</strong>General, diabetes and child care</div></li>
            <li><span><FlaskConical size={20} /></span><div><strong>Diagnostics</strong>Laboratory and ECG</div></li>
            <li><span><Pill size={20} /></span><div><strong>On-site pharmacy</strong>Convenient for patients</div></li>
            <li><span><Users size={20} /></span><div><strong>Family focus</strong>Care for all ages</div></li>
          </ul>
          <a href="#services" className="btn btn-primary">Discover Our Services <ArrowRight className="arrow" size={18} /></a>
        </div>
      </div>
    </section>
  )
}
