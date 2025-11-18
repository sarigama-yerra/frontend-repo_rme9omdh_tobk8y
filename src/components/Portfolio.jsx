export default function Portfolio() {
  const items = [
    { title: 'Skylight Atrium House', tag: 'New Build', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Minimalist Loft', tag: 'Interior', img: 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Hillside Retreat', tag: 'Remodel', img: 'https://images.unsplash.com/photo-1472552944129-b035e9ea3744?q=80&w=1974&auto=format&fit=crop' }
  ];

  return (
    <section id="portfolio" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-white/70">A glimpse into recent projects.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-2.5 font-medium hover:bg-slate-100 transition">Start your project</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={card.img} alt={card.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">{card.tag}</span>
                <h3 className="mt-2 text-white text-lg font-medium">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
