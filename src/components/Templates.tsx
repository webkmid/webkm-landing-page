// src/components/Templates.tsx
import { LpfBus, LpfProperty, LpfRent, LppBus, LppProperty, LppRent } from '../assets/images';
import { useDraggableScroll } from '../hooks/useDraggableScroll';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const freeTemplates = [
  { title: "Rental Mobil", category: "Rental • Kendaraan", meta: "Ringan & SEO friendly", image: LpfRent, url:'https://lpf-01-rental.webkm.id' },
  { title: "Bis", category: "Kendaraan • Travel", meta: "Tracking sederhana", image: LpfBus },
  { title: "Agent Property", category: "Property", meta: "Integrasi marketplace", image: LpfProperty },
];
const premiumTemplates = [
  { title: "Rental Mobil", category: "Rental • Kendaraan", meta: "Ringan & SEO friendly", image: LppRent },
  { title: "Bis", category: "Kendaraan • Travel", meta: "Integrations • Analytics", image: LppBus },
  { title: "Agent Property", category: "Property", meta: "Integrations • Booking", image: LppProperty },
];

const TemplateCard = ({ template }: { template: typeof freeTemplates[0], isPremium: boolean }) => (
  <article className="w-[320px] md:w-[360px] shrink-0 snap-start rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
    <a href={template.url} target="_blank">
    <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-2xl"><img src={template.image} alt={template.title} className="absolute inset-0 w-full h-full object-cover"/></div>
    </a>
    <div className="p-4 grow flex flex-col">
      <h3 className="font-bold">{template.title}</h3><p className="text-muted text-sm">{template.category}</p>
      <div className="grow"></div>
      <div className="mt-3 flex justify-between items-center">
        <p className="text-muted text-sm">{template.meta}</p>
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
          <span className={`px-6 py-2 text-xs font-medium rounded-full bg-indigo-100 text-black`}>Pilih</span>
        </a>
        {/* <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isPremium ? 'bg-indigo-100 text-indigo-700' : 'bg-green-100 text-green-700'}`}>{isPremium ? "PREMIUM" : "FREE"}</span> */}
      </div>
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
        <div><h2 className='font-semibold text-2xl'>Template UMKM Free</h2><p className="text-muted">Pilihan ringan & cepat untuk memulai — cocok untuk test market.</p></div>
        <div ref={freeTrackRef} className="horizontal-track flex gap-6 overflow-x-visible snap-x snap-mandatory pb-4 mt-6 cursor-grab active:cursor-grabbing">
          {freeTemplates.map(tpl => <TemplateCard key={tpl.title} template={tpl} isPremium={false} />)}
        </div>
        <div className="mt-12"><h2 className='font-semibold text-2xl'>Template UMKM Premium</h2><p className="text-muted">Fitur lengkap, animasi, dan support prioritas — untuk brand yang fokus scale-up.</p></div>
        <div ref={premiumTrackRef} className="horizontal-track flex gap-6 overflow-x-visible snap-x snap-mandatory pb-4 mt-6 cursor-grab active:cursor-grabbing">
          {premiumTemplates.map(tpl => <TemplateCard key={tpl.title} template={tpl} isPremium={true} />)}
        </div>
      </div>
    </section>
  );
};