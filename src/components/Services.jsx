import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Cloud, Layers, ShieldCheck, Database, Cpu } from 'lucide-react'

const services = [
  { Icon: Code2,      title: 'Custom Software Development', desc: 'Web and mobile applications engineered for scale, reliability, and maintainability.' },
  { Icon: Cloud,      title: 'Cloud Infrastructure',        desc: 'AWS, GCP, and Azure architecture — provisioned right, secured properly, monitored continuously.' },
  { Icon: Layers,     title: 'Enterprise Web Apps',         desc: 'Full-stack platforms built for complex workflows, integrations, and high-traffic environments.' },
  { Icon: ShieldCheck,title: 'Cybersecurity Services',      desc: 'Penetration testing, security audits, and compliance frameworks that protect what you\'ve built.' },
  { Icon: Database,   title: 'Data Engineering',            desc: 'Pipelines, warehouses, and analytics infrastructure that turn raw data into decisions.' },
  { Icon: Cpu,        title: 'AI & Automation',             desc: 'Machine learning integration and intelligent automation that removes operational bottlenecks.' },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="svc-card">
      <div style={{
        width: 42, height: 42, background: 'rgba(26,115,232,0.15)',
        borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
      }}>
        <service.Icon size={20} color="var(--cyan)" strokeWidth={1.8} />
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>
        {service.title}
      </h3>
      <p style={{ color: 'var(--slate)', fontSize: 13.5, lineHeight: 1.65 }}>{service.desc}</p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="services" style={{ padding: '90px 5%', background: 'var(--bg2)' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 56 }}>
        
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', color: '#fff', marginBottom: 14 }}>
          What We Build
        </h2>
        <p style={{ color: 'var(--slate)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
          End-to-end technology services, from architecture to deployment.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .svc-card {
          background: var(--card);
          border: 1px solid rgba(26,115,232,0.18);
          border-radius: 6px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, border-color 0.2s;
          cursor: default;
        }
        .svc-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--cyan);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .svc-card:hover {
          transform: translateY(-3px) scale(1.01);
          border-color: rgba(0,212,255,0.45);
        }
        .svc-card:hover::after { transform: scaleX(1); }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
