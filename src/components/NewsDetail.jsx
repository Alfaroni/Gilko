import React from 'react';
import { newsData } from './NewsSection';

const NewsDetail = ({ id, onNavigate }) => {
    const news = newsData.find(n => n.id === id) || newsData[0];

    return (
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto px-4 md:px-6">
                <button 
                    onClick={() => onNavigate('news-list')}
                    className="inline-flex items-center gap-2 text-primary/60 hover:text-tertiary transition-colors mb-8 group"
                >
                    <svg className="size-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                    Kembali ke Semua Berita
                </button>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="bg-tertiary/10 inline-block px-4 py-1 rounded-full text-xs font-bold text-tertiary uppercase tracking-widest">
                            {news.category}
                        </div>
                        <h1 className="text-3xl lg:text-6xl font-heading font-black text-primary leading-tight">
                            {news.title}
                        </h1>
                        <div className="flex items-center gap-4 text-primary/50 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                    </svg>
                                </div>
                                <span>Gilko Admin</span>
                            </div>
                            <span className="size-1 rounded-full bg-primary/20"></span>
                            <span>{news.date}</span>
                            <span className="size-1 rounded-full bg-primary/20"></span>
                            <span>5 Min Read</span>
                        </div>
                    </div>

                    <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-primary/80 leading-relaxed space-y-6">
                        <p className="text-xl font-medium text-primary">
                            {news.excerpt}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <h2 className="text-2xl font-heading font-bold text-primary pt-4">Persiapan Awal</h2>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                        </p>
                        <div className="bg-[#fef6ee] p-8 rounded-[2rem] border border-tertiary/20 italic text-primary/70">
                            "Kucing British Shorthair dikenal dengan karakternya yang tenang dan mandiri, namun tetap memerlukan interaksi yang berkualitas dengan pemiliknya."
                        </div>
                        <p>
                            Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
