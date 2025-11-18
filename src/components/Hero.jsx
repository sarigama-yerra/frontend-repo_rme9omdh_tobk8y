import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-6 flex items-end pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">Modern House Design Studio</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Spaces that elevate modern living
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            We design contemporary homes that blend luxury, functionality, and timeless minimalism. From concept to completion, our team crafts spaces made to be lived in.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-slate-100 transition">
              View portfolio
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-500/90 text-white px-6 py-3 font-medium hover:bg-blue-400 transition">
              Book a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
