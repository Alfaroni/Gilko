import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const questions = [
        {
            q: "Bagaimana cara mengadopsi kitten?",
            a: "Kamu bisa menghubungi kami melalui WhatsApp untuk cek ketersediaan kitten. Jika sudah cocok, Kamu bisa membayar booking fee untuk mengunci jadwal jemput atau kirim."
        },
        {
            q: "Apakah kitten sudah divaksin?",
            a: "Tentu! Semua kitten kami sudah mendapatkan vaksinasi dasar dan obat cacing secara berkala sebelum dilepas ke adopter."
        },
        {
            q: "Bisa kirim ke luar kota?",
            a: "Bisa banget! Kami melayani pengiriman ke seluruh wilayah Indonesia menggunakan jasa pet travel yang aman dan terpercaya."
        },
        {
            q: "Apa saja perlengkapan yang didapat?",
            a: "Setiap adopsi akan mendapatkan Starter Pack berupa makanan transisi, buku vaksin, dan sertifikat pedigree (jika varian pedigree)."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            {/* Background Paw Decors */}
            <div className="absolute top-20 -right-20 opacity-5 rotate-12 pointer-events-none">
                <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
                    <path d="M50 80c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18zm-25-35c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm50 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zM35 25c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm30 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    {/* Header */}
                    <div className="space-y-6 mb-16">
                        <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs">Tanya Jawab</h3>
                        <h2 className="text-4xl lg:text-6xl font-heading font-black text-primary leading-tight">
                            Hal yang Sering <br /> Ditanyakan.
                        </h2>
                        <p className="text-primary/60 max-w-lg mx-auto text-lg">
                            Masih ada pertanyaan lain yang belum terjawab? <br className="hidden md:block" />
                            Jangan ragu untuk mengobrol dengan kami langsung.
                        </p>
                    </div>

                    {/* Question List */}
                    <div className="w-full space-y-4 mb-16">
                        {questions.map((item, i) => (
                            <div
                                key={i}
                                className={`overflow-hidden rounded-[2.5rem] border transition-all duration-300 ${openIndex === i ? 'bg-[#FAF3F0] border-tertiary/20 shadow-xl shadow-black/5' : 'bg-white border-primary/5 hover:border-primary/10'
                                    }`}
                            >
                                <button
                                    className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6"
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                >
                                    <span className={`text-xl font-black transition-colors ${openIndex === i ? 'text-primary' : 'text-primary'}`}>
                                        {item.q}
                                    </span>
                                    <div className={`shrink-0 size-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-primary border-transparent rotate-180' : 'bg-white border-primary/10'
                                        }`}>
                                        <svg className={`size-5 transition-colors ${openIndex === i ? 'text-white' : 'text-primary font-bold'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-8 md:px-10 pb-10 text-primary/60 leading-relaxed font-medium text-lg border-t border-primary/5 pt-6">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button instead of Input */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="font-black text-primary text-xl">Masih Bingung?</div>
                        <a
                            href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20ada%20yang%20ingin%20saya%20tanyakan."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 bg-tertiary text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-tertiary/25 hover:scale-105 active:scale-95 transition-all"
                        >
                            Hubungi Admin via WA
                            <div className="bg-white/20 size-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                                <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
