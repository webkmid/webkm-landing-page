// src/components/Pricing.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
const pricingPlans = [
  { name: 'UMKM Basic', price: 'FREE', features: ['• Template Free', '• Hosting & Subdomain', '• Integrasi Social Media','• Custom Warna'], cta: 'Pilih Paket' },
  { name: 'UMKM Premium', price: 'Rp 500.000', features: ['• Template Premium', '• Hosting & Subdomain', '• Integrasi Social Media', '• Tambahan Hingga 2 Section','• 1x Update Konten Per Bulan','• 2x Revisi Design','• Basic SEO','• Custom Warna'], cta: 'Pilih Paket', featured: true },
  { name: 'Full Custom Landing Page', price: 'Start from Rp 900.000', features: ['• Full Custom Design by WebKM Team',
'• Hosting & Subdomain',
'• Maksimal 8 Section',
'• 2x Update Konten Per Bulan',
'• 3x Revisi Design',
'• Konsultasi Design Langsung',
], cta: 'Diskusikan' },
  { name: 'Professional Website', price: 'Start from Rp 3.000.000', features: ['• Multi Page (Home, About, Product, Blog, Contact, dll)', '• Full UI/UX Design', '• Frontend + Backend Development', '• Mobile responsive', '• Support 1 bulan'], cta: 'Diskusikan' },
  { name: 'Professional Website + Mobile', price: 'Start from Rp 5.000.000', features: ['• Full custom design', '• Shared backend system', '• Dashboard/admin panel', '• Business system integration', '• Ongoing support'], cta: 'Diskusikan' },
];

export const Pricing = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="pricing" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8"><h2 className="text-2xl font-extrabold">Paket Harga WEBKM.ID</h2><p className="text-muted mt-2">Pilih yang sesuai untuk bisnis Anda — mulai dari paket Starter hingga Scale.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map(plan => (
            <div key={plan.name} className={`relative bg-white rounded-2xl p-6 border transition-transform duration-300 ${plan.featured ? 'border-2 border-indigo-500 shadow-xl scale-105' : 'border-slate-100 shadow-md'}`}>
              {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">Best Value</div>}
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <div className="mt-2 text-4xl font-extrabold">{plan.price}</div>
              <ul className="mt-4 space-y-2 text-muted">{plan.features.map(f => <li key={f}>{f}</li>)}</ul>
              <a href="#contact" className={`block text-center mt-6 py-2.5 rounded-lg font-semibold ${plan.featured ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white'}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
