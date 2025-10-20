// src/components/Testimonials.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
const testimonialsData = [
  { quote: "Template free memudahkan kami untuk mulai jualan internasional tanpa biaya besar.", author: "Rina, UMKM Batik" },
  { quote: "Paket Growth worth it — guideline dan design system membantu brand kami konsisten.", author: "Joko, UMKM Kopi" },
  { quote: "Pelayanan support sangat cepat, dan integrasi logistik memudahkan proses kirim.", author: "Siti, UMKM Kriya" },
];

export const Testimonials = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="testimonials" className="py-16 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8"><h2 className="text-2xl font-extrabold">Apa Kata Klien Kami</h2><p className="text-muted mt-2">Beberapa testimoni nyata dari UMKM yang sudah go-export.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map(testi => (
            <blockquote key={testi.author} className="bg-white rounded-2xl p-6 shadow-md"><p className="italic">“{testi.quote}”</p><cite className="mt-4 block font-semibold not-italic">— {testi.author}</cite></blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};