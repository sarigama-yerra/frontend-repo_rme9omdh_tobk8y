import { Sparkles, PencilRuler, Hammer, Home } from 'lucide-react'

const steps = [
  { icon: Sparkles, title: 'Discovery', desc: 'We align on vision, budget, and lifestyle needs.' },
  { icon: PencilRuler, title: 'Design', desc: 'Concepts, 3D visuals, and detailed specifications.' },
  { icon: Hammer, title: 'Build', desc: 'We coordinate construction, vendors, and site supervision.' },
  { icon: Home, title: 'Handover', desc: 'Final styling and walkthrough to ensure every detail shines.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Our process</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-white">
                <Icon />
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
