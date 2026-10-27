import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

// Accessible modal: Esc closes, Tab stays inside, focus returns to the opener.
export default function Modal({ title, onClose, children, wide }) {
  const box = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    document.body.style.overflow = 'hidden'
    box.current.querySelector('.modal-close').focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const els = [...box.current.querySelectorAll('button:not(:disabled),a[href],input,select,textarea')]
        const first = els[0], last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose])
  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`modal ${wide ? 'wide' : ''}`} role="dialog" aria-modal="true" aria-label={title} ref={box}>
        <button className="modal-close icon-btn" onClick={onClose} aria-label="Close" data-tip="Close"><X size={20} /></button>
        {children}
      </div>
    </div>
  )
}
