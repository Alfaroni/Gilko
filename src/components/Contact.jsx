import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-primary rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Background Paw Decors */}
                    <div className="absolute -top-32 -right-32 opacity-10 pointer-events-none rotate-45">
                        <svg width="600" height="600" viewBox="0 0 100 100" fill="white">
                            <path d="M50 80c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18zm-25-35c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm50 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zM35 25c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm30 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" />
                        </svg>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                        {/* Text Content */}
                        <div className="lg:w-1/2 space-y-10 text-left">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-black text-xs uppercase tracking-[0.2em]">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                                    </span>
                                    Online Setiap Hari
                                </div>
                                <h2 className="text-5xl lg:text-7xl font-heading font-black text-white leading-[1.1]">
                                    Siap Mengadopsi <br />
                                    <span className="text-tertiary italic">Teman Baru?</span>
                                </h2>
                                <p className="text-white/70 text-xl leading-relaxed max-w-lg font-medium">
                                    Jangan sungkan untuk bertanya. Kami di sini untuk membantumu menemukan kebahagiaan baru melalui anabul berkualitas.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-8">
                                <div className="space-y-2">
                                    <div className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px]">Hotline WhatsApp</div>
                                    <div className="text-2xl md:text-3xl font-black text-white tracking-widest">0813-8784-422</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px]">Alamat Cattery</div>
                                    <div className="text-2xl md:text-3xl font-black text-white">Jakarta Tengah, ID</div>
                                </div>
                            </div>
                        </div>

                        {/* Direct CTA Box */}
                        <div className="lg:w-[40%] text-center">
                            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-3xl space-y-8 relative overflow-hidden group">
                                {/* Decorative circle */}
                                <div className="absolute -top-10 -right-10 size-40 bg-secondary/20 rounded-full transition-transform group-hover:scale-125" />

                                <div className="relative space-y-8">
                                    <div className="size-24 bg-tertiary/10 rounded-[2rem] flex items-center justify-center mx-auto transition-transform group-hover:rotate-12 group-hover:scale-110">
                                        <svg className="size-12 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-heading font-black text-primary leading-tight">Mulai Konsultasi Gratis</h3>
                                        <p className="text-primary/50 font-medium">Hubungi admin kami sekarang untuk mendapatkan foto & video terbaru kitten impian Anda.</p>
                                    </div>

                                    <a
                                        href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20berkonsultasi%20mengenai%20adopsi%20kitten."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-4 w-full bg-primary text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-primary/20 hover:bg-tertiary hover:scale-[1.05] active:scale-95 transition-all"
                                    >
                                        Chat Sekarang
                                        <svg className="size-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>

                                    <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">Respons Cepat & Ramah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
