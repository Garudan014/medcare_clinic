import { useState } from 'react'
import { ArrowUpRight, Clock } from 'lucide-react'
import Img from './Img'
import Modal from './Modal'

// DEMO ARTICLES: general information only. Have the clinic review before publishing.
const ARTICLES = [
  { id: 1, cat: 'Consultations', read: '2 min read', file: 'blog-consultation.jpg', title: 'What to expect at a general consultation',
    excerpt: 'A simple guide to preparing for your first visit.',
    body: ['A general consultation is usually the first step when you are unwell or want advice about your health. The doctor will ask about your symptoms, how long you have had them and any medicines you take.', 'It helps to bring a photo ID, previous prescriptions or reports, and a short list of questions you would like to ask.', 'Depending on what you describe, the doctor may suggest an examination or tests. If anything is unclear, ask what each recommendation is for.'] },
  { id: 2, cat: 'Diagnostics', read: '2 min read', file: 'blog-lab.jpg', title: 'Getting ready for a laboratory test',
    excerpt: 'Why preparation differs from test to test.',
    body: ['Some blood tests need preparation, such as not eating for a set period beforehand, while others do not. Requirements differ by test.', 'Ask the clinic or the doctor who requested the test whether any preparation is needed, and follow the instructions you are given.', 'Carry the doctor\'s request if you have one, and let the staff know about any medicines you take regularly.'] },
  { id: 3, cat: 'Diagnostics', read: '2 min read', file: 'blog-ecg.jpg', title: 'Understanding an ECG',
    excerpt: 'What the test is and what it is not.',
    body: ['An electrocardiogram (ECG) records the electrical activity of the heart using small sensors placed on the skin. The test is painless and usually takes only a few minutes.', 'It can help doctors look at heart rhythm and other aspects of how the heart is working, but the result must be interpreted by a doctor together with your symptoms and history.', 'If you have chest pain, severe breathlessness or fainting, seek urgent medical care instead of waiting for an appointment.'] },
]

export default function Blog() {
  const [sel, setSel] = useState(null)
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">HEALTH INSIGHTS</span>
          <h2>From the clinic blog</h2>
          <p>General information only, not medical advice. Sample articles for demonstration.</p>
        </div>
        <div className="blog-grid">
          {ARTICLES.map((a) => (
            <article className="blog-card" key={a.id}>
              <div className="blog-img-wrap"><Img file={a.file} alt={`${a.title} (illustrative image)`} label={a.title} className="blog-img" /></div>
              <div className="blog-body">
                <div className="meta"><span className="tag">{a.cat}</span><span><Clock size={14} /> {a.read}</span></div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <button className="link-btn" onClick={() => setSel(a)}>Read Article <ArrowUpRight className="arrow" size={18} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {sel && (
        <Modal title={sel.title} onClose={() => setSel(null)} wide>
          <div className="modal-body article">
            <span className="tag">{sel.cat}</span>
            <h3>{sel.title}</h3>
            {sel.body.map((p, i) => <p key={i}>{p}</p>)}
            <p className="note">General information, not medical advice. Please consult a doctor about your own health. Sample article for demonstration.</p>
          </div>
        </Modal>
      )}
    </section>
  )
}
