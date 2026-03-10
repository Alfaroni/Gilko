import React, { useState } from 'react';

const WhyChoose = () => {
    const [openIndex, setOpenIndex] = useState(5); // Default open the last one as per screenshot

    const accordionItems = [
        {
            title: "Kualitas Terbaik dalam Setiap Tumbuh Kembang",
            desc: "Kami memastikan setiap kitten mendapatkan nutrisi premium dan pemantauan kesehatan ketat sejak hari pertama untuk menjamin pertumbuhan yang optimal."
        },
        {
            title: "Lingkungan Home-Raised",
            desc: "Kitten kami dibesarkan langsung di dalam rumah (bukan kandang luar), sehingga mereka memiliki karakter yang sangat ramah, manja, dan mudah beradaptasi dengan manusia."
        },
        {
            title: "Keturunan Berkualitas",
            desc: "Fokus kami adalah menghadirkan kitten dengan standar ras yang tinggi, struktur tulang yang kuat, dan wajah yang menggemaskan sesuai standar internasional."
        },
        {
            title: "Proses Booking yang Aman dan Transparan",
            desc: "Adopsi di Gilko sangat transparan. Kami memberikan update rutin berupa foto dan video perkembangan kitten kesayangan Anda hingga hari kepulangan."
        },
        {
            title: "Biaya yang Seimbang dengan Kualitas",
            desc: "Investasi adopsi Anda mencakup jaminan kualitas ras, kesehatan, dokumen legal, serta ketenangan pikiran karena memiliki teman hidup yang sehat."
        },
        {
            title: "Dukungan & Konsultasi Seumur Hidup",
            desc: "Komitmen kami tidak berhenti setelah kitten pulang ke rumah barunya. Kami tetap siap membantu jika Anda membutuhkan panduan mengenai adaptasi, pola makan, perawatan, atau hal lain selama perjalanan bersama anabul anda. Bagi kami, hubungan dengan adopter adalah bagian penting dari tanggung jawab yang kami jaga."
        }
    ];

    const bottomCards = [
        {
            tag: "100%",
            title: "Kitten Sehat",
            desc: "Setiap kitten kami telah melalui pemeriksaan kesehatan rutin oleh dokter hewan & vaksinasi lengkap sebelum berpindah ke rumah barunya.",
            icon: (
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            tag: "Bersertifikat /",
            title: "Pedigree Resmi",
            desc: "Setiap kucing british shorthair di kami sudah bersertifikat / pedigree resmi dari asosiasi WCF (World Cat Federation) / ICA (Indonesian Cat Association) sehingga terjamin kemurnian rasnya silsilahnya & kualitas genetiknya.",
            icon: (
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            tag: "Pengiriman",
            title: "Aman",
            desc: "Layanan pengiriman aman dan nyaman ke seluruh Indonesia maupun mancanegara dengan standar kenyamanan tinggi.",
            icon: (
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
            )
        }
    ];

    return (
        <section id="why-choose" className="py-24 bg-[#FAF3F0] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <p className="max-w-2xl text-lg font-medium text-primary leading-relaxed text-left">
                        Di Gilko Cattery, kami mendedikasikan diri untuk menghadirkan kitten British <br className="hidden lg:block" />
                        Shorthair dengan kualitas <span className="font-black">bloodline</span> terbaik dan karakter yang <span className="font-black">tenang & stabil</span>.
                    </p>
                    <a
                        href="https://wa.me/628138784422"
                        className="group flex items-center gap-3 bg-white text-primary px-7 py-3 rounded-full font-bold shadow-xl shadow-black/5 hover:scale-105 transition-all"
                    >
                        Tanya Sekarang
                        <div className="bg-tertiary size-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 rotate-[-45deg] scale-90">
                            <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                            </svg>
                        </div>
                    </a>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">

                    {/* Left: Image with Play Button */}
                    <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl group cursor-pointer aspect-[4/5] lg:aspect-auto h-full min-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1513360371469-4ed47f51953d?q=80&w=2070&auto=format&fit=crop"
                            alt="Gilko British Shorthair"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                            <div className="size-24 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                                <svg className="size-10 text-primary translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right: Accordion */}
                    <div className="bg-white/40 backdrop-blur-sm rounded-[3.5rem] p-8 md:p-12 shadow-xl border border-white">
                        <div className="mb-10 text-left">
                            <h3 className="text-tertiary font-bold tracking-widest uppercase text-xs mb-3">Langkah Adopsi</h3>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight">Panduan Informasi</h2>
                            <p className="text-primary/40 text-sm mt-4">Proses yang profesional untuk menyambut anggota keluarga baru Anda.</p>
                        </div>

                        <div className="space-y-2">
                            {accordionItems.map((item, i) => (
                                <div key={i} className="border-b border-primary/5 last:border-0">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                        className="w-full py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-[15px] font-black tracking-tight transition-colors ${openIndex === i ? 'text-primary' : 'text-primary'}`}>
                                            {item.title}
                                        </span>
                                        <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                                            <svg className="size-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                                        <p className="text-sm leading-relaxed text-primary/60 font-medium text-left">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Cards Row */}
                <div className="flex flex-col md:flex-row gap-6 items-end">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                        {bottomCards.map((card, i) => (
                            <div key={i} className="bg-white rounded-[2.5rem] p-10 text-left shadow-lg border border-primary/5 hover:-translate-y-2 transition-transform h-full">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-tertiary font-black text-2xl">{card.tag}</span>
                                    <div className="bg-secondary/20 p-2.5 rounded-xl text-tertiary">
                                        {card.icon}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-black text-[#5C4D32] mb-4">{card.title}</h4>
                                <p className="text-sm text-primary/40 leading-relaxed font-medium">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Instagram Join CTA */}
                    <div className="md:w-1/4 text-left p-6 space-y-6">
                        <div className="relative">
                            <h3 className="text-2xl font-black text-[#5C4D32] leading-tight">Bergabung dengan Komunitas Instagram Kami</h3>
                            {/* Decorative Paw Print */}
                            <div className="absolute -top-10 -right-4 opacity-5 pointer-events-none">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
                                    <path d="M50 80c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18zm-25-35c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm50 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zM35 25c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm30 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" />
                                </svg>
                            </div>
                        </div>
                        <a
                            href="https://www.instagram.com/gilkocattery/"
                            className="inline-flex items-center gap-3 font-bold text-primary group"
                        >
                            <div className="size-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary shadow-lg shadow-tertiary/10 group-hover:scale-110 transition-transform">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                            @gilkocattery
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
