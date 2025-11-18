import { Ruler, Sofa, Home, BadgeCheck } from 'lucide-react'

const services = [
  {
    icon: Ruler,
    title: 'Architectural Planning',
    desc: 'Site analysis, zoning, floor plans and permit-ready drawings tailored to your lifestyle.'
  },
  {
    icon: Sofa,
    title: 'Interior Design',
    desc: 'Material palettes, furniture curation, lighting design, and bespoke millwork details.'
  },
  {
    icon: Home,
    title: 'New Builds & Remodels',
    desc: 'From ground-up construction to thoughtful renovations, we orchestrate every detail.'
  },
  {
    icon: BadgeCheck,
    title: 'Project Management',
    desc: 'Transparent timelines, vetted contractors, and on-site supervision for flawless delivery.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">End-to-end residential design for modern, elevated living.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <Icon className="text-white" />
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
