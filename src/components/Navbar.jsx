import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20" />
              <span className="text-white text-lg font-semibold tracking-tight">BlueHaus Studio</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
              <a href="#process" className="hover:text-white transition">Process</a>
              <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition">
                <Phone size={16} /> Consult
              </a>
            </nav>

            <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-3 text-white/80">
                <a href="#services" className="hover:text-white transition">Services</a>
                <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
                <a href="#process" className="hover:text-white transition">Process</a>
                <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition">
                  <Mail size={16} /> Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
