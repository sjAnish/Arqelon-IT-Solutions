import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', label: 'Discovery',      desc: 'We learn your business, define scope, and identify technical requirements.' },
  { num: '02', label: 'Architecture',   desc: 'System design, tech stack selection, and infrastructure planning.' },
  { num: '03', label: 'Development',    desc: 'Agile sprints with weekly demos. Clean code, reviewed code.' },
  { num: '04', label: 'QA & Testing',   desc: 'Automated and manual testing across environments before any release.' },
  { num: '05', label: 'Launch & Support', desc: 'Deployment, monitoring, and ongoing support post-go-live.' },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" style={{ padding: '90px 5%', background: 'var(--bg)' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 56 }}>
       
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', color: '#fff', marginBottom: 14 }}>
          How We Work
        </h2>
        <p style={{ color: 'var(--slate)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
          A defined process that removes ambiguity and keeps projects on track.
        </p>
      </motion.div>

      <div ref={ref} className="process-wrap">
        {/* Connector line (desktop only) */}
        <div className="process-line" />
        <div className="process-steps">
          {steps.map((s, i) => (
            <motion.div key={s.num} className="step-item"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="step-circle">{s.num}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 8 }}>{s.label}</div>
              <div style={{ color: 'var(--slate)', fontSize: 12.5, lineHeight: 1.6 }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-wrap { position: relative; }
        .process-line {
          position: absolute; top: 27px; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, var(--blue), rgba(0,212,255,0.4));
          z-index: 0;
        }
        .process-steps {
          display: flex; gap: 0; position: relative; z-index: 1;
        }
        .step-item {
          flex: 1; text-align: center; padding: 0 12px;
        }
        .step-circle {
          width: 56px; height: 56px; border-radius: 50%;
          background: var(--card); border: 2px solid var(--blue);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          font-family: 'JetBrains Mono', monospace; font-weight: 500; font-size: 13px;
          color: var(--cyan);
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .step-item:hover .step-circle {
          border-color: var(--cyan);
          box-shadow: 0 0 18px rgba(0,212,255,0.35);
        }
        @media (max-width: 768px) {
          .process-line { display: none; }
          .process-steps { flex-direction: column; gap: 24px; }
          .step-item { text-align: left; display: flex; flex-direction: column; }
          .step-circle { margin: 0 0 12px; }
        }
      `}</style>
    </section>
  )
}
