import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Let’s design your space</h2>
            <p className="mt-3 text-white/70">Tell us about your project and we’ll schedule a free consultation.</p>
            <div className="mt-8 grid gap-3 text-white/80">
              <a href="mailto:studio@bluehaus.design" className="inline-flex items-center gap-3 hover:text-white"><Mail size={18}/> studio@bluehaus.design</a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-3 hover:text-white"><Phone size={18}/> +1 (234) 567-890</a>
            </div>
          </div>
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur grid gap-4">
            <input placeholder="Full name" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-inset ring-white/20 focus:ring-blue-400" />
            <input placeholder="Email" type="email" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-inset ring-white/20 focus:ring-blue-400" />
            <textarea placeholder="Project details" rows={4} className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-inset ring-white/20 focus:ring-blue-400" />
            <button type="button" className="rounded-full bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-400 transition">Request consultation</button>
          </form>
        </div>
        <p className="mt-8 text-center text-white/50 text-sm">© {new Date().getFullYear()} BlueHaus Studio. All rights reserved.</p>
      </div>
    </section>
  )
}
