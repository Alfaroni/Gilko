import React from 'react';
import { newsData } from './NewsSection';

const NewsPage = ({ onNavigate }) => {
    return (
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#fef6ee] min-h-screen">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <button 
                        onClick={() => onNavigate('home')}
                        className="inline-flex items-center gap-2 text-primary/60 hover:text-tertiary transition-colors mb-4 group"
                    >
                        <svg className="size-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                        </svg>
                        Kembali ke Beranda
                    </button>
                    <h1 className="text-4xl lg:text-6xl font-heading font-black text-primary">Gilko Journal</h1>
                    <p className="text-primary/60 max-w-2xl mx-auto">
                        Kumpulan artikel, tips merawat kucing, dan berita terbaru seputar Gilko Cattery.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            className="group cursor-pointer bg-white rounded-[2.5rem] p-4 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            onClick={() => onNavigate('news-detail', news.id)}
                        >
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                                <img 
                                    src={news.image} 
                                    alt={news.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                                        {news.category}
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 pb-4 space-y-3">
                                <div className="flex items-center gap-2 text-primary/40 text-xs font-bold uppercase tracking-wider">
                                    <span>{news.date}</span>
                                </div>
                                <h3 className="text-xl font-heading font-black text-primary group-hover:text-tertiary transition-colors leading-tight">
                                    {news.title}
                                </h3>
                                <p className="text-primary/60 text-sm leading-relaxed line-clamp-3">
                                    {news.excerpt}
                                </p>
                                <div className="pt-2 flex items-center text-tertiary font-bold text-sm gap-2">
                                    Baca Selengkapnya
                                    <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                    </svg>
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
