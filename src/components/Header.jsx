import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Produk', href: '#produk' },
  { label: 'Wisata', href: '#wisata' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.classList.toggle('menu-open', next)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.classList.remove('menu-open')
  }

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <a href="#beranda" className="nav-brand">Dusun Depok</a>

          <nav className="nav-links">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
