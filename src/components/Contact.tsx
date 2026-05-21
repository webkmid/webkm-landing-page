// src/components/Contact.tsx
import { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export const Contact = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'Branding / Logo',
    budget: '< Rp5jt',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) =>
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form terkirim (demo)! Terima kasih.');
  };

  // 🔥 VALIDASI FORM
  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.message.trim() !== '';

  return (
    <section ref={sectionRef} id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold">Mari Kolaborasi</h2>
          <p className="text-muted mt-2">
            Ceritakan kebutuhan Anda — kami akan kirimkan proposal dan estimasi biaya.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4"
        >
          <div>
            <label className="text-sm font-semibold">Nama</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama lengkap"
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">WhatsApp</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+62 8xx"
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Pesan</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Ceritakan tujuan, target market, dll."
              className="w-full mt-1 p-2 border rounded-md"
            ></textarea>
          </div>

          {/* 🔥 Tombol WhatsApp dengan validasi */}
          <div className="flex gap-4 items-center">
            <a
              href={
                isFormValid
                  ? `https://wa.me/6282295285472?text=${encodeURI(
                      `Hai, nama saya ${formData.name} dengan email ${formData.email} ingin bertanya mengenai ${formData.message}`
                    )}`
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold text-white px-5 py-2.5 rounded-lg shadow ${
                isFormValid
                  ? 'bg-indigo-600'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              onClick={e => {
                if (!isFormValid) {
                  e.preventDefault();
                  alert('Harap isi semua form terlebih dahulu.');
                }
              }}
            >
              Kirim Pesan
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};