import React, { useState, useEffect } from 'react';
import about1 from '../assets/7.png';
import about2 from '../assets/8.png';
import about3 from '../assets/9.png';
import about4 from '../assets/10.png';
import about5 from '../assets/11.png';

const About = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5),
                y: (e.clientY / window.innerHeight - 0.5)
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="about" className="py-12 lg:py-24 overflow-hidden relative">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div
                            className="grid grid-cols-2 gap-4 transition-transform duration-500 ease-out"
                            style={{ transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)` }}
                        >
                            <div className="space-y-4 pt-12">
                                <div className="aspect-[4/5] rounded-3xl bg-secondary/30 overflow-hidden shadow-lg border-2 border-white/50">
                                    <img src={about1} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="About Gilko 1" />
                                </div>
                                <div className="aspect-square rounded-3xl bg-tertiary/20 overflow-hidden shadow-lg border-2 border-white/50">
                                    <img src={about2} className="w-full h-full object-cover" alt="About Gilko 2" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-square rounded-3xl bg-primary/20 overflow-hidden shadow-lg border-2 border-white/50">
                                    <img src={about3} className="w-full h-full object-cover" alt="About Gilko 3" />
                                </div>
                                <div className="aspect-[4/5] rounded-3xl bg-secondary/30 overflow-hidden shadow-lg border-2 border-white/50">
                                    <img src={about4} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="About Gilko 4" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-36 bg-orange-100 rounded-full border border-primary/10 flex flex-col items-center text-center justify-center shadow-2xl z-10 transition-transform duration-300 ease-out hover:scale-110"
                            style={{ transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * -40}px, 0)` }}
                        >
                            <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Gilko Cattery</span>
                            <span className="text-primary font-heading font-black text-2xl text-tertiary leading-none">Bloodline Terbaik</span>

                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-tertiary"></span>
                                Cerita Kami
                            </h3>
                            <h2 className="text-2xl lg:text-4xl font-heading font-black text-primary leading-tight">
                                Dedikasi Kami untuk <br />Kualitas & Kesejahteraan
                            </h2>
                        </div>
                        <div className="text-primary/70 leading-relaxed text-sm text-left">
                            <div className="float-left w-[48%] mr-4 mb-2 rounded-[2.5rem] overflow-hidden border-4 border-white/50 aspect-square group">
                                <img src={about5} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gilko Cattery Interior" />
                            </div>
                            <p className="mb-4">
                                <span className="font-bold text-primary">Gilko</span> cattery lahir dari kecintaan mendalam pada ras <span className="font-bold text-primary">British Shorthair & Longhair</span> yang ikonik. Berawal dari hobby kini kami berkembang menjadi breeder terpercaya yang fokus pada <span className="font-bold text-primary">kualitas bloodline</span> yang baik, <span className="font-bold text-primary">riwayat kesehatan</span> yang baik, tempramen yang tenang & <span className="font-bold text-primary">standar ras internasional</span>.
                            </p>
                            <p className="mb-4">
                                Setiap kucing yang berada di Gilko, dibesarkan & dirawat di lingkungan rumah yang hangat, <span className="font-bold text-primary">standar pakan yang premium</span> serta kebersihan, perawatan yang ketat & terkontrol. Kami hanya fokus pada ras British Shorthair yang <span className="font-bold text-primary">bersertifikat / pedigree resmi</span>, kami tidak melepas adopsi yang non sertifikat sehingga <span className="font-bold text-primary">kemurnian rasnya terjaga</span> dan memastikan setiap kucing memiliki karakter yang tenang & dapat mudah beradaptasi di lingkungan baru. 
                            </p>
                            <p className="mb-4">
                                Standar wajib kami sebelum melepas kitten adalah <span className="font-bold text-primary">minimal di usia 3.5 - 4 bulan</span> & sudah <span className="font-bold text-primary">divaksin lengkap</span>, serta cek kesehatan rutin oleh dokter hewan. Kami memastikan kitten saat teradopsi dalam kondisi sehat & untuk sertifikat pedigreenya sudah terdaftar resmi di asosiasi <span className="font-bold text-primary">WCF (World Cat Federation)</span> atau <span className="font-bold text-primary">ICA (Indonesian Cat Association)</span>.
                            </p>
                            <p>
                                Selain itu, di setiap kittennya sudah <span className="font-bold text-primary">tertanam microchip</span> sebagai identitas dimana kode angkanya sudah sesuai dengan sertifikat pedigreenya, jadi secara silsilah sudah sangat <span className="font-bold text-primary">jelas & transparan</span>.
                            </p>
                        </div>

                        <div className="flex  gap-4">
                            <div className="flex items-center h-12 md:h-14 gap-2">
                                <div className="bg-primary/5 flex items-center min-w-10 md:min-w-12 h-full justify-center rounded-2xl text-tertiary">
                                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xl lg:text-2xl font-heading font-black text-primary">100%</div>
                                    <div className="text-xs lg:text-sm text-primary/60 font-medium">Sehat & Terjamin</div>
                                </div>
                            </div>
                            <div className="flex items-start h-12 md:h-14 gap-2">
                                <div className="bg-primary/5 flex items-center min-w-10 md:min-w-12 h-full justify-center rounded-2xl text-tertiary">
                                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xl lg:text-2xl font-heading font-black text-primary">ASOSIASI WCF / ICA</div>
                                    <div className="text-xs lg:text-sm  text-primary/60 font-medium">Terdaftar Resmi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
