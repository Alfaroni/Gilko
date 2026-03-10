import React, { useState, useEffect } from 'react';

const Intro = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5),
                y: (e.clientY / window.innerHeight - 0.5)
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const floatingImages = [
        {
            url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
            pos: "top-[-5%] left-[45%] md:left-[47%]",
            size: "w-24 md:w-32",
            rotate: -5,
            rounded: "rounded-2xl md:rounded-[2rem]",
            depth: 0.4,
            delay: 0.2
        },
        {
            url: "https://images.unsplash.com/photo-1513360371469-4ed47f51953d?q=80&w=2070&auto=format&fit=crop",
            pos: "top-[20%] left-[5%] md:left-[10%]",
            size: "w-32 md:w-44",
            rotate: -8,
            rounded: "rounded-3xl md:rounded-[3rem]",
            depth: -0.6,
            delay: 0.4
        },
        {
            url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop",
            pos: "top-[35%] right-[5%] md:right-[12%]",
            size: "w-28 md:w-40",
            rotate: 12,
            rounded: "rounded-2xl md:rounded-[2.5rem]",
            depth: 0.8,
            delay: 0.6
        },
        {
            url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=1920&auto=format&fit=crop",
            pos: "bottom-[15%] left-[12%] md:left-[18%]",
            size: "w-32 md:w-40",
            rotate: 15,
            rounded: "rounded-3xl md:rounded-[3rem]",
            depth: -0.4,
            delay: 0.8
        },
        {
            url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2080&auto=format&fit=crop",
            pos: "bottom-[8%] right-[25%] md:right-[30%]",
            size: "w-36 md:w-48",
            rotate: -10,
            rounded: "rounded-[2.5rem] md:rounded-[3.5rem]",
            depth: 0.5,
            delay: 1.0
        },
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FAF3F0]">
            {/* Artistic Paw Background Shape */}
            <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center opacity-[0.03] pointer-events-none -z-10 transition-transform duration-1000 ease-out"
                style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) scale(1.25)` }}
            >
                <svg width="800" height="800" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
                    <path d="M50 80c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18zm-25-35c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm50 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zM35 25c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10zm30 0c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" />
                </svg>
            </div>

            {/* Floating Kitten Images */}
            {floatingImages.map((img, i) => (
                <div
                    key={i}
                    className={`absolute z-0 transition-all shadow-2xl overflow-hidden hover:scale-110 border-4 md:border-8 border-white group pointer-events-auto
                        ${img.pos} ${img.size}
                        ${isLoaded ? 'opacity-100' : 'opacity-0 scale-0 translate-y-20'}
                    `}
                    style={{
                        transitionDuration: isLoaded ? '1000ms' : '0ms',
                        transitionDelay: isLoaded ? `${img.delay}s` : '0s',
                        transform: isLoaded
                            ? `translate3d(${mousePos.x * img.depth * 50}px, ${mousePos.y * img.depth * 50}px, 0) rotate(${img.rotate}deg)`
                            : 'scale(0) translateY(100px)',
                        zIndex: Math.abs(img.depth * 10)
                    }}
                >
                    <div className="relative w-full h-full animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                        <img
                            src={img.url}
                            alt="Gilko Kitten"
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${img.rounded}`}
                        />
                    </div>
                </div>
            ))}

            <div className="container mx-auto px-4 md:px-6 z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-xl shadow-black/5 animate-fade-in border border-primary/5">
                        <span className="text-tertiary">★</span>
                        <span className="text-primary font-black text-xs uppercase tracking-widest">Breeder British Premium</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1] font-heading font-black text-primary animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        Kualitas <span className="text-tertiary font-medium italic">British</span> dengan <span className="text-tertiary font-medium italic">Bloodline Terbaik</span> <br className="hidden lg:block" />
                        Dibesarkan dengan <span className="text-tertiary font-medium italic">Cinta Kasih</span> dirumah kami.
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-base text-primary/70 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
                        Gilko cattery berdedikasi untuk membiakkan <span className="font-bold text-primary">kucing british shorthair & longhair</span> dengan <span className="font-bold text-primary">kualitas bloodline terbaik</span>. Dibesarkan dengan cinta kasih dirumah kami, dan siap menjadi bagian dari teman hidup kamu selamanya.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-6 pt-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
                        <a
                            href="#kittens"
                            className="bg-primary text-white px-10 py-5 rounded-[2rem] font-black hover:bg-tertiary transition-all shadow-2xl shadow-primary/20 hover:-translate-y-1 hover:scale-105 text-lg"
                        >
                            Adopsi kitten
                        </a>
                        <a
                            href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white text-primary border border-primary/5 px-10 py-5 rounded-[2rem] font-black hover:bg-secondary/10 transition-all shadow-xl shadow-black/5 hover:-translate-y-1 hover:scale-105 text-lg flex items-center gap-3"
                        >
                            Tanya Sekarang
                            <div className="bg-tertiary size-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 rotate-[-45deg]">
                                <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
