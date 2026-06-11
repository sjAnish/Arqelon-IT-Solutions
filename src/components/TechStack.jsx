import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const row1 = ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Django', 'FastAPI', 'Java Spring Boot', 'React Native', 'Flutter']
const row2 = ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'Apache Kafka', 'Apache Spark', 'GitHub Actions', 'Terraform', 'Linux']

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', marginBottom: 12 }}>
      <div
        className={`marquee-inner ${reverse ? 'marquee-rev' : 'marquee-fwd'}`}
        style={{ display: 'flex', gap: 12, width: 'max-content' }}>
        {doubled.map((t, i) => (
          <div key={i} className="tech-pill">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', flexShrink: 0 }} />
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tech" style={{ padding: '90px 0', background: 'var(--bg2)', overflow: 'hidden' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 48, padding: '0 5%' }}>
        
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', color: '#fff', marginBottom: 14 }}>
          Technologies We Work With
        </h2>
        <p style={{ color: 'var(--slate)', fontSize: 16 }}>Modern tools. Production-proven choices.</p>
      </motion.div>

      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />

      <style>{`
        .tech-pill {
          background: var(--card); border: 1px solid rgba(26,115,232,0.25);
          border-radius: 4px; padding: 8px 16px; font-size: 13px; color: #fff;
          white-space: nowrap; font-weight: 500; display: flex; align-items: center;
          gap: 8px; transition: border-color 0.2s;
        }
        .tech-pill:hover { border-color: var(--cyan); }
        .marquee-fwd { animation: marquee-fwd 30s linear infinite; }
        .marquee-rev { animation: marquee-rev 25s linear infinite; }
        .marquee-inner:hover { animation-play-state: paused; }
        @keyframes marquee-fwd { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-rev { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </section>
  )
}
