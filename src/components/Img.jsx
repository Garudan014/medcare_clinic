import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

// Shows /images/<file>. If the file is missing, shows a neat placeholder instead of a broken image.
export default function Img({ file, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`img-ph ${className}`} role="img" aria-label={alt}>
        <ImageIcon size={32} />
        <span>{label || alt}</span>
        <small>Placeholder: add public/images/{file}</small>
      </div>
    )
  }
  return <img className={className} src={`/images/${file}`} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
