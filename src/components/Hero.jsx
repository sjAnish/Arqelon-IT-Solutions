import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: '120px 5% 80px',
    }}>
      {/* Grid Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(26,115,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,115,232,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Scan Line Animation */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="scanline-beam" />
      </div>

      <motion.div
        initial="hidden" animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        style={{ position: 'relative', zIndex: 2, maxWidth: 800, textAlign: 'center' }}>

        <motion.div variants={fadeUp}
          style={{
            display: 'inline-block', fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, color: 'var(--cyan)', border: '1px solid rgba(0,212,255,0.3)',
            padding: '6px 16px', borderRadius: 3, marginBottom: 28,
            background: 'rgba(0,212,255,0.04)',
          }}>
          &lt; WE BUILD. WE SHIP. WE SCALE. /&gt;
        </motion.div>

        <motion.h1 variants={fadeUp} style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: 'clamp(38px, 6vw, 68px)', lineHeight: 1.1,
          color: '#fff', marginBottom: 20,
        }}>
          Engineering Solutions That{' '}
          <span style={{ color: 'var(--cyan)' }}>Drive Real Results</span>
        </motion.h1>

        <motion.p variants={fadeUp} style={{
          color: 'var(--slate)', fontSize: 'clamp(15px, 2vw, 18px)',
          lineHeight: 1.7, maxWidth: 620, margin: '0 auto 36px',
        }}>
          Arqelon IT Solutions partners with businesses to architect, develop, and deploy
          technology that performs under pressure — not just in demos.
        </motion.p>

        <motion.div variants={fadeUp}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          <a href="#contact" className="btn-primary">Start a Project</a>
          <a href="#services" className="btn-outline">View Our Work</a>
        </motion.div>

        <motion.div variants={fadeUp}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { num: '20+', label: 'Projects Delivered' },
            { num: '98%', label: 'Client Retention' },
            { num: '2+',  label: 'Years in Operation' },
          ].map(m => (
            <div key={m.label} style={{
              background: 'rgba(22,32,64,0.7)', border: '1px solid rgba(26,115,232,0.2)',
              backdropFilter: 'blur(8px)', padding: '18px 28px', borderRadius: 6, textAlign: 'center',
            }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: 'var(--cyan)' }}>{m.num}</div>
              <div style={{ fontSize: 12, color: 'var(--slate)', marginTop: 3, fontWeight: 500 }}>{m.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        .scanline-beam {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.08), rgba(0,212,255,0.13), rgba(0,212,255,0.08), transparent);
          animation: scan 6s ease-in-out infinite; top: 0;
        }
        @keyframes scan {
          0%   { top: -2px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .btn-primary {
          background: var(--blue); color: #fff; padding: 13px 28px;
          border-radius: 4px; font-weight: 500; font-size: 15px;
          text-decoration: none; transition: background 0.2s; display: inline-block;
        }
        .btn-primary:hover { background: #1565c0; }
        .btn-outline {
          background: transparent; color: #fff; padding: 12px 28px;
          border-radius: 4px; font-weight: 500; font-size: 15px;
          text-decoration: none; border: 1px solid rgba(255,255,255,0.35);
          transition: border-color 0.2s, color 0.2s; display: inline-block;
        }
        .btn-outline:hover { border-color: var(--cyan); color: var(--cyan); }
        @media (max-width: 768px) {
          #home { text-align: left; }
          #home .btn-primary, #home .btn-outline { display: block; text-align: center; }
        }
      `}</style>
    </section>
  )
}
