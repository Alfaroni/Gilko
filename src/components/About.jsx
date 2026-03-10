import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="aspect-[4/5] rounded-3xl bg-secondary/30 overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="About Gilko 1" />
                                </div>
                                <div className="aspect-square rounded-3xl bg-tertiary/20 overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1573865526739-10659fef78a1?q=80&w=2030&auto=format&fit=crop" className="w-full h-full object-cover" alt="About Gilko 2" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-square rounded-3xl bg-primary/20 overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1513245533132-31f507417b26?q=80&w=1935&auto=format&fit=crop" className="w-full h-full object-cover" alt="About Gilko 3" />
                                </div>
                                <div className="aspect-[4/5] rounded-3xl bg-secondary/30 overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="About Gilko 4" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 bg-white rounded-full border border-primary/5 flex items-center justify-center p-8 shadow-xl z-10">
                            <span className="text-primary font-heading font-black text-center leading-tight">Est.<br />2015</span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm">Cerita Kami</h3>
                            <h2 className="text-4xl lg:text-5xl font-heading font-black text-primary leading-tight">
                                Dedikasi Sepenuh Hati untuk Kucing Berkualitas.
                            </h2>
                        </div>

                        <div className="space-y-6 text-primary/70 leading-relaxed">
                            <p>
                                Berawal dari kecintaan kami terhadap kucing, Gilko Cattery hadir sebagai wadah dedikasi
                                untuk melestarikan dan menghadirkan kitten yang sehat, bahagia, dan berkarakter unik.
                            </p>
                            <p>
                                Kami percaya bahwa setiap kucing layak mendapatkan kehidupan terbaik.
                                Oleh karena itu, kami menerapkan standar perawatan internasional,
                                asupan nutrisi premium, dan pengawasan kesehatan yang ketat untuk setiap bayi kucing yang lahir di tempat kami.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <div className="text-3xl font-heading font-black text-primary">100%</div>
                                <div className="text-sm text-primary/60">Sehat & Terjamin</div>
                            </div>
                            <div>
                                <div className="text-3xl font-heading font-black text-primary">ICA</div>
                                <div className="text-sm text-primary/60">Terdaftar Resmi</div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button className="group flex items-center gap-4 text-primary font-bold transition-all relative">
                                <span className="bg-tertiary size-12 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-2">
                                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
