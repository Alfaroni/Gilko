import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Assets
import oliver1 from '../assets/123CDE9A-1FE2-488B-883C-D65D53084F89.png';
import oliver2 from '../assets/271A49AB-B72C-43F9-A26A-A7376A7ADB68.png';
import luna1 from '../assets/3D2124D1-3E57-4557-8AFF-D6016C33507D.png';
import luna2 from '../assets/6EA4679E-2975-4341-98E9-EC63F15041A6.png';
import milo1 from '../assets/7C905953-8BA1-449C-83EE-CDB67DD8EBBB.png';
import milo2 from '../assets/90A4755A-990F-4044-B88F-F6F8C2A00E63.png';
import bella1 from '../assets/A7CFC1E9-E92A-468A-A075-76006769574A.png';
import bella2 from '../assets/B1F92DB3-387A-401A-B076-A6328132A3B5.png';
import videoKitten from '../assets/IMG_0023.mp4';
import intro1 from '../assets/123CDE9A-1FE2-488B-883C-D65D53084F89.png';
import intro2 from '../assets/271A49AB-B72C-43F9-A26A-A7376A7ADB68.png';
import intro3 from '../assets/6EA4679E-2975-4341-98E9-EC63F15041A6.png';
import intro4 from '../assets/7C905953-8BA1-449C-83EE-CDB67DD8EBBB.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Kitten = () => {
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

    const kittens = [
        {
            id: "bibby",
            name: "Bibby",
            breed: "British Shorthair",
            age: "3 Bulan",
            gender: "Jantan",
            color: "Blue",
            sire: "Grand Ch. Maximus",
            mom: "Lady Bella",
            media: [
                { type: 'image', url: oliver1 },
                { type: 'video', url: videoKitten },
                { type: 'image', url: oliver2 }
            ],
            status: "Available"
        },
        {
            id: "elena",
            name: "Elena",
            breed: "British Longhair",
            age: "2.5 Bulan",
            gender: "Betina",
            color: "White / Bicolor",
            sire: "Sir Winston",
            mom: "Princess Mia",
            media: [
                { type: 'image', url: luna1 },
                { type: 'image', url: luna2 }
            ],
            status: "Booked"
        },
        {
            id: "irbis",
            name: "Irbis",
            breed: "British Shorthair",
            age: "3 Bulan",
            gender: "Jantan",
            color: "Blue Golden",
            sire: "King Shorty",
            mom: "Queen Daisy",
            media: [
                { type: 'image', url: milo1 },
                { type: 'image', url: milo2 }
            ],
            status: "Available"
        },
        {
            id: "tyson",
            name: "Tyson",
            breed: "British Shorthair",
            age: "4 Bulan",
            gender: "Jantan",
            color: "Lilac",
            sire: "Duke Fluffy",
            mom: "Duchess Snow",
            media: [
                { type: 'image', url: bella1 },
                { type: 'image', url: bella2 }
            ],
            status: "Available"
        },
        {
            id: "willow",
            name: "Willow",
            breed: "British Longhair",
            age: "3.5 Bulan",
            gender: "Betina",
            color: "Silver Tabby",
            sire: "Sir Lancelot",
            mom: "Lady Guinevere",
            media: [
                { type: 'image', url: intro3 },
                { type: 'image', url: intro4 }
            ],
            status: "Available"
        },
        {
            id: "kitten-6",
            name: "Kitten",
            breed: "British Shorthair",
            age: "3 Bulan",
            gender: "Jantan",
            color: "Cream",
            sire: "Sire Brave",
            mom: "Mom Grace",
            media: [
                { type: 'image', url: intro1 },
                { type: 'image', url: intro2 }
            ],
            status: "Available"
        }
    ];

    return (
        <section id="kittens" className="py-12 lg:py-24 overflow-hidden relative text-left">
            {/* Background Paws Decorations */}
            <div
                className="absolute top-20 right-10 opacity-10 pointer-events-none transition-transform duration-500 ease-out fill-tertiary"
                style={{ transform: `translate3d(${mousePos.x * -60}px, ${mousePos.y * -60}px, 0) rotate(15deg) scale(2)` }}
            >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M28.7394 19.3073C28.7698 19.2984 28.7698 19.2984 28.8008 19.2894 ..." fill="currentColor" /></svg>
            </div>

            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header Slider */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-8">
                    <div className='flex-1 space-y-4'>
                        <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-tertiary"></span>
                            Cari Rumah Baru
                        </h3>
                        <h2 className="text-3xl lg:text-4xl font-heading font-black text-primary leading-tight">
                            Siap Menjadi Bagian dari <br /> Keluarga Baru Kamu
                        </h2>
                        <p>Menantikan Keluarga Baru Kamu Seumur Hidupnya 🏡. Kitten manis ini siap membawa kebahagiaan ke rumah barunya.</p>

                    </div>
                    <div className="bg-neutral-100 p-1.5 rounded-full flex gap-1 shadow-inner">
                        <button className="kitten-prev size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-tertiary transition-all shadow-xl shadow-primary/10 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:hover:bg-primary">
                            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button className="kitten-next size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-tertiary transition-all shadow-xl shadow-primary/10 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:hover:bg-primary">
                            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Main Swiper Slider */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={32}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.kitten-prev',
                        nextEl: '.kitten-next',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!overflow-visible [&>.swiper-wrapper]:items-end pb-12 md:pb-0 [&_.swiper-pagination-bullet]:bg-primary! [&_.swiper-pagination]:md:hidden"
                >
                    {kittens.map((kitten, i) => (
                        <SwiperSlide key={i}>
                            <div className="group bg-white/80 rounded-[3.5rem] p-4 overflow-hidden border border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">

                                {/* Mini Photo Gallery Inside Card */}
                                <div className={`relative ${i % 3 === 0 ? 'aspect-square' : i % 3 === 1 ? 'aspect-square lg:aspect-[3/3.5]' : 'aspect-square lg:aspect-[3/2.5]'} rounded-[2.5rem] overflow-hidden mb-6 group/gallery`}>
                                    <Swiper
                                        modules={[Pagination, EffectFade, Navigation]}
                                        effect="fade"
                                        navigation={{
                                            prevEl: `.mini-prev-${kitten.id}`,
                                            nextEl: `.mini-next-${kitten.id}`,
                                        }}
                                        pagination={{ clickable: true, dynamicBullets: true }}
                                        observer={true}
                                        observeParents={true}
                                        loop={true}
                                        className="w-full h-full [&_.swiper-pagination-bullet]:bg-primary [&_.swiper-pagination-bullet]:opacity-40 [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination]:pb-2 drop-shadow-lg"
                                    >
                                        {kitten.media.map((item, idx) => (
                                            <SwiperSlide key={idx}>
                                                {item.type === 'video' ? (
                                                    <div className="w-full h-full relative">
                                                        <video
                                                            src={item.url}
                                                            className="w-full h-full object-cover"
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                        />
                                                        {/* Video Indicator */}
                                                        <div className="absolute bottom-3 right-3 pointer-events-none">
                                                            <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                                                                <svg className="size-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : item.type === 'iframe' ? (
                                                    <div className="w-full h-full relative">
                                                        <iframe
                                                            src={`${item.url}?autoplay=1&mute=1&loop=1&controls=0&playlist=${item.url.split('/').pop()}`}
                                                            className="w-full h-full object-cover scale-[1.3]"
                                                            allow="autoplay; fullscreen"
                                                            title={kitten.name}
                                                        />
                                                        <div className="absolute inset-0 z-10 bg-transparent" /> {/* Overlay to prevent iframe interaction */}
                                                    </div>
                                                ) : (
                                                    <img src={item.url} alt={kitten.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                                )}
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Mini Nav Arrows */}
                                    <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 z-20 flex justify-between items-center pointer-events-none opacity-0 group-hover/gallery:opacity-100 transition-all duration-300">
                                        <button className={`mini-prev-${kitten.id} pointer-events-auto size-9 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all shadow-xl`}>
                                            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                        <button className={`mini-next-${kitten.id} pointer-events-auto size-9 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all shadow-xl`}>
                                            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                    </div>

                                    {/* Availability Tag */}
                                    <div className="absolute top-5 left-5 z-10">
                                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md ${kitten.status === 'Available' ? 'bg-green-500/90 text-white' : 'bg-primary/60 text-white'
                                            }`}>
                                            {kitten.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="px-4 pb-4 space-y-6 flex flex-col flex-grow text-left">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-3xl font-heading font-black text-primary leading-none mb-1 lowercase first-letter:uppercase">{kitten.name}</h4>
                                            <span className="text-tertiary font-bold text-sm tracking-tight">{kitten.breed}</span>
                                        </div>
                                        {/* Icons: Vaccine & Certificate */}
                                        <div className="flex gap-2 text-primary/40">
                                            {/* Vaccine Icon */}
                                            <div className="bg-primary/5 p-1.5 rounded-full" title="Telah Divaksin">
                                                <svg className='size-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.9998 1.66675L18.3332 5.00008M14.1665 5.83341L16.6665 3.33341M15.8332 7.50008L7.24984 16.0834C6.4165 16.9167 5.1665 16.9167 4.4165 16.0834L3.9165 15.5834C3.08317 14.7501 3.08317 13.5001 3.9165 12.7501L12.4998 4.16675M7.49984 9.16675L10.8332 12.5001M4.1665 15.8334L1.6665 18.3334M11.6665 3.33341L16.6665 8.33341" stroke="#F2A154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                            </div>
                                            {/* Certificate Icon */}
                                            <div className="bg-primary/5 p-1.5 rounded-full" title="Bersertifikat Resmi">
                                                <svg className='size-4' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.33333 1H2.66667C2.22464 1 1.80072 1.1756 1.48816 1.48816C1.17559 1.80072 1 2.22464 1 2.66667V16C1 16.442 1.17559 16.866 1.48816 17.1785C1.80072 17.4911 2.22464 17.6667 2.66667 17.6667H12.6667C13.1087 17.6667 13.5326 17.4911 13.8452 17.1785C14.1577 16.866 14.3333 16.442 14.3333 16V6M9.33333 1C9.59713 0.999575 9.8584 1.05134 10.1021 1.15231C10.3458 1.25328 10.5671 1.40147 10.7533 1.58834L13.7433 4.57834C13.9307 4.76459 14.0793 4.98612 14.1806 5.23014C14.2818 5.47415 14.3338 5.73581 14.3333 6M9.33333 1V5.16667C9.33333 5.38768 9.42113 5.59964 9.57741 5.75592C9.73369 5.9122 9.94565 6 10.1667 6L14.3333 6M5.16667 11.8333L6.83333 13.5L10.1667 10.1667" stroke="#F2A154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Key Info Micro-Grid */}
                                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary/5">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black text-primary/30 uppercase tracking-widest leading-none">Sire (Bapak)</p>
                                            <p className="text-xs font-bold text-primary/80 line-clamp-1 uppercase">{kitten.sire}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black text-primary/30 uppercase tracking-widest leading-none">Mom (Induk)</p>
                                            <p className="text-xs font-bold text-primary/80 line-clamp-1 uppercase">{kitten.mom}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="bg-white border border-primary/5 px-3 py-1 rounded-full text-[9px] font-black text-primary/40 uppercase tracking-wider">{kitten.age}</span>
                                        <span className="bg-white border border-primary/5 px-3 py-1 rounded-full text-[9px] font-black text-primary/40 uppercase tracking-wider">{kitten.gender}</span>
                                        <span className="bg-white border border-primary/5 px-3 py-1 rounded-full text-[9px] font-black text-primary/40 uppercase tracking-wider">{kitten.color}</span>
                                    </div>

                                    <div className="pt-2 mt-auto">
                                        <a
                                            href={`https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten%20${kitten.name}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-primary text-white py-4 rounded-full font-black transition-all group-hover:bg-tertiary shadow-xl shadow-primary/10 hover:-translate-y-1 hover:scale-105 text-xs uppercase tracking-widest flex items-center justify-center gap-3 group/btn"
                                        >
                                            Chat Sekarang
                                            <svg className="size-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Kitten;
