// src/components/Pricing.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
const pricingPlans = [
  { name: 'Starter', price: 'Rp 1,5jt', features: ['• 2 konsep', '• 3x revisi', '• File vector'], cta: 'Pilih Paket' },
  { name: 'Growth', price: 'Rp 4,5jt', features: ['• 3 konsep', '• Revisi sampai final', '• Guideline 12+ halaman'], cta: 'Pilih Paket', featured: true },
  { name: 'Scale', price: 'Custom', features: ['• Retainer bulanan', '• Design system', '• Tim kolaboratif'], cta: 'Diskusikan' },
];

export const Pricing = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="pricing" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8"><h2 className="text-2xl font-extrabold">Paket Harga Bastilla</h2><p className="text-muted mt-2">Pilih yang sesuai untuk bisnis Anda — mulai dari paket Starter hingga Scale.</p></div>
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