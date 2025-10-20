// src/components/Features.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const featuresData = [
  { icon: '🚢', title: 'Integrasi Logistik', description: 'Jaringan kurir & forwarder siap kirim produk ke luar negeri dengan tarif kompetitif.' },
  { icon: '📄', title: 'Dokumen & Kepabeanan', description: 'Template dokumen ekspor/impor & panduan step-by-step untuk UMKM pemula.' },
  { icon: '💼', title: 'Listing Marketplace Global', description: 'Integrasi ke marketplace multi-negara dan optimasi listing produk.' },
];

export const Features = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8"><h2 className="text-2xl font-extrabold">Fitur Utama untuk UMKM</h2><p className="text-muted mt-2">Semua dioptimasi untuk proses ekspor-impor: dokumen, logistik, dan pembayaran global.</p></div>
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