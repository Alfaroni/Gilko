import React from 'react';

const Shop = () => {
    const products = [
        {
            name: "Royal Canin Mother & Babycat",
            price: "Rp 125.000",
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop",
            tag: "Terlaris",
            link: "https://s.shopee.co.id/6VGowppAzz"
        },
        {
            name: "Bantal Kucing Premium",
            price: "Rp 85.000",
            image: "https://images.unsplash.com/photo-1549465220-1d8c9d9c4709?q=80&w=2070&auto=format&fit=crop",
            tag: "New",
            link: "https://s.shopee.co.id/6VGowppAzz"
        },
        {
            name: "Sisir Kucing Bulu Halus",
            price: "Rp 45.000",
            image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=2070&auto=format&fit=crop",
            tag: "Essential",
            link: "https://s.shopee.co.id/6VGowppAzz"
        }
    ];

    return (
        <section id="shop" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm">Gilko Shop</h3>
                        <h2 className="text-4xl lg:text-5xl font-heading font-black text-primary leading-tight">
                            Perlengkapan Terbaik <br /> untuk Kitten Kamu.
                        </h2>
                    </div>
                    <a
                        href="https://s.shopee.co.id/6VGowppAzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform inline-block"
                    >
                        Kunjungi Shopee
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((p, i) => (
                        <div key={i} className="group relative bg-secondary/5 rounded-[2.5rem] overflow-hidden border border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-square relative overflow-hidden">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-6 right-6">
                                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                                        {p.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <h4 className="text-xl font-bold text-primary mb-2 line-clamp-1">{p.name}</h4>
                                <div className="text-tertiary font-black text-2xl mb-6">{p.price}</div>
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-white border-2 border-primary/10 py-4 rounded-2xl font-black text-primary hover:bg-primary hover:text-white transition-all shadow-sm group-hover:border-primary"
                                >
                                    Beli di Shopee
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-primary rounded-[3rem] text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                            <circle cx="10" cy="10" r="2" />
                            <circle cx="30" cy="10" r="2" />
                            <circle cx="50" cy="10" r="2" />
                            <circle cx="70" cy="10" r="2" />
                            <circle cx="90" cy="10" r="2" />
                        </svg>
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="text-left">
                            <p className="text-tertiary font-bold uppercase tracking-widest text-xs mb-1">Butuh Rekomendasi?</p>
                            <h4 className="text-2xl font-heading font-black">Konsultasikan kebutuhan nutrisi kitten Kamu.</h4>
                        </div>
                        <a
                            href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20tanya%20rekomendasi%20perlengkapan%20kitten."
                            className="bg-tertiary text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-black/10 hover:scale-105 active:scale-95 transition-all"
                        >
                            Hubungi Ahli Nutrisi Kita
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
