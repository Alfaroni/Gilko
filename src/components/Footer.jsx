import React from 'react';
import logo from '../assets/gilko.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary/5 pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
                    <div className="lg:col-span-12 flex flex-col items-center text-center space-y-10 mb-10">
                        <img src={logo} alt="Gilko Cattery" className="h-[60px] md:h-[80px] w-auto animate-fade-in" />
                        <p className="text-primary text-xl font-medium max-w-2xl leading-relaxed mx-auto italic">
                            "Mendedikasikan diri untuk menghadirkan kebahagiaan melalui <br className="hidden md:block" /> breeding British Shorthair berkualitas tinggi untuk keluarga Anda."
                        </p>
                    </div>

                    <div className="lg:col-span-4 space-y-8 flex flex-col items-start text-left">
                        <div className="space-y-4">
                            <h5 className="font-black text-primary uppercase tracking-[0.2em] text-xs">Gilko Cattery</h5>
                            <p className="text-primary/60 max-w-sm leading-relaxed font-medium">
                                Premium Cattery bersertifikat resmi di Indonesia (ICA/WCF).
                                Kami mengutamakan kesehatan, karakter, dan kualitas genetik pada setiap kitten kami.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {[
                                { name: 'Instagram', url: 'https://www.instagram.com/gilkocattery/' },
                                { name: 'Shopee', url: 'https://shopee.co.id/' },
                                { name: 'WhatsApp', url: 'https://wa.me/628138784422' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-full border border-primary/10 flex items-center justify-center text-primary font-bold text-sm hover:bg-primary hover:text-white hover:border-transparent transition-all shadow-sm"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-8 flex flex-col items-start md:items-center">
                        <div className="text-left md:text-center space-y-8">
                            <h5 className="font-black text-primary uppercase tracking-[0.2em] text-xs">Navigasi</h5>
                            <ul className="space-y-4 text-primary font-bold text-[15px]">
                                <li><a href="#" className="hover:text-tertiary transition-colors">Beranda</a></li>
                                <li><a href="#about" className="hover:text-tertiary transition-colors">Tentang Kami</a></li>
                                <li><a href="#kittens" className="hover:text-tertiary transition-colors">Kitten Kami</a></li>
                                <li><a href="#shop" className="hover:text-tertiary transition-colors">Kebutuhan Anabul</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8 flex flex-col items-start md:items-center">
                        <div className="text-left md:text-center space-y-8">
                            <h5 className="font-black text-primary uppercase tracking-[0.2em] text-xs">Bantuan</h5>
                            <ul className="space-y-4 text-primary font-bold text-[15px]">
                                <li><a href="#faq" className="hover:text-tertiary transition-colors">Pertanyaan Umum</a></li>
                                <li><a href="#contact" className="hover:text-tertiary transition-colors">Kontak Admin</a></li>
                                <li><a href="#" className="hover:text-tertiary transition-colors">Pusat Informasi</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-8 flex flex-col items-start md:items-end">
                        <div className="text-left md:text-right space-y-4">
                            <h5 className="font-black text-primary uppercase tracking-[0.2em] text-xs">Butuh Bantuan?</h5>
                            <a
                                href="https://wa.me/628138784422"
                                className="inline-flex items-center gap-4 bg-tertiary text-white px-8 py-4 rounded-3xl font-black text-[15px] shadow-2xl shadow-tertiary/20 hover:scale-105 active:scale-95 transition-all"
                            >
                                Tanya Admin di WA
                            </a>
                            <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest pt-2">Gilko Hotline: 0813-8784-422</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-primary/40 font-black uppercase tracking-[0.2em]">
                    <div>© 2026 Gilko Cattery. All rights Reserved.</div>
                    <div className="flex gap-8">
                        <span>Penyedia Kucing Terpercaya</span>
                        <span>Made with ❤️ for Cats</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
