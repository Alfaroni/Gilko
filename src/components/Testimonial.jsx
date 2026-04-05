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
            id: 2,
            name: "Gilang Vienna",
            date: "5 Februari 2026",
            title: "Visitor Impression",
            text: "Saya melihat sendiri bahwa Gilko Cattery menjaga kebersihan dan kenyamanan dengan sangat baik. Suasananya tenang, rapi, dan terasa memang dibangun dengan perhatian pada kualitas.",
            image: "https://i.pravatar.cc/150?u=gilang",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 3,
            name: "Jelita",
            date: "12 Februari 2026",
            title: "Visitor Impression",
            text: "Yang paling terasa saat berkunjung adalah standar perawatannya. Bukan hanya bersih, tapi juga terlihat terstruktur dan penuh perhatian.",
            image: "https://i.pravatar.cc/150?u=jelita",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 4,
            name: "Tony R",
            date: "18 Februari 2026",
            title: "Visitor Impression",
            text: "Saya cukup terkesan dengan bagaimana Gilko menjaga lingkungan tetap nyaman dan tidak berlebihan. Terasa serius dalam membangun kualitas.",
            image: "https://i.pravatar.cc/150?u=tony",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 5,
            name: "Alfa Roni",
            date: "24 Februari 2026",
            title: "Visitor Impression",
            text: "Kesan pertama saya, Gilko Cattery punya pendekatan yang rapi dan bertanggung jawab. Tidak terlihat asal jalan, tapi memang dipikirkan dengan matang.",
            image: "https://i.pravatar.cc/150?u=alfa",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 6,
            name: "Herza",
            date: "2 Maret 2026",
            title: "Visitor Impression",
            text: "Setelah melihat langsung, saya merasa Gilko punya fondasi yang baik dari sisi kualitas, kebersihan, dan perhatian terhadap detail.",
            image: "https://i.pravatar.cc/150?u=herza",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 7,
            name: "Dessy",
            date: "10 Maret 2026",
            title: "Visitor Impression",
            text: "Tempatnya memberi kesan tenang dan terawat. Buat saya, itu penting karena kualitas tidak hanya dilihat dari kitten, tapi juga dari lingkungan tumbuhnya.",
            image: "https://i.pravatar.cc/150?u=dessy",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 8,
            name: "Arie Wibowo",
            date: "18 Maret 2026",
            title: "Visitor Impression",
            text: "Saya melihat ada keseriusan dalam cara Gilko membangun cattery ini. Standarnya terasa dijaga, dan itu membuat saya percaya dengan kualitasnya.",
            image: "https://i.pravatar.cc/150?u=arie",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 9,
            name: "Nita Annafia",
            date: "25 Maret 2026",
            title: "Prospective Adopter",
            text: "Saya tertarik untuk lanjut mengenal Gilko karena pendekatannya terasa lebih serius dan transparan. Buat saya, itu penting sebelum memutuskan adopsi.",
            image: "https://i.pravatar.cc/150?u=nita",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 10,
            name: "Dimas Ardirosatama",
            date: "2 April 2026",
            title: "Prospective Adopter",
            text: "Dari yang saya lihat, Gilko memberi kesan premium tapi tetap bertanggung jawab. Itu yang membuat saya merasa nyaman untuk mempertimbangkan adopsi dari sini.",
            image: "https://i.pravatar.cc/150?u=dimas",
            rating: 5,
            verified: true,
            source: "Visitor"
        },
        {
            id: 11,
            name: "Dr. Rifki Yusuf",
            date: "4 April 2026",
            title: "Buitenzorg Cattery",
            text: "Gilko Cattery memiliki pendekatan yang rapi dan bertanggung jawab dalam membangun kualitas. Saya melihat ada perhatian yang kuat terhadap standar, konsistensi, dan keberlanjutan, sehingga kepercayaan itu dibangun bukan hanya lewat kata-kata, tetapi juga lewat proses yang dijalankan.",
            image: "https://i.pravatar.cc/150?u=rifki",
            rating: 5,
            verified: true,
            source: "Breeder Review"
        }
    ];

    return (
        <section id="testimonial" className="py-12 lg:py-24  relative min-h-[600px] flex flex-col justify-center">
            
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
                <h2 className="text-2xl lg:text-4xl font-heading font-black text-primary leading-tight">
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
                        loopAdditionalSlides={2}
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
                        {/* Multiple duplicates to ensure no gaps on very wide screens */}
                        {[...reviews, ...reviews, ...reviews].map((r, i) => (
                            <SwiperSlide key={i} className="py-6 lg:!h-auto">
                                <div className="bg-white px-6 py-5 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col gap-4 text-left transition-all duration-500 hover:shadow-xl hover:-translate-y-1 lg:h-full">
                                    <div className="flex flex-col md:flex-row gap-4 justify-between items-start lg:items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="size-14 rounded-full bg-primary/10 text-primary border-2 border-white shadow-sm flex items-center justify-center text-xl font-bold uppercase">
                                                    {r.name.charAt(0)}
                                                </div>
                                                {/* <div className="absolute -bottom-1 -right-1 bg-tertiary text-white p-1 rounded-full shadow-sm">
                                                    <svg className="size-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21L1 12l11-9 11 9-11 9z"/></svg> 
                                                </div> */}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-primary leading-none mb-1 text-base">{r.name}</h4>
                                                <p className="text-[10px] text-black/30 font-bold uppercase tracking-widest">{r.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(r.rating)].map((_, s) => (
                                                <svg key={s} className="size-4 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h5 className="font-bold text-primary text-lg leading-tight">
                                            {r.title}
                                        </h5>
                                        <p className="text-[#1A1A1A]/70 leading-relaxed font-medium italic text-sm">
                                            "{r.text}"
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows - Positioned on far sides */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none -mx-3 md:-mx-4 lg:-mx-8">
                        <button className="testi-prev pointer-events-auto size-8 md:size-10 lg:size-14 rounded-full bg-white text-primary border border-black/5 flex items-center justify-center hover:bg-tertiary hover:text-white hover:scale-110 transition-all shadow-lg active:scale-95 group">
                            <svg className="size-4 md:size-5 lg:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button className="testi-next pointer-events-auto size-8 md:size-10 lg:size-14 rounded-full bg-white text-primary border border-black/5 flex items-center justify-center hover:bg-tertiary hover:text-white hover:scale-110 transition-all shadow-lg active:scale-95 group">
                            <svg className="size-4 md:size-5 lg:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
