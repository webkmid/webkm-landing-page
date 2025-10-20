// src/components/Hero.tsx
export const Hero = () => (
  <section id="hero" className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">Solusi UMKM • Export & Import</span>
      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">Bawa produk UMKM Anda<br /><span className="gradient-text">ke pasar global</span> — cepat dan mudah.</h1>
      <p className="mt-4 max-w-2xl mx-auto text-slate-600">Pilih template yang sesuai: versi Free untuk start cepat, atau Premium untuk kebutuhan profesional. Semua template responsif, SEO-friendly, dan mudah dikustom.</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="#templates" className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-indigo-700 font-semibold">Lihat Template</a>
        <a href="#pricing" className="bg-white px-5 py-3 rounded-lg border hover:shadow-md font-semibold">Cek Paket</a>
      </div>
    </div>
  </section>
);