import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Tech Stack', href: '#tech' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 68,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(10,15,30,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,115,232,0.2)' : '1px solid transparent',
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: 2 }}>
            ARQELON
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: 'var(--cyan)', letterSpacing: 4, textTransform: 'uppercase' }}>
            IT Solutions
          </span>
        </a>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center', margin: 0 }}
          className="desktop-nav">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                color: 'var(--slate)', fontSize: 13.5, textDecoration: 'none',
                fontWeight: 500, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--slate)'}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              background: 'var(--blue)', color: '#fff', padding: '8px 18px',
              borderRadius: 4, fontWeight: 500, fontSize: 13.5, textDecoration: 'none',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.target.style.background = '#1565c0'}
              onMouseLeave={e => e.target.style.background = 'var(--blue)'}>
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(true)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          className="hamburger" aria-label="Open menu">
          <span style={{ width: 22, height: 2, background: '#fff', display: 'block' }} />
          <span style={{ width: 22, height: 2, background: '#fff', display: 'block' }} />
          <span style={{ width: 22, height: 2, background: '#fff', display: 'block' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 200,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 36,
        }}>
          <button onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}
            aria-label="Close menu">✕</button>
          {[...links, { label: 'Contact', href: '#contact' }].map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ color: '#fff', fontSize: 22, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
