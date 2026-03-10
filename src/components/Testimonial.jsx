import React, { useState } from 'react';

const Testimonial = () => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const reviews = [
        {
            name: "Sarah Wijaya",
            role: "Adopter British Shorthair",
            text: "Kitten dari Gilko bener-bener pinter dan sehat banget. Pas nyampe rumah langsung lincah dan nggak penakut. Dukungannya juga oke banget!",
            image: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Budi Santoso",
            role: "Adopter Scottish Fold",
            text: "Pelayanan sangat profesional. Penjelasan detail soal perawatan dan vaksinasi bikin tenang banget buat pemula kayak saya. Sangat direkomendasikan!",
            image: "https://i.pravatar.cc/150?u=budi"
        },
        {
            name: "Amanda Putri",
            role: "Adopter British Longhair",
            text: "Sudah adopsi 2 kitten di sini. Kualitas bloodline-nya nggak main-main, cakep banget dan karakternya sangat manja. Adminnya juga ramah banget jawab pertanyaan.",
            image: "https://i.pravatar.cc/150?u=amanda"
        },
        {
            name: "Reza Fahlevi",
            role: "Adopter Munchkin",
            text: "Puas banget sama proses adopsinya yang transparan. Kucing sehat, bersih, dan dapet starter kit juga. Sukses terus buat Gilko Cattery!",
            image: "https://i.pravatar.cc/150?u=reza"
        },
        {
            name: "Indah Permata",
            role: "Adopter British Shorthair",
            text: "Kittennya bener-bener keturunan champion, bentuk kepalanya bulet banget dan badannya kokoh. Pengiriman ke luar kota juga rapi dan aman.",
            image: "https://i.pravatar.cc/150?u=indah"
        }
    ];

    const nextSlide = () => {
        if (sliderIndex < reviews.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) {
            setSliderIndex(sliderIndex + 1);
        }
    };

    const prevSlide = () => {
        if (sliderIndex > 0) {
            setSliderIndex(sliderIndex - 1);
        }
    };

    return (
        <section id="testimonial" className="py-24 bg-[#FAF3F0] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section - Full Width Centered */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-4">
                    <div className="max-w-2xl space-y-4 text-left">
                        <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs">Testimoni</h3>
                        <h2 className="text-4xl lg:text-5xl font-heading font-black text-primary leading-tight">
                            Cerita Bahagia <span className="text-tertiary font-medium italic">Adopter Kami</span> di Gilko.
                        </h2>
                    </div>

                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={prevSlide}
                            disabled={sliderIndex === 0}
                            className={`size-14 rounded-2xl flex items-center justify-center transition-all ${sliderIndex === 0 ? 'bg-primary/5 text-primary/20 cursor-not-allowed' : 'bg-primary text-white hover:bg-tertiary shadow-xl'
                                }`}
                        >
                            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={sliderIndex >= reviews.length - 3}
                            className={`size-14 rounded-2xl flex items-center justify-center transition-all ${sliderIndex >= reviews.length - 3 ? 'bg-primary/5 text-primary/20 cursor-not-allowed' : 'bg-primary text-white hover:bg-tertiary shadow-xl'
                                }`}
                        >
                            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Full Width Slider Section */}
                <div className="relative overflow-visible px-4">
                    <div
                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] gap-6 md:gap-8"
                        style={{ transform: `translateX(calc(-${sliderIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}% - ${sliderIndex * 24}px))` }}
                    >
                        {reviews.map((r, i) => (
                            <div key={i} className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.35rem)] bg-white p-10 rounded-[3.5rem] shadow-2xl shadow-black/[0.03] border border-primary/5 relative flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                                {/* Quote Icon Decorative */}
                                <div className="absolute top-10 right-10 text-tertiary/5 transition-colors group-hover:text-tertiary/10">
                                    <svg className="size-20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <div className="space-y-8 relative">
                                    <div className="flex text-yellow-400 mb-4">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <svg key={s} className="size-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-primary text-lg leading-relaxed font-bold italic text-left">
                                        "{r.text}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-6 mt-6 border-t border-primary/5">
                                        <div className="relative">
                                            <img src={r.image} alt={r.name} className="size-14 rounded-full border-4 border-secondary/20 shadow-lg object-cover" />
                                            <div className="absolute -bottom-1 -right-1 bg-tertiary size-5 rounded-full border-2 border-white flex items-center justify-center">
                                                <svg className="size-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <div className="font-black text-primary text-lg leading-none mb-1">{r.name}</div>
                                            <div className="text-[10px] text-tertiary font-black uppercase tracking-widest">{r.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex md:hidden justify-center gap-4 mt-12">
                    <button
                        onClick={prevSlide}
                        disabled={sliderIndex === 0}
                        className={`size-14 rounded-2xl flex items-center justify-center transition-all ${sliderIndex === 0 ? 'bg-primary/5 text-primary/20' : 'bg-primary text-white shadow-lg'
                            }`}
                    >
                        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={sliderIndex >= reviews.length - 1}
                        className={`size-14 rounded-2xl flex items-center justify-center transition-all ${sliderIndex >= reviews.length - 1 ? 'bg-primary/5 text-primary/20' : 'bg-primary text-white shadow-lg'
                            }`}
                    >
                        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
