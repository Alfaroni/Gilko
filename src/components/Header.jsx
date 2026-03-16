import React, { useState, useEffect } from 'react';
import logo from '../assets/gilko.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#');

    const navLinks = [
        { name: 'Beranda', href: '#' },
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Galeri', href: '#instagram-gallery' },
        { name: 'Panduan Informasi', href: '#why-choose' },
        { name: 'Testimoni', href: '#testimonial' },
        { name: 'FAQ', href: '#faq' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            if (window.scrollY < 200) {
                setActiveSection('#');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks
            .map(link => link.href)
            .filter(href => href.startsWith('#') && href !== '#')
            .map(href => href.substring(1));

        const observer = new IntersectionObserver((entries) => {
            const visibleSections = entries.filter(entry => entry.isIntersecting);
            if (visibleSections.length > 0) {
                setActiveSection(`#${visibleSections[0].target.id}`);
            }
        }, {
            rootMargin: '-30% 0px -70% 0px',
        });

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setActiveSection(href);

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <>
            <header
                className={`fixed max-w-6xl z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${isScrolled
                        ? 'top-4 w-[calc(100%-2rem)] bg-white/80 backdrop-blur-md shadow-xl border border-white/50 rounded-full py-2 px-4'
                        : 'top-0 w-full bg-transparent border-transparent backdrop-blur-none shadow-none rounded-none py-6 px-4'
                    }`}
            >
                <div className="w-full flex items-center justify-between">
                    <a href="/" className="flex min-w-44 shrink-0 gap-2 group transition-transform hover:scale-105">
                        <img src={logo} alt="Gilko Cattery" className="h-10 w-auto object-contain object-left" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex justify-center items-center flex-1 gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-4 whitespace-nowrap py-3 rounded-full text-primary transition-all duration-300 border  ${activeSection === link.href
                                    ? 'bg-orange-100 shadow-xl shadow-black/5 border-primary/5'
                                    : `border-transparent hover:text-tertiary ${link.highlight ? 'bg-secondary/30 shadow-inner' : 'hover:bg-secondary/10'}`
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="min-w-44 justify-end hidden lg:flex">
                        <a
                            href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten."
                            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-tertiary hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                        >
                            Tanya Sekarang
                        </a>
                    </div>

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
            </header>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-primary/95 backdrop-blur-2xl z-[60] transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-6 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                <button
                    className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full"
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
                        className={`text-xl hover:text-tertiary transition-colors ${activeSection === link.href ? 'text-secondary' : 'text-white'
                            }`}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten."
                    className="bg-tertiary text-white px-8 py-4 rounded-full text-xl shadow-2xl shadow-tertiary/20"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Tanya Sekarang
                </a>
            </div>
        </>
    );
};

export default Header;
