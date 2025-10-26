// src/components/Features.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const featuresData = [
  { icon: '🧭', title: 'Website & Landing Page', description: 'Bangun website profesional tanpa ribet. Tersedia template gratis siap pakai atau desain custom sesuai identitas bisnismu.' },
  { icon: '💬', title: 'Integrasi Chat & Sosial Media', description: 'Hubungkan WhatsApp, Instagram, dan marketplace agar pelanggan bisa langsung order dan tanya.' },
  { icon: '💼', title: 'Website + Mobile App', description: 'Kembangkan bisnis lebih luas dengan paket lengkap website dan aplikasi mobile yang saling terhubung dan mudah digunakan pelangganmu.' },
];

export const Features = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8"><h2 className="text-2xl font-extrabold">Fitur Utama untuk UMKM</h2><p className="text-muted mt-2">Semua yang kamu butuhkan untuk membawa bisnismu naik level — dari toko lokal jadi brand digital.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map(feature => (
            <div key={feature.title} className="bg-white rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-2xl grid place-items-center flex-shrink-0">{feature.icon}</div>
              <div><h4 className="font-bold">{feature.title}</h4><p className="text-muted text-sm">{feature.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};