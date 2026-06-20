import React from 'react';

const newsData = [
    {
        id: 1,
        title: 'Tips Merawat Kitten British Shorthair di Rumah',
        excerpt: 'Merawat kitten British Shorthair memerlukan perhatian khusus, mulai dari nutrisi hingga kebersihan lingkungan...',
        date: '15 Mei 2024',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop',
        category: 'Tips & Trick'
    },
    {
        id: 2,
        title: 'Gilko Cattery Memenangkan Best in Breed WCF 2024',
        excerpt: 'Kami sangat bangga mengumumkan bahwa salah satu indukan kami berhasil meraih gelar Best in Breed di ajang WCF...',
        date: '10 Mei 2024',
        image: 'https://images.unsplash.com/photo-1573865641540-394fb0fdecaf?q=80&w=2058&auto=format&fit=crop',
        category: 'Achievement'
    },
    {
        id: 3,
        title: 'Mengenal Perbedaan British Shorthair dan Longhair',
        excerpt: 'Banyak yang bertanya, apa sih perbedaan mendasar antara tipe shorthair dan longhair? Simak ulasannya di sini...',
        date: '05 Mei 2024',
        image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=2070&auto=format&fit=crop',
        category: 'Education'
    }
];

const NewsSection = ({ onNavigate }) => {
    return (
        <section id="news" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
            
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <h3 className="text-tertiary font-bold tracking-[0.3em] uppercase text-[10px] lg:text-xs">Gilko Journal</h3>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-heading font-black text-primary leading-tight">
                            Berita & <span className="text-tertiary italic">Artikel</span> Terbaru
                        </h2>
                    </div>

                    <button 
                        onClick={() => onNavigate('news-list')}
                            className="group bg-white text-primary pl-6 p-2 border border-primary/5  rounded-full hover:text-secondary hover:bg-tertiary transition-all shadow-xl shadow-black/5 hover:-translate-y-1 hover:scale-105  flex items-center gap-3"
                    >
                         Lihat Semu Berita
                            <div className="bg-tertiary size-8 rounded-full flex items-center justify-center transition-all text-white group-hover:bg-white group-hover:text-tertiary group-hover:translate-x-1 rotate-[-45deg]">
                                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                                </svg>
                            </div>
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            className="group cursor-pointer flex flex-col"
                            onClick={() => onNavigate('news-detail', news.id)}
                        >
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-black/5 ring-1 ring-black/5 transition-all duration-500 group-hover:ring-tertiary/20">
                                <img 
                                    src={news.image} 
                                    alt={news.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6">
                                    <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-primary uppercase tracking-widest shadow-xl ring-1 ring-black/5">
                                        {news.category}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4 px-2">
                                <div className="flex items-center gap-3 text-primary/40 text-[10px] font-black uppercase tracking-widest">
                                    <span className="flex items-center gap-1">
                                        <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        {news.date}
                                    </span>
                                    <span className="size-1 rounded-full bg-tertiary"></span>
                                    <span>5 Min Read</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-heading font-black text-primary group-hover:text-tertiary transition-all duration-300 line-clamp-2 leading-[1.2]">
                                    {news.title}
                                </h3>
                                <p className="text-primary/60 text-sm leading-relaxed line-clamp-2">
                                    {news.excerpt}
                                </p>
                                <div className="pt-2">
                                    <div className="inline-flex items-center gap-2 text-tertiary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                                        Baca Artikel
                                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
export { newsData };
