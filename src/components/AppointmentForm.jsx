import { CalendarCheck, ClipboardCheck, ListChecks, ArrowRight, Info } from 'lucide-react'
import { openBooking } from '../data'

export default function AppointmentForm() {
  return (
    <section id="appointment" className="section">
      <div className="container">
        <div className="book-band">
          <div>
            <span className="eyebrow">BOOK APPOINTMENT</span>
            <h2>Request an appointment in three steps</h2>
            <p className="demo-line"><Info size={16} /> Demo only: requests are not sent to the clinic. To actually book, call or WhatsApp.</p>
            <button className="btn btn-primary" onClick={() => openBooking()}>Start Booking <ArrowRight className="arrow" size={18} /></button>
          </div>
          <ol className="steps-prev">
            <li><ListChecks size={22} /><div><strong>Choose a service</strong>Pick what you need</div></li>
            <li><CalendarCheck size={22} /><div><strong>Add your details</strong>Date, time and contact</div></li>
            <li><ClipboardCheck size={22} /><div><strong>Review &amp; submit</strong>Get a demo reference</div></li>
          </ol>
        </div>
      </div>
    </section>
  )
}
