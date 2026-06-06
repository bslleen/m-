import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav>
      <a href="#" className="nav-logo">Lina</a>
      <ul className={`nav-links${open ? ' nav-open' : ''}`}>
        <li><a href="#projects" onClick={close}>Projects</a></li>
        <li><a href="#writing" onClick={close}>Writing</a></li>
        <li><a href="#about" onClick={close}>About</a></li>
        <li><a href="#contact" onClick={close}>Contact</a></li>
      </ul>
      <button
        className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
