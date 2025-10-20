// src/components/Templates.tsx
import { useDraggableScroll } from '../hooks/useDraggableScroll';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const freeTemplates = [
  { title: "Gudang Starter", category: "Logistik • Retail", meta: "Ringan & SEO friendly", image: "https://images.unsplash.com/photo-1515165562835-c3b8c10a84b7?q=80&w=800&auto=format&fit=crop" },
  { title: "Cargo Mini", category: "Pengiriman • UMKM", meta: "Tracking sederhana", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=800&auto=format&fit=crop" },
  { title: "Toko Segar", category: "Grocery • Retail", meta: "Integrasi marketplace", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop" },
];
const premiumTemplates = [
  { title: "Agency Pro", category: "Creative • Agency", meta: "Full kit • Figma • Animations", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" },
  { title: "SaaS Growth", category: "SaaS • Tech", meta: "Integrations • Analytics", image: "https://images.unsplash.com/photo-1556767576-cfba22f1c4f8?q=80&w=800&auto=format&fit=crop" },
  { title: "Hospitality Max", category: "Hospitality • Hotel", meta: "Booking & CMS", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop" },
];

const TemplateCard = ({ template, isPremium }: { template: typeof freeTemplates[0], isPremium: boolean }) => (
  <article className="w-[320px] md:w-[360px] flex-shrink-0 snap-start rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
    <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-2xl"><img src={template.image} alt={template.title} className="absolute inset-0 w-full h-full object-cover"/></div>
    <div className="p-4 flex-grow flex flex-col">
      <h3 className="font-bold">{template.title}</h3><p className="text-muted text-sm">{template.category}</p>
      <div className="flex-grow"></div>
      <div className="mt-3 flex justify-between items-center"><p className="text-muted text-sm">{template.meta}</p><span className={`px-3 py-1 text-xs font-semibold rounded-full ${isPremium ? 'bg-indigo-100 text-indigo-700' : 'bg-green-100 text-green-700'}`}>{isPremium ? "PREMIUM" : "FREE"}</span></div>
    </div>
  </article>
);

export const Templates = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  const { ref: freeTrackRef } = useDraggableScroll<HTMLDivElement>();
  const { ref: premiumTrackRef } = useDraggableScroll<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="templates" className="py-16 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-6">
        <div><h2>Template UMKM Free</h2><p className="text-muted">Pilihan ringan & cepat untuk memulai — cocok untuk test market.</p></div>
        <div ref={freeTrackRef} className="horizontal-track flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 mt-6 cursor-grab active:cursor-grabbing">
          {freeTemplates.map(tpl => <TemplateCard key={tpl.title} template={tpl} isPremium={false} />)}
        </div>
        <div className="mt-12"><h2>Template UMKM Premium</h2><p className="text-muted">Fitur lengkap, animasi, dan support prioritas — untuk brand yang fokus scale-up.</p></div>
        <div ref={premiumTrackRef} className="horizontal-track flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 mt-6 cursor-grab active:cursor-grabbing">
          {premiumTemplates.map(tpl => <TemplateCard key={tpl.title} template={tpl} isPremium={true} />)}
        </div>
      </div>
    </section>
  );
};