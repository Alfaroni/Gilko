import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cat from '../assets/cat.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            date: "07 februari 2026",
            title: "British Shorthair Kittens",
            text: "Gilko Cattery provided us with the most beautiful and well-socialized kitten. The process was professional and filled with love.",
            image: "https://i.pravatar.cc/150?u=sarah",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            date: "07 februari 2026",
            title: "British Shorthair Kittens",
            text: "Gilko Cattery provided us with the most beautiful and well-socialized kitten. The process was professional and filled with love.",
            image: "https://i.pravatar.cc/150?u=sarah2",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            date: "07 februari 2026",
            title: "British Shorthair Kittens",
            text: "Gilko Cattery provided us with the most beautiful and well-socialized kitten. The process was professional and filled with love.",
            image: "https://i.pravatar.cc/150?u=sarah3",
            rating: 5
        }
    ];

    return (
        <section id="testimonial" className="py-12 lg:py-24  overflow-hidden relative min-h-[600px] flex flex-col justify-center">
            
            {/* Background Image / Cat Illustration */}
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[80%] opacity-20 pointer-events-none z-0">
                <img src={cat} alt="Cat" className="w-full h-auto" />
            </div>
            
            {/* Header Section - Centered */}
            <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-4 relative z-20 text-center lg:mb-16 mb-8">
                
                <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs inline-flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-tertiary"></span>
                    Testimoni
                </h3>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-primary leading-tight">
                    Dicintai oleh Keluarga
                </h2>
            </div>

            <div className="container max-w-7xl mx-auto px-4 md:px-12 relative">
                
                {/* Background Decor - Nude Rectangle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[120%] bg-[#F5EBE6] rounded-[4rem] pointer-events-none -z-10" />

                {/* Slider Container */}
                <div className="relative z-10 px-4 md:px-16">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={false}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.testi-prev',
                            nextEl: '.testi-next',
                        }}
                        breakpoints={{
                            1024: { slidesPerView: 2 },
                        }}
                        className="!overflow-visible"
                    >
                        {reviews.map((r, i) => (
                            <SwiperSlide key={i} className="py-8">
                                <div className="bg-white px-8 py-6 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col gap-6 text-left transition-all duration-500">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-4">
                                            <img src={r.image} alt={r.name} className="size-14 rounded-full object-cover border-2 border-white shadow-sm" />
                                            <div>
                                                <h4 className="font-bold text-[#1A1A1A] leading-none mb-1">{r.name}</h4>
                                                <p className="text-xs text-black/30 font-medium uppercase tracking-wide">{r.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(r.rating)].map((_, s) => (
                                                <svg key={s} className="size-5 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h5 className="font-bold text-[#5D4037] text-lg leading-tight">
                                            {r.title}
                                        </h5>
                                        <p className="text-[#1A1A1A]/60 leading-relaxed">
                                            "{r.text}"
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows - Positioned on far sides */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none md:-mx-4 lg:-mx-8">
                        <button className="testi-prev pointer-events-auto size-10 lg:size-14 rounded-full bg-[#EDA15C] text-white flex items-center justify-center hover:scale-110 transition-all shadow-lg active:scale-95">
                            <svg className="size-5 lg:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button className="testi-next pointer-events-auto size-10 lg:size-14 rounded-full bg-white border border-black/10 text-[#5D4037] flex items-center justify-center hover:scale-110 transition-all shadow-lg active:scale-95">
                            <svg className="size-5 lg:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
