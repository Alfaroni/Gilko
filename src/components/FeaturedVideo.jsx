import React, { useEffect, useRef, useState } from 'react';

const FeaturedVideo = () => {
    const iframeRef = useRef(null);
    const containerRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const iframe = iframeRef.current;
                    if (!iframe || !iframe.contentWindow) return;

                    if (entry.isIntersecting) {
                        // Play video when entering viewport
                        iframe.contentWindow.postMessage(
                            JSON.stringify({ event: 'command', func: 'playVideo' }),
                            '*'
                        );
                    } else {
                        // Pause video when leaving viewport
                        iframe.contentWindow.postMessage(
                            JSON.stringify({ event: 'command', func: 'pauseVideo' }),
                            '*'
                        );
                    }
                });
            },
            { threshold: 0.25 } // Triggers when 25% of the section is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const toggleMute = () => {
        const iframe = iframeRef.current;
        if (!iframe || !iframe.contentWindow) return;

        const newMuteState = !isMuted;
        setIsMuted(newMuteState);

        iframe.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: newMuteState ? 'mute' : 'unMute'
            }),
            '*'
        );
    };

    return (
        <section 
            ref={containerRef}
            id="featured-video" 
            className="py-24 bg-primary relative overflow-hidden text-white text-center"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] bg-tertiary/10 rounded-full blur-[160px]"></div>
                <div className="absolute bottom-0 right-10 size-[300px] bg-primary/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container max-w-5xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
                {/* Header */}
                <div className="space-y-4">
                    <div className="inline-block px-5 py-1.5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-widest shadow-md">
                        Video Gilko
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-white leading-tight">
                        Eksplorasi Kehidupan di <span className="text-tertiary italic">Gilko Cattery</span>
                    </h2>
                    <p className="text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
                        Saksikan kelucuan, kenyamanan, dan perawatan premium yang kami berikan untuk memastikan setiap kitten tumbuh sehat dan bahagia.
                    </p>
                </div>

                {/* Cinematic Video Wrapper */}
                <div className="relative aspect-4/3 lg:aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black/40 group">
                    <iframe
                        ref={iframeRef}
                        src="https://www.youtube.com/embed/CLRjXkrp5G8?enablejsapi=1&mute=1&controls=1&rel=0&loop=1&playlist=CLRjXkrp5G8"
                        title="Gilko Cattery Featured Video"
                        className="w-full h-full object-cover"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* Mute/Unmute Overlay Control Button
                    <button 
                        onClick={toggleMute}
                        className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white font-bold text-xs transition-all active:scale-95 shadow-lg hover:scale-105"
                    >
                        {isMuted ? (
                            <>
                                <svg className="size-4 text-tertiary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
                                </svg>
                                Aktifkan Suara
                            </>
                        ) : (
                            <>
                                <svg className="size-4 text-tertiary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                                </svg>
                                Senapkan
                            </>
                        )}
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default FeaturedVideo;
