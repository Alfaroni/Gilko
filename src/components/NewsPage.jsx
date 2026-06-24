import React from 'react';
import { newsData } from './NewsSection';

const NewsPage = ({ onNavigate }) => {
    return (
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#fef6ee] min-h-screen relative overflow-hidden">
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
                            Semua Berita & <span className="text-tertiary italic">Artikel</span>
                        </h2>
                    </div>

                    <button 
                        onClick={() => onNavigate('home')}
                        className="group bg-white text-primary pl-6 p-2 border border-primary/5 rounded-full hover:text-secondary hover:bg-tertiary transition-all shadow-xl shadow-black/5 hover:-translate-y-1 hover:scale-105 flex items-center gap-3"
                    >
                        Kembali ke Beranda
                        <div className="bg-tertiary size-8 rounded-full flex items-center justify-center transition-all text-white group-hover:bg-white group-hover:text-tertiary group-hover:-translate-x-1 rotate-180">
                            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                            </svg>
                        </div>
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            className="group cursor-pointer bg-white rounded-3xl p-4 flex flex-col"
                            onClick={() => onNavigate('news-detail', news.id)}
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-black/5 ring-1 ring-black/5 transition-all duration-500 group-hover:ring-tertiary/20">
                                <img 
                                    src={news.image} 
                                    alt={news.title} 
                                    className="w-full h-full object-top object-cover overflow-hidden transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3">
                                    <div className="bg-secondary/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-primary uppercase tracking-widest shadow-xl ring-1 ring-black/5">
                                        {news.category}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4 px-2">
                                <div className="flex items-center gap-3 text-primary/40 text-[10px] uppercase tracking-widest">
                                    <span className="flex items-center gap-1">
                                        <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        {news.date}
                                    </span>
                                    <span className="size-1 rounded-full bg-tertiary"></span>
                                    <span>5 Min Read</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary group-hover:text-tertiary transition-all duration-300 line-clamp-2 leading-[1.2]">
                                    {news.title}
                                </h3>
                                <p className="text-primary/60 text-sm leading-relaxed line-clamp-2">
                                    {news.excerpt}
                                </p>
                                <div className="pt-2">
                                    <div className="inline-flex items-center gap-2 text-tertiary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
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
        </div>
    );
};

export default NewsPage;
