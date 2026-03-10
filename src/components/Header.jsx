import React, { useState, useEffect } from 'react';
import logo from '../assets/gilko.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: '#' },
        { name: 'Tentang Kami', href: '#about', highlight: true },
        { name: 'Galeri', href: '#instagram-gallery' },
        { name: 'Panduan Informasi', href: '#why-choose' },
        { name: 'Testimoni', href: '#testimonial' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
                    <img src={logo} alt="Gilko Cattery" className="h-10 md:h-12 w-auto" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2.5 rounded-full text-primary font-bold text-sm transition-all duration-300 hover:text-tertiary ${link.highlight ? 'bg-secondary/30 shadow-inner' : 'hover:bg-secondary/10'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="ml-4 pl-4 border-l border-primary/10">
                        <a
                            href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten."
                            className="bg-primary text-white px-7 py-3 rounded-full font-black text-sm hover:bg-tertiary hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                        >
                            Tanya Sekarang
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-primary p-2 bg-secondary/20 rounded-xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-primary/98 backdrop-blur-2xl z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-6 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                <button
                    className="absolute top-8 right-8 text-white bg-white/10 p-2 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-white text-3xl font-heading font-black hover:text-tertiary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten."
                    className="mt-6 bg-tertiary text-white px-10 py-5 rounded-full text-xl font-black shadow-2xl shadow-tertiary/20"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Tanya Sekarang
                </a>
            </div>
        </header>
    );
};

export default Header;
