import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, FileText, CheckSquare, Users } from 'lucide-react'

const reasons = [
  { Icon: Cpu,         title: 'Technical Depth',        desc: "We don't just implement — we architect. Every system is designed for what happens at scale." },
  { Icon: FileText,    title: 'Transparent Process',    desc: "Weekly updates, clear documentation, and no surprises. You're always in the loop." },
  { Icon: CheckSquare, title: 'Delivery Discipline',    desc: 'We set realistic timelines and honor them. Milestone-based delivery with clear accountability.' },
  { Icon: Users,       title: 'Long-Term Partnership',  desc: "Post-launch isn't the end. We stay engaged, iterate, and grow with your product." },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" style={{ padding: '90px 5%', background: 'var(--bg2)' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 56 }}>
        
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', color: '#fff' }}>
          Why Teams Choose Arqelon
        </h2>
      </motion.div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <motion.div key={r.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            style={{
              display: 'flex', gap: 18, padding: 28,
              background: 'var(--card)', border: '1px solid rgba(26,115,232,0.15)',
              borderRadius: 6,
            }}>
            <div style={{
              width: 42, height: 42, minWidth: 42, background: 'var(--blue)',
              borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <r.Icon size={20} color="#fff" strokeWidth={1.8} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 7 }}>
                {r.title}
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: 13.5, lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .why-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
        @media (max-width: 700px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
