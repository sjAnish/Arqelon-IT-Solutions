import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ padding: '90px 5%', background: 'var(--bg)' }}>
      <div ref={ref} className="about-grid">
        {/* Left: Text */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,42px)', color: '#fff', lineHeight: 1.15, marginBottom: 24 }}>
            Execution Is the Only Metric That Matters
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: 15, lineHeight: 1.75, marginBottom: 14 }}>
            Arqelon IT Solutions was founded on a simple belief: the gap between a good idea and a working product is execution. We exist to close that gap.
          </p>
          <p style={{ color: 'var(--slate)', fontSize: 15, lineHeight: 1.75, marginBottom: 14 }}>
            We're a team of engineers, architects, and strategists based in Bihar, India — building technology for clients who can't afford to wait for results.
          </p>
          <p style={{ color: 'var(--slate)', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
            We don't over-promise and under-deliver. We scope carefully, build precisely, and ship consistently.
          </p>

          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[{ num: '100+', label: 'Satisfied Clients' }, { num: '15+', label: 'Technologies Mastered' }].map(s => (
              <div key={s.label} style={{ borderLeft: '2px solid var(--blue)', paddingLeft: 16 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: '#fff' }}>{s.num}</div>
                <div style={{ fontSize: 12, color: 'var(--slate)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Terminal */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <div style={{ background: '#0A0F1E', border: '1px solid rgba(26,115,232,0.25)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: 'var(--card)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />
              ))}
              <span style={{ marginLeft: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#4a5568' }}>arqelon_deploy.sh</span>
            </div>
            <div style={{ padding: '20px 24px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 2 }}>
              {[
                <><span style={{color:'#6e7d9e'}}>$</span> <span style={{color:'#60a5fa'}}>git</span> <span style={{color:'#e2e8f0'}}>push origin main</span></>,
                <><span style={{color:'var(--cyan)'}}>✓</span> <span style={{color:'#e2e8f0'}}>Build pipeline triggered</span></>,
                <><span style={{color:'var(--cyan)'}}>✓</span> <span style={{color:'#e2e8f0'}}>Tests: 247/247 passed</span></>,
                <><span style={{color:'var(--cyan)'}}>✓</span> <span style={{color:'#e2e8f0'}}>Security scan clean</span></>,
                <><span style={{color:'var(--cyan)'}}>✓</span> <span style={{color:'#e2e8f0'}}>Container image built</span></>,
                <><span style={{color:'var(--cyan)'}}>✓</span> <span style={{color:'#e2e8f0'}}>Deployed to production</span></>,
              ].map((line, i) => <div key={i}>{line}</div>)}
              <div style={{ marginTop: 8 }}>
                <span style={{color:'#4ade80'}}>▶</span>{' '}
                <span style={{color:'#e2e8f0'}}>Live at arqelon.app</span>{' '}
                <span style={{color:'#6e7d9e'}}>— 2.3s</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <span style={{color:'#6e7d9e'}}>$</span>{' '}
                <span style={{color:'var(--cyan)', animation: 'blink 1s step-end infinite'}}>█</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 60fr 40fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  )
}
