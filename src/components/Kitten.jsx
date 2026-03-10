import React, { useState, useRef } from 'react';

const Kitten = () => {
    const [selectedKitten, setSelectedKitten] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);

    const kittens = [
        {
            name: "Oliver",
            breed: "British Shorthair",
            age: "3 Bulan",
            gender: "Jantan",
            color: "Blue",
            sire: "Grand Ch. Maximus",
            mom: "Lady Bella of Gilko",
            isVaccinated: true,
            hasCertificate: true,
            media: [
                { type: 'image', url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2080&auto=format&fit=crop" },
                { type: 'image', url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" },
                { type: 'video', url: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ],
            status: "Available"
        },
        {
            name: "Luna",
            breed: "Scottish Fold",
            age: "2.5 Bulan",
            gender: "Betina",
            color: "White / Bicolor",
            sire: "Sir Winston",
            mom: "Princess Mia",
            isVaccinated: true,
            hasCertificate: true,
            media: [
                { type: 'image', url: "https://images.unsplash.com/photo-1513360371469-4ed47f51953d?q=80&w=2070&auto=format&fit=crop" },
                { type: 'image', url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2070&auto=format&fit=crop" },
                { type: 'video', url: "https://www.w3schools.com/html/movie.mp4" }
            ],
            status: "Booked"
        },
        {
            name: "Milo",
            breed: "Munchkin",
            age: "3 Bulan",
            gender: "Jantan",
            color: "Tabby",
            sire: "King Shorty",
            mom: "Queen Daisy",
            isVaccinated: true,
            hasCertificate: false,
            media: [
                { type: 'image', url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop" },
                { type: 'image', url: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop" },
                { type: 'video', url: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ],
            status: "Available"
        },
        {
            name: "Bella",
            breed: "Persian",
            age: "4 Bulan",
            gender: "Betina",
            color: "Cream",
            sire: "Duke Fluffy",
            mom: "Duchess Snow",
            isVaccinated: true,
            hasCertificate: true,
            media: [
                { type: 'image', url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=1920&auto=format&fit=crop" },
                { type: 'image', url: "https://images.unsplash.com/photo-1513245533132-31f507417b26?q=80&w=1935&auto=format&fit=crop" },
                { type: 'video', url: "https://www.w3schools.com/html/movie.mp4" }
            ],
            status: "Available"
        },
        {
            name: "Coco",
            breed: "Ragdoll",
            age: "3.5 Bulan",
            gender: "Betina",
            color: "Pointed",
            sire: "Prince Blue",
            mom: "Grace of Heaven",
            isVaccinated: true,
            hasCertificate: true,
            media: [
                { type: 'image', url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" },
                { type: 'image', url: "https://images.unsplash.com/photo-1513245533132-31f507417b26?q=80&w=1935&auto=format&fit=crop" },
                { type: 'video', url: "https://www.w3schools.com/html/movie.mp4" }
            ],
            status: "Available"
        }
    ];

    const openModal = (kitten) => {
        setSelectedKitten(kitten);
        setActiveSlide(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedKitten(null);
        document.body.style.overflow = 'unset';
    };

    const nextKitten = () => {
        if (sliderIndex < kittens.length - 3) {
            setSliderIndex(sliderIndex + 1);
        }
    };

    const prevKitten = () => {
        if (sliderIndex > 0) {
            setSliderIndex(sliderIndex - 1);
        }
    };

    const nextMedia = () => {
        setActiveSlide((prev) => (prev + 1) % selectedKitten.media.length);
    };

    const prevMedia = () => {
        setActiveSlide((prev) => (prev - 1 + selectedKitten.media.length) % selectedKitten.media.length);
    };

    return (
        <section id="kittens" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Slider */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl space-y-4">
                        <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm">Kitten Kami</h3>
                        <h2 className="text-4xl lg:text-5xl font-heading font-black text-primary leading-tight">
                            Pilih Teman Baru yang Lucu dan Menggemaskan.
                        </h2>
                    </div>

                    {kittens.length > 3 && (
                        <div className="flex gap-3">
                            <button
                                onClick={prevKitten}
                                disabled={sliderIndex === 0}
                                className={`size-14 rounded-2xl flex items-center justify-center transition-all ${sliderIndex === 0 ? 'bg-secondary/20 text-primary/20' : 'bg-primary text-white hover:bg-tertiary shadow-lg'
                                    }`}
                            >
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={nextKitten}
                                disabled={sliderIndex >= kittens.length - 3}
                                className={`size-14 rounded-2xl flex items-center justify-center transition-all ${sliderIndex >= kittens.length - 3 ? 'bg-secondary/20 text-primary/20' : 'bg-primary text-white hover:bg-tertiary shadow-lg'
                                    }`}
                            >
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Main Slider */}
                <div className="relative">
                    <div
                        className="flex transition-transform duration-700 ease-out gap-8"
                        style={{ transform: `translateX(calc(-${sliderIndex * (100 / 3)}% - ${sliderIndex * 21.3}px))` }}
                    >
                        {kittens.map((kitten, i) => (
                            <div key={i} className="min-w-[calc(100%-1rem)] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.35rem)] group bg-secondary/5 rounded-[3rem] overflow-hidden border border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-[4/5] relative overflow-hidden cursor-pointer" onClick={() => openModal(kitten)}>
                                    <img src={kitten.media[0].url} alt={kitten.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                        <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${kitten.status === 'Available' ? 'bg-green-500 text-white' : 'bg-primary/40 text-white backdrop-blur-md'
                                            }`}>
                                            {kitten.status}
                                        </span>

                                        <div className="flex flex-col gap-2 scale-90 origin-top-right">
                                            {kitten.isVaccinated && (
                                                <div className="bg-green-500 text-white size-9 rounded-xl flex items-center justify-center shadow-lg" title="Sudah Vaksin">
                                                    <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                                </div>
                                            )}
                                            {kitten.hasCertificate && (
                                                <div className="bg-orange-500 text-white size-9 rounded-xl flex items-center justify-center shadow-lg" title="Sertifikat / Pedigree">
                                                    <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 space-y-5 text-left">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-3xl font-heading font-black text-primary leading-none mb-1">{kitten.name}</h4>
                                            <span className="text-tertiary font-bold text-sm tracking-tight">{kitten.breed}</span>
                                        </div>
                                    </div>

                                    {/* Lineage Info in Grid */}
                                    <div className="grid grid-cols-1 gap-2 pt-4 border-t border-primary/5">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Sire:</span>
                                            <span className="text-[12px] font-bold text-primary/80 line-clamp-1">{kitten.sire}</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Mom:</span>
                                            <span className="text-[12px] font-bold text-primary/80 line-clamp-1">{kitten.mom}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="bg-white border border-primary/5 px-2.5 py-1 rounded-lg text-[9px] font-bold text-primary/50 uppercase">{kitten.age}</span>
                                        <span className="bg-white border border-primary/5 px-2.5 py-1 rounded-lg text-[9px] font-bold text-primary/50 uppercase">{kitten.gender}</span>
                                        <span className="bg-white border border-primary/5 px-2.5 py-1 rounded-lg text-[9px] font-bold text-primary/50 uppercase">{kitten.color}</span>
                                    </div>

                                    <button
                                        onClick={() => openModal(kitten)}
                                        className="w-full bg-primary text-white py-4 rounded-2xl font-black transition-all hover:bg-tertiary shadow-xl shadow-primary/10 hover:-translate-y-1 text-sm uppercase tracking-widest"
                                    >
                                        Detail Adopsi
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Detail */}
            {selectedKitten && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
                    <div className="absolute inset-0 bg-primary/95 backdrop-blur-2xl" onClick={closeModal}></div>

                    <div className="relative w-full max-w-6xl bg-white rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-zoom-in min-h-[500px]">
                        {/* Media Slider */}
                        <div className="relative md:w-1/2 bg-black flex items-center justify-center group/modal">
                            {selectedKitten.media[activeSlide].type === 'image' ? (
                                <img src={selectedKitten.media[activeSlide].url} alt={selectedKitten.name} className="w-full h-full object-cover transition-opacity duration-500" />
                            ) : (
                                <video src={selectedKitten.media[activeSlide].url} controls autoPlay className="w-full h-full object-contain" />
                            )}
                            <button onClick={prevMedia} className="absolute left-6 size-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all">
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={nextMedia} className="absolute right-6 size-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all">
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="md:w-1/2 p-10 md:p-14 flex flex-col bg-secondary/5">
                            <button onClick={closeModal} className="self-end p-2 bg-white rounded-full shadow-sm text-primary/40 hover:text-primary transition-colors mb-4">
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <div className="flex-1 space-y-8">
                                <div className="space-y-1 text-left">
                                    <h3 className="text-5xl font-heading font-black text-primary leading-tight">{selectedKitten.name}</h3>
                                    <p className="text-tertiary font-bold text-xl">{selectedKitten.breed}</p>
                                </div>

                                {/* Lineage Section */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 bg-white rounded-[2rem] border border-primary/5 shadow-sm text-left">
                                        <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-2">Sire (Paceck)</p>
                                        <p className="font-bold text-primary flex items-center gap-2">
                                            <span className="size-2 bg-blue-400 rounded-full" />
                                            {selectedKitten.sire}
                                        </p>
                                    </div>
                                    <div className="p-5 bg-white rounded-[2rem] border border-primary/5 shadow-sm text-left">
                                        <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-2">Mom (Indukan)</p>
                                        <p className="font-bold text-primary flex items-center gap-2">
                                            <span className="size-2 bg-pink-400 rounded-full" />
                                            {selectedKitten.mom}
                                        </p>
                                    </div>
                                </div>

                                {/* Health & Docs Section */}
                                <div className="flex flex-wrap gap-4">
                                    <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-sm ${selectedKitten.isVaccinated ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                                        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                        {selectedKitten.isVaccinated ? 'Sudah Vaksin' : 'Belum Vaksin'}
                                    </div>
                                    <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-sm ${selectedKitten.hasCertificate ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-400'}`}>
                                        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        {selectedKitten.hasCertificate ? 'Sertifikat/ICA Pedigree' : 'No Certificate'}
                                    </div>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten%20${selectedKitten.name}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-10 w-full bg-tertiary text-white py-6 rounded-[2rem] font-black text-center shadow-2xl shadow-tertiary/20 hover:scale-[1.02] active:scale-95 transition-all text-lg"
                            >
                                Tanya Admin di WA
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Kitten;
