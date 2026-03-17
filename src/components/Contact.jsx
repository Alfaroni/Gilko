import React from 'react';
import cat from '../assets/cat.png';

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="bg-secondary rounded-[3rem] p-6 md:p-16 relative overflow-hidden shadow-2xl group border border-white/20">
                    {/* Decorative Elements */}
                    <div className="absolute hidden lg:block top-0 right-0 w-1/3 h-full bg-tertiary/10 skew-x-12 translate-x-12 pointer-events-none" />

                     {/* Background Image / Cat Illustration */}
                    <div className="absolute -bottom-16 -left-16 size-80 opacity-20 pointer-events-none z-0 rotate-12">
                        <img src={cat} alt="Cat" className="w-full h-auto" />
                    </div>
                    

                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        {/* Text Side */}
                        <div className="lg:w-3/5 text-left space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary font-black text-[10px] uppercase tracking-widest">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                                    </span>
                                    Konsultasi Terbuka
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-heading font-black text-primary leading-tight tracking-tight">
                                   Mulai Perjalanan Kamu <br className='hidden lg:block' />
                                    di <span className="text-tertiary italic">Gilko Cattery</span>
                                </h2>
                                <p className="text-primary/60  leading-relaxed max-w-lg font-medium">
                                    Dapatkan akses eksklusif ke video terbaru, riwayat kesehatan, dan konsultasi perawatan gratis sebelum Anda membawa pulang kitten impian.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-tertiary">
                                        <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 10l5 5-5 5M4 4v7a4 4 0 004 4h12"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-sm">Respons Cepat</p>
                                        <p className="text-primary/40 text-[11px] font-medium tracking-wide uppercase">WhatsApp Aktif</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-tertiary">
                                        <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-sm">Sertifikat Resmi</p>
                                        <p className="text-primary/40 text-[11px] font-medium tracking-wide uppercase">ICA Certified</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Side */}
                        <div className="lg:w-2/5 w-full">
                            <div className="bg-white rounded-[2.5rem] px-4 py-10 md:px-10 shadow-3xl text-center space-y-6 relative group/btn">
                                <div className="space-y-2">
                                    <h3 className="text-xl lg:text-2xl font-black text-primary">Mulai Chat Sekarang</h3>
                                    <p className="text-primary/50 text-sm font-medium">Tim kami siap membantu Anda 24/7</p>
                                </div>
                                
                                <a
                                    href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20berkonsultasi%20mengenai%20adopsi%20kitten."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-tertiary text-white py-5 rounded-[1.5rem] font-bold text-lg shadow-xl shadow-tertiary/20 hover:scale-[1.03] active:scale-95 transition-all"
                                >
                                    WhatsApp Kami
                                    <svg className="size-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>

                                <div className="pt-2">
                                    <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Tanpa biaya pendaftaran</p>
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
