// src/components/Hero.tsx
export const Hero = () => (
  <section id="hero" className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">WEBKM.ID  • Solusi Digital UMKM</span>
      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">Kami percaya setiap UMKM punya<br /><span className="gradient-text">potensi besar</span></h1>
      <p className="mt-4 max-w-2xl mx-auto text-slate-600">Kami bantu kamu punya website yang tampil profesional tanpa biaya besar. Gratis untuk mulai, fleksibel untuk tumbuh.</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="#templates" className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-indigo-700 font-semibold">Mulai Sekarang</a>
        <a href="#pricing" className="bg-white px-5 py-3 rounded-lg border hover:shadow-md font-semibold">Konsultasi Gratis</a>
      </div>
    </div>
  </section>
);