import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Doctor from './components/Doctor'
import Facilities from './components/Facilities'
import AppointmentForm from './components/AppointmentForm'
import Booking from './components/Booking'
import HomeCare from './components/HomeCare'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Location from './components/Location'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const [showTop, setShowTop] = useState(false)
  const [booking, setBooking] = useState(null) // null = closed, otherwise { svc }
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    // Any link to #appointment opens the booking modal instead of scrolling
    const onClick = (e) => { const a = e.target.closest('a[href="#appointment"]'); if (a) { e.preventDefault(); setBooking({ svc: '' }) } }
    const onBook = (e) => setBooking({ svc: e.detail || '' })
    let timer
    const onToast = (e) => { setMsg(e.detail); clearTimeout(timer); timer = setTimeout(() => setMsg(''), 4000) }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onClick)
    window.addEventListener('open-booking', onBook)
    window.addEventListener('toast', onToast)

    // Scroll-reveal: gentle fade-in when sections enter the screen
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) } }), { threshold: 0.12 })
    document.querySelectorAll('.section-head, .two-col > *, .bento, .fac-grid, .book-band, .accordion, .t-grid, .blog-grid, .loc-grid').forEach((el) => { el.classList.add('reveal'); io.observe(el) })

    return () => {
      window.removeEventListener('scroll', onScroll); document.removeEventListener('click', onClick)
      window.removeEventListener('open-booking', onBook); window.removeEventListener('toast', onToast); io.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Services /><Doctor /><Facilities /><AppointmentForm /><HomeCare /><Testimonials /><Blog /><FAQ /><Location /><Contact />
      </main>
      <Footer />
      <FloatingActions showTop={showTop} />
      {booking && <Booking initial={booking.svc} onClose={() => setBooking(null)} />}
      {msg && <div className="toast" role="status">{msg}</div>}
    </>
  )
}
