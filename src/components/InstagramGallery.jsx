import React from 'react';

const InstagramGallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop", // cat 1
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2080&auto=format&fit=crop", // cat 2
        "https://images.unsplash.com/photo-1513360371469-4ed47f51953d?q=80&w=2070&auto=format&fit=crop", // cat 3 (large)
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop", // cat 4 (wide)
        "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=1920&auto=format&fit=crop", // cat 5
        "https://images.unsplash.com/photo-1513245533132-31f507417b26?q=80&w=1935&auto=format&fit=crop", // cat 6 (bottom 1)
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2070&auto=format&fit=crop", // cat 7 (bottom 2)
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=2070&auto=format&fit=crop", // cat 8 (bottom 3)
    ];

    return (
        <section id="instagram-gallery" className="py-24 bg-[#FAF3F0]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Galeri Gilko</h2>
                    <a
                        href="https://www.instagram.com/gilkocattery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-primary/60 font-bold hover:text-tertiary transition-colors text-sm"
                    >
                        Follow on Instagram
                        <div className="bg-tertiary size-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 rotate-[-45deg] scale-90 shadow-lg shadow-tertiary/20">
                            <svg className="size-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                            </svg>
                        </div>
                    </a>
                </div>

                {/* Specific Layout Grid */}
                <div className="space-y-6">
                    {/* Top Complex Row */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                        {/* Column 1 - Two Small Squares (Left) */}
                        <div className="md:col-span-2 flex flex-col gap-6">
                            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img src={images[0]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img src={images[1]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Column 2 - Large Vertical Centerpiece */}
                        <div className="md:col-span-4 h-full min-h-[400px]">
                            <div className="h-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group">
                                <img src={images[2]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Column 3 - Wide and Medium Landscape (Right) */}
                        <div className="md:col-span-6 flex flex-col gap-6">
                            <div className="h-[210px] md:h-1/2 rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white group">
                                <img src={images[3]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="h-[210px] md:h-1/2 rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white group">
                                <img src={images[4]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Three Uniform Landscape Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[3/2] rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white group">
                            <img src={images[5]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="aspect-[3/2] rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white group">
                            <img src={images[6]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="aspect-[3/2] rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white group">
                            <img src={images[7]} alt="Gilko" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramGallery;
