import { Mail, MapPin, Linkedin, Github } from 'lucide-react'

const quickLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Process',  href: '#process' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--darker)', padding: '60px 5% 24px', borderTop: '1px solid rgba(26,115,232,0.15)' }}>
      <div className="footer-grid">
        {/* Col 1: Brand */}
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 2, color: '#fff' }}>ARQELON</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: 'var(--cyan)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>IT Solutions</div>
          <p style={{ fontSize: 13, color: 'var(--slate)', lineHeight: 1.6, marginBottom: 20, maxWidth: 220 }}>
            Engineering solutions that perform.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ Icon: Linkedin, label: 'LinkedIn' }, { Icon: Github, label: 'GitHub' }].map(({ Icon, label }) => (
              <button key={label} aria-label={label} className="footer-soc">
                <Icon size={15} strokeWidth={1.8} />
              </button>
            ))}
          </div>
        </div>

        {/* Col 2: Links */}
        <div>
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 12, color: '#fff', marginBottom: 16, letterSpacing: 1, textTransform: 'uppercase' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {quickLinks.map(l => (
              <li key={l.href} style={{ marginBottom: 10 }}>
                <a href={l.href} style={{ color: 'var(--slate)', fontSize: 13.5, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--slate)'}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 12, color: '#fff', marginBottom: 16, letterSpacing: 1, textTransform: 'uppercase' }}>
            Contact
          </h4>
          {[
            { Icon: Mail,   text: 'contact@arqelonitsolutions.in' },
            { Icon: MapPin, text: '3rd Floor, Aditya Towers, New Ramna Road, Ara, Bihar – 802301' },
          ].map(({ Icon, text }) => (
            <div key={text} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 14 }}>
              <Icon size={14} color="var(--cyan)" strokeWidth={1.8} style={{ marginTop: 2, flexShrink: 0 }} />
              <span style={{ color: 'var(--slate)', fontSize: 13, lineHeight: 1.55 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(26,115,232,0.12)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ color: 'rgba(138,155,191,0.5)', fontSize: 12 }}>
          © 2025 Arqelon IT Solutions Pvt. Ltd. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy Policy', 'Terms of Service'].map(l => (
            <a key={l} href="#" style={{ color: 'rgba(138,155,191,0.45)', fontSize: 12, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--slate)'}
              onMouseLeave={e => e.target.style.color = 'rgba(138,155,191,0.45)'}>
              {l}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 2fr; gap: 48px; margin-bottom: 48px; }
        @media (max-width: 700px) { .footer-grid { grid-template-columns: 1fr; } }
        .footer-soc {
          width: 34px; height: 34px; border: 1px solid rgba(26,115,232,0.25);
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; background: transparent; color: var(--slate); transition: all 0.2s;
        }
        .footer-soc:hover { border-color: var(--cyan); color: var(--cyan); }
      `}</style>
    </footer>
  )
}
