export const CLINIC = {
  name: 'Medcare Clinic',
  address: 'FXJ9+PMX, Kalpalayam Junction, Karamana, Thiruvananthapuram, Kerala 695002',
  phoneDisplay: '+91 99955 59255',
  tel: 'tel:+919995559255',
  whatsapp: 'https://wa.me/919995559255',
  hours: '24 hours daily (as provided; verify before publishing)',
  directions: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('FXJ9+PMX Kalpalayam Junction Karamana Thiruvananthapuram Kerala 695002'),
}

// iconKey is mapped to a Lucide icon inside Services.jsx
export const SERVICES = [
  { id: 'consult', iconKey: 'Stethoscope', title: 'General Medical Consultation', short: 'Consultation with the clinic doctor for everyday health concerns.', more: 'Walk in or request an appointment to speak with Dr. Vishnu about your health concerns. Please contact the clinic to confirm availability.' },
  { id: 'diabetes', iconKey: 'Droplets', title: 'Diabetology', short: 'Consultation and care related to diabetes.', more: 'Diabetes-related consultation is listed among the clinic\'s services. Contact the clinic for details about what is offered.' },
  { id: 'peds', iconKey: 'Baby', title: 'Pediatrics', short: 'Medical consultation for children.', more: 'Pediatric consultation is available as a clinic service. Contact the clinic to confirm timings.' },
  { id: 'lab', iconKey: 'FlaskConical', title: 'Laboratory Diagnostics', short: 'In-clinic laboratory testing support.', more: 'The clinic offers laboratory diagnostics. Ask the clinic which tests are available and whether any preparation (such as fasting) is needed.' },
  { id: 'ecg', iconKey: 'HeartPulse', title: 'ECG Services', short: 'Electrocardiogram (ECG) facility at the clinic.', more: 'An ECG facility is available at the clinic. Results should be reviewed by a doctor.' },
  { id: 'minor', iconKey: 'Scissors', title: 'Minor Procedures', short: 'Minor procedures handled at the clinic.', more: 'The clinic lists minor procedures among its services. Please call to ask what can be done and whether a consultation is needed first.' },
  { id: 'beds', iconKey: 'BedDouble', title: 'Bed Facilities', short: 'Bed facility for patients needing observation or rest.', more: 'Bed facilities are available. Please contact the clinic for availability and details.' },
  { id: 'pharmacy', iconKey: 'Pill', title: 'In-house Pharmacy', short: 'Pharmacy on the premises for convenience.', more: 'An in-house pharmacy is part of the clinic. Bring your prescription when you visit.' },
  { id: 'home', iconKey: 'Home', title: 'Home Healthcare Support', short: 'Home healthcare support through Kaigo Home Health Care.', more: 'The clinic is associated with Kaigo Home Health Care. Specific services, visit availability and response times are not confirmed on this website; please enquire directly.' },
]

export const DEPARTMENTS = SERVICES.map((s) => s.title)
export const TIME_SLOTS = ['Morning (6 AM - 12 PM)', 'Afternoon (12 PM - 5 PM)', 'Evening (5 PM - 10 PM)', 'Night (10 PM - 6 AM)']

export const FAQS = [
  { q: 'What services are available at Medcare Clinic?', a: 'General consultation, diabetology, pediatrics, laboratory diagnostics, ECG, minor procedures, bed facilities, an in-house pharmacy, and home healthcare support through Kaigo Home Health Care.' },
  { q: 'Where is the clinic located?', a: CLINIC.address + '. Use the Get Directions button in the Contact section to open Google Maps.' },
  { q: 'How can I contact the clinic?', a: 'Call or WhatsApp +91 99955 59255. The contact form on this website is a demo and does not reach clinic staff.' },
  { q: 'Can I enquire about home healthcare?', a: 'Yes. Call or WhatsApp the clinic to ask about home healthcare through Kaigo Home Health Care. Services and availability must be confirmed directly.' },
  { q: 'How can I request an appointment?', a: 'The appointment form on this site is a demonstration only; it saves data in your own browser. To actually book, please call or WhatsApp the clinic.' },
  { q: 'Is the clinic open 24 hours?', a: 'The clinic details provided state 24-hour daily operation. Please verify by phone before visiting, especially at night.' },
]

export const PREP_TIPS = [
  'Carry a photo ID and any previous prescriptions or reports.',
  'Note down your symptoms and how long you have had them.',
  'List medicines you are currently taking.',
  'Ask the clinic by phone if a test needs fasting or other preparation.',
]

// Categories used by the Services filter pills
const CAT = { consult: 'Consultations', diabetes: 'Consultations', peds: 'Consultations', lab: 'Diagnostics', ecg: 'Diagnostics', minor: 'Facilities', beds: 'Facilities', pharmacy: 'Facilities', home: 'Home Care' }
SERVICES.forEach((s) => { s.cat = CAT[s.id] })
export const CATS = ['All Services', 'Consultations', 'Diagnostics', 'Facilities', 'Home Care']
export const openBooking = (service = '') => window.dispatchEvent(new CustomEvent('open-booking', { detail: service }))
export const toast = (msg) => window.dispatchEvent(new CustomEvent('toast', { detail: msg }))

// DEMO CONTENT: replace with real, consented patient feedback before publishing.
export const TESTIMONIALS = [
  { name: 'Sample Patient A', note: 'Consultation visit', text: 'The staff were welcoming and the doctor took time to listen and explain things clearly.' },
  { name: 'Sample Patient B', note: 'Family visit', text: 'Having the lab and pharmacy in the same place made the visit much more convenient for us.' },
  { name: 'Sample Patient C', note: 'Enquiry', text: 'Easy to reach by phone, and the team answered my questions politely.' },
]

// DEMO CONTENT: general information only, not medical advice. Replace with clinic-approved articles.
export const POSTS = [
  { id: 'visit', tag: 'Patient Guide', read: '3 min read', file: 'blog1.jpg', title: 'How to prepare for your clinic visit',
    excerpt: 'A few simple steps that help your consultation go smoothly.',
    body: ['A little preparation helps you and the doctor make the most of your time together.', 'Carry a photo ID and any earlier prescriptions or reports. Write down your symptoms, when they began, and any questions you want to ask.', 'Make a list of the medicines you currently take, including anything bought over the counter. If a test is planned, ask the clinic beforehand whether you need to fast or prepare in any way.'] },
  { id: 'tests', tag: 'Diagnostics', read: '3 min read', file: 'blog2.jpg', title: 'Getting ready for laboratory tests',
    excerpt: 'Questions worth asking before you have a test done.',
    body: ['Different tests have different requirements, so it is always best to ask the clinic before you come.', 'Useful questions include: Do I need to fast? Can I take my usual medicines? How long will the results take? Who will explain the results to me?', 'Test results are best understood together with your doctor, who can consider them alongside your history and examination.'] },
  { id: 'habits', tag: 'Wellbeing', read: '4 min read', file: 'blog3.jpg', title: 'Everyday habits that support good health',
    excerpt: 'Simple routines that many people find helpful.',
    body: ['General healthy habits include eating a balanced diet, staying physically active in ways that suit you, getting regular sleep and drinking enough water.', 'Regular check-ups matter too, especially if you or your family have long-term conditions such as diabetes. Your doctor can advise what is suitable for you.', 'This article is general information and is not a substitute for personal medical advice.'] },
]
