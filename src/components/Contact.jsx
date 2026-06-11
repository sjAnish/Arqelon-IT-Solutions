import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Clock, Linkedin, Twitter, Github } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputStyle = {
    width: '100%', background: 'var(--bg2)', border: '1px solid rgba(26,115,232,0.2)',
    borderRadius: 4, padding: '11px 14px', color: '#fff', fontSize: 14,
    fontFamily: "'Inter', sans-serif", outline: 'none',
  }

  const labelStyle = {
    display: 'block', fontSize: 12, color: 'var(--slate)', marginBottom: 7,
    fontWeight: 500, letterSpacing: 0.5, textTransform: 'uppercase',
    fontFamily: "'JetBrains Mono', monospace",
  }

  return (
    <section id="contact" style={{ padding: '90px 5%', background: 'var(--bg)' }}>
      <div ref={ref} className="contact-grid">
        {/* Left: Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,40px)', color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
            Let's Build Something Together
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
            Whether you have a full brief or just an idea — we're ready to talk. Reach out and let's figure out what's possible.
          </p>

          {[
            { Icon: Mail,   title: 'Email',   val: 'contact@arqelonitsolutions.in' },
            { Icon: MapPin, title: 'Address', val: '3rd Floor, Aditya Towers, New Ramna Road\nAra, Bihar – 802301' },
            { Icon: Clock,  title: 'Hours',   val: 'Mon–Sat, 9:00 AM – 6:30 PM IST' },
          ].map(({ Icon, title, val }) => (
            <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, minWidth: 36, background: 'rgba(26,115,232,0.12)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={16} color="var(--cyan)" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--slate)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>{title}</div>
                <div style={{ fontSize: 14, color: '#fff', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{val}</div>
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            {[{ Icon: Linkedin, label: 'LinkedIn' }, { Icon: Twitter, label: 'Twitter' }, { Icon: Github, label: 'GitHub' }].map(({ Icon, label }) => (
              <button key={label} aria-label={label} className="soc-btn">
                <Icon size={16} strokeWidth={1.8} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <form onSubmit={handleSubmit} style={{ background: 'var(--card)', border: '1px solid rgba(26,115,232,0.15)', borderRadius: 8, padding: 32 }}>
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
              { label: 'Email Address', type: 'email', placeholder: 'you@company.com', required: true },
              { label: 'Company', type: 'text', placeholder: 'Your company name (optional)', required: false },
            ].map(f => (
              <div key={f.label} style={{ marginBottom: 20 }}>
                <label style={labelStyle}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} required={f.required}
                  style={inputStyle} className="form-field" />
              </div>
            ))}

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Service Interest</label>
              <select required style={inputStyle} className="form-field">
                <option value="">Select a service...</option>
                {['Custom Software Development','Cloud Infrastructure','Enterprise Web App','Cybersecurity Services','Data Engineering','AI & Automation','Other'].map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Project Brief</label>
              <textarea rows={4} placeholder="Tell us about your project..." required
                style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }} className="form-field" />
            </div>

            <button type="submit" style={{
              width: '100%', background: submitted ? '#0f6e56' : 'var(--blue)',
              color: '#fff', padding: 13, borderRadius: 4, fontWeight: 500,
              fontSize: 15, border: 'none', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif", transition: 'background 0.3s',
            }}>
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
        .form-field:focus { border-color: var(--blue) !important; outline: none; }
        .form-field::placeholder { color: rgba(138,155,191,0.4); }
        .form-field option { background: var(--bg2); color: #fff; }
        .soc-btn {
          width: 38px; height: 38px; border: 1px solid rgba(26,115,232,0.3);
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; background: transparent; color: var(--slate); transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .soc-btn:hover { border-color: var(--cyan); color: var(--cyan); background: rgba(0,212,255,0.08); }
      `}</style>
    </section>
  )
}
