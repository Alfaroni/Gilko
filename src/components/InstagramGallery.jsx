import React, { useState, useEffect } from 'react';
import gal1 from '../assets/12.png';
import gal2 from '../assets/13.png';
import gal3 from '../assets/15.png';
import gal4 from '../assets/16.png';
import gal5 from '../assets/17.png';
import gal6 from '../assets/18.png';
import gal7 from '../assets/19.png';
import gal8 from '../assets/11.png';

const InstagramGallery = () => {
    const images = [
        gal1,
        gal2,
        gal3,
        gal4,
        gal5,
        gal6,
        gal7,
        gal8,
    ];

    return (
        <section id="instagram-gallery" className="py-12 lg:py-24 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section */}
                <div className="flex gap-4 items-end text-left md:flex-row flex-col justify-between mb-12">
                    <div className='space-y-4 w-full flex-1'>
                        <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-tertiary"></span>
                            Visual
                        </h3>
                        <h2 className="text-2xl lg:text-4xl font-heading font-black text-primary leading-tight">
                            Galeri Instagram <span className='text-tertiary'>Gilko</span>
                        </h2>
                    </div>
                    <a
                        href="https://www.instagram.com/gilkocattery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-primary/60 font-bold hover:text-tertiary transition-all text-sm"
                    >
                        Follow on Instagram
                        <div className="bg-tertiary size-10 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rotate-[-45deg] shadow-lg shadow-tertiary/20">
                            <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                            </svg>
                        </div>
                    </a>
                </div>

                {/* Specific Layout Grid */}
                <div className="space-y-4">
                    <div className='grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 auto-rows-[300px] md:auto-rows-auto md:h-[780px]'>
                        {[
                            { span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1', img: images[0] },
                            { span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2', img: images[1] },
                            { span: 'col-span-2 row-span-1 md:col-span-3 md:row-span-1', img: images[3] },
                            { span: 'col-span-2 row-span-1 md:col-span-1 md:row-span-1', img: images[2] },
                            { span: 'col-span-2 row-span-1 md:col-span-3 md:row-span-1', img: images[4] },
                            { span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1', img: images[5] },
                            { span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1', img: images[6] },
                            { span: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1', img: images[7] },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href="https://www.instagram.com/gilkocattery/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${item.span} group relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-sm transition-all duration-500`}
                            >
                                {/* Static Image */}
                                <img
                                    src={item.img}
                                    alt={`Gilko Gallery ${idx + 1}`}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
                                />

                                {/* Hover Overlay - "Lihat IG" */}
                                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                                    <div className="bg-white/90 p-3 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 delay-75">
                                        <svg className="size-5 text-tertiary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        Lihat IG
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramGallery;
