import React, { useState } from 'react';
import { newsData } from './NewsSection';

const NewsDetail = ({ id, onNavigate }) => {
    const news = newsData.find(n => n.id === id) || newsData[0];
    const [copied, setCopied] = useState(false);

    // Get current URL or default
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://gilkocattery.com/news';
    const shareTitle = news.title;

    // Pure JS sharing functions
    const handleShare = (platform) => {
        if (platform === 'copy') {
            navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } else if (platform === 'facebook') {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
        } else if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
        } else if (platform === 'whatsapp') {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank');
        }
    };

    // Related articles logic: same category, excluding current, limit to 3. Fallback to latest.
    const relatedNews = newsData
        .filter(n => n.id !== news.id)
        .sort((a, b) => {
            if (a.category === news.category && b.category !== news.category) return -1;
            if (a.category !== news.category && b.category === news.category) return 1;
            return 0;
        })
        .slice(0, 3);

    return (
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#fef6ee] min-h-screen relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <div className="container max-w-5xl mx-auto px-4 md:px-6 relative z-10">
                <button 
                    onClick={() => onNavigate('news-list')}
                    className="inline-flex items-center gap-2 text-primary/60 hover:text-tertiary transition-colors mb-8 group"
                >
                    <svg className="size-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                    Kembali ke Semua Berita
                </button>

                <div className="space-y-8 bg-white rounded-[3rem] p-6 md:p-12 shadow-2xl shadow-black/5 ring-1 ring-black/5">
                    <div className="space-y-4">
                        <div className="bg-tertiary/10 inline-block px-4 py-1 rounded-full text-xs font-bold text-tertiary uppercase tracking-widest">
                            {news.category}
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-heading font-black text-primary leading-tight">
                            {news.title}
                        </h1>
                        <div className="flex items-center gap-2 text-primary/50 text-xs md:text-sm font-medium">
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

                    <div className="aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-full h-full object-cover object-top"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none leading-relaxed">
                       
                        <p>
                            Nutrisi yang tepat sangat penting dalam memelihara kucing ras seperti British Shorthair maupun Longhair. Membiasakan mereka makan secara terjadwal dengan porsi terkontrol akan menghindarkan dari bahaya obesitas yang kerap dialami ras berbadan gempal ini. Selain itu, kebersihan kandang dan tempat tidur harus selalu terjaga guna mencegah jamur dan penyakit kulit.
                        </p>
                        <h2>Persiapan Awal & Perawatan Bulu</h2>
                        <p>
                            Grooming rutin minimal 2 kali seminggu untuk British Shorthair, dan setiap hari untuk British Longhair sangat dianjurkan. Gunakan sisir khusus dengan ujung lembut untuk mengangkat bulu mati secara maksimal. Jangan lupa bersihkan bagian telinga dan potong kuku secara berkala setiap 2 minggu sekali.
                        </p>
                        
                        <blockquote className="not-prose relative bg-[#fef6ee] p-8 md:p-12 rounded-[2rem] border border-tertiary/20 text-center flex flex-col items-center justify-center my-10 overflow-hidden">
                            {/* Top Left Quote Icon */}
                            <div className="absolute top-4 left-6 text-tertiary/10 pointer-events-none">
                                <svg className="size-12 md:size-20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.161v3.377c-3.66.496-5.239 3.414-5.58 5.863h4.563v8.312h-8zm-14 0v-7.391c0-5.704 3.748-9.762 9-10.161v3.377c-3.66.496-5.239 3.414-5.58 5.863h4.563v8.312h-8z"/>
                                </svg>
                            </div>
                            
                            <p className="text-lg md:text-2xl font-heading font-bold italic text-primary/80 leading-relaxed max-w-2xl relative z-10 m-0">
                                "Kucing British Shorthair dikenal dengan karakternya yang tenang dan mandiri, namun tetap memerlukan interaksi yang berkualitas dengan pemiliknya."
                            </p>
                            
                            {/* Bottom Right Quote Icon */}
                            <div className="absolute bottom-4 right-6 text-tertiary/10 pointer-events-none">
                                <svg className="size-12 md:size-20 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.161v3.377c-3.66.496-5.239 3.414-5.58 5.863h4.563v8.312h-8zm-14 0v-7.391c0-5.704 3.748-9.762 9-10.161v3.377c-3.66.496-5.239 3.414-5.58 5.863h4.563v8.312h-8z"/>
                                </svg>
                            </div>
                        </blockquote>

                        <p>
                            Lakukan pemeriksaan rutin ke dokter hewan tepercaya untuk memantau tumbuh kembang dan kelengkapan vaksinasinya. Pemberian obat cacing secara berkala setiap 3 bulan sekali juga menjadi bagian penting dalam menjaga kestabilan pencernaan kucing kesayangan Anda.
                        </p>
                    </div>

                    {/* Divider and Share Section */}
                    <div className="border-t border-primary/10 pt-8 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-[#fef6ee] text-primary/80 text-[10px] uppercase font-black tracking-wider px-4 py-1.5 rounded-full">
                                {news.category}
                            </span>
                            <span className="bg-[#fef6ee] text-primary/80 text-[10px] uppercase font-black tracking-wider px-4 py-1.5 rounded-full">
                                Gilko Journal
                            </span>
                        </div>

                        {/* Share Buttons */}
                        <div className="flex items-center gap-3 relative">
                            {copied && (
                                <span className="absolute -top-10 right-0 bg-primary text-white text-[10px] px-3 py-1 rounded-md shadow-md animate-fade-in font-bold">
                                    Tautan disalin!
                                </span>
                            )}
                            <span className="text-xs uppercase font-black tracking-wider text-primary/40 mr-1">Bagikan:</span>
                            
                            <button 
                                onClick={() => handleShare('facebook')}
                                className="size-10 rounded-full bg-[#594539] text-white hover:bg-tertiary hover:scale-110 transition-all flex items-center justify-center"
                                title="Bagikan ke Facebook"
                            >
                                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3h-4V6.5c0-.8.2-1.1 1-1.1H18V1h-2.8C12 1 10 2.5 10 5.5V8H9z"/>
                                </svg>
                            </button>

                            <button 
                                onClick={() => handleShare('whatsapp')}
                                className="size-10 rounded-full bg-[#594539] text-white hover:bg-tertiary hover:scale-110 transition-all flex items-center justify-center"
                                title="Bagikan ke WhatsApp"
                            >
                                <svg className="size-5 fill-current" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0013 2.6665C23.3653 2.6665 29.3347 8.63584 29.3347 15.9998C29.3347 23.3638 23.3653 29.3332 16.0013 29.3332C13.645 29.3372 11.3301 28.7136 9.29466 27.5265L2.67332 29.3332L4.47599 22.7092C3.28793 20.6731 2.66386 18.3572 2.66799 15.9998C2.66799 8.63584 8.63732 2.6665 16.0013 2.6665ZM11.4573 9.73317L11.1907 9.74384C11.0182 9.75572 10.8498 9.801 10.6947 9.87717C10.5501 9.95919 10.4181 10.0616 10.3027 10.1812C10.1427 10.3318 10.052 10.4625 9.95466 10.5892C9.46149 11.2304 9.19595 12.0176 9.19999 12.8265C9.20266 13.4798 9.37332 14.1158 9.63999 14.7105C10.1853 15.9132 11.0827 17.1865 12.2667 18.3665C12.552 18.6505 12.832 18.9358 13.1333 19.2012C14.6046 20.4964 16.3577 21.4305 18.2533 21.9292L19.0107 22.0452C19.2573 22.0585 19.504 22.0398 19.752 22.0278C20.1402 22.0074 20.5193 21.9022 20.8627 21.7198C21.0371 21.6296 21.2075 21.5318 21.3733 21.4265C21.3733 21.4265 21.4298 21.3883 21.54 21.3065C21.72 21.1732 21.8307 21.0785 21.98 20.9225C22.092 20.8069 22.1853 20.6727 22.26 20.5198C22.364 20.3025 22.468 19.8878 22.5107 19.5425C22.5427 19.2785 22.5333 19.1345 22.5293 19.0452C22.524 18.9025 22.4053 18.7545 22.276 18.6918L21.5 18.3438C21.5 18.3438 20.34 17.8385 19.6307 17.5158C19.5564 17.4835 19.4769 17.465 19.396 17.4612C19.3048 17.4516 19.2125 17.4618 19.1256 17.491C19.0386 17.5202 18.959 17.5678 18.892 17.6305C18.8853 17.6278 18.796 17.7038 17.832 18.8718C17.7767 18.9462 17.7004 19.0024 17.6131 19.0332C17.5257 19.0641 17.4311 19.0683 17.3413 19.0452C17.2544 19.022 17.1693 18.9926 17.0867 18.9572C16.9213 18.8878 16.864 18.8612 16.7507 18.8132C15.9852 18.4797 15.2766 18.0285 14.6507 17.4758C14.4827 17.3292 14.3267 17.1692 14.1667 17.0145C13.6421 16.5121 13.185 15.9438 12.8067 15.3238L12.728 15.1972C12.6723 15.1116 12.6267 15.0199 12.592 14.9238C12.5413 14.7278 12.6733 14.5705 12.6733 14.5705C12.6733 14.5705 12.9973 14.2158 13.148 14.0238C13.2947 13.8372 13.4187 13.6558 13.4987 13.5265C13.656 13.2732 13.7053 13.0132 13.6227 12.8118C13.2493 11.8998 12.8635 10.9927 12.4653 10.0905C12.3867 9.91184 12.1533 9.78384 11.9413 9.7585C11.8693 9.74961 11.7973 9.7425 11.7253 9.73717C11.5463 9.7269 11.3668 9.72868 11.188 9.7425L11.4573 9.73317Z" fill="white"/>
</svg>

                            </button>

                            <button 
                                onClick={() => handleShare('twitter')}
                                className="size-10 rounded-full bg-[#594539] text-white hover:bg-tertiary hover:scale-110 transition-all flex items-center justify-center"
                                title="Bagikan ke Twitter/X"
                            >
                                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </button>

                            <button 
                                onClick={() => handleShare('copy')}
                                className="size-10 rounded-full bg-[#594539] text-white hover:bg-tertiary hover:scale-110 transition-all flex items-center justify-center"
                                title="Salin Tautan"
                            >
                                <svg className="size-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6673 15.9998L18.134 6.6665V11.3332C13.8673 11.3332 5.33398 14.1332 5.33398 25.3332C5.33398 23.7772 7.89399 20.6665 18.134 20.6665V25.3332L26.6673 15.9998Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </button>
                        </div>
                    </div>
                </div>

                
            </div>

                {/* Related Articles Section */}
                {relatedNews.length > 0 && (
                    <div className="container max-w-6xl mt-24 mx-auto px-4 md:px-6 relative z-10">
                        <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-tertiary"></span>
                                    <h3 className="text-tertiary font-bold tracking-[0.3em] uppercase text-[10px] lg:text-xs">Gilko Journal</h3>
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-heading font-black text-primary leading-tight">
                                    Artikel <span className="text-tertiary italic">Terkait</span>
                                </h2>
                            </div>

                            <button 
                                onClick={() => onNavigate('news-list')}
                                    className="group bg-white text-primary pl-6 p-2 border border-primary/5  rounded-full hover:text-secondary hover:bg-tertiary transition-all shadow-xl shadow-black/5 hover:-translate-y-1 hover:scale-105  flex items-center gap-3"
                            >
                                Lihat Semua Berita
                                    <div className="bg-tertiary size-8 rounded-full flex items-center justify-center transition-all text-white group-hover:bg-white group-hover:text-tertiary group-hover:translate-x-1 rotate-[-45deg]">
                                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                                        </svg>
                                    </div>
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedNews.map((news) => (
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
                )}
        </div>
    );
};

export default NewsDetail;
