import React from 'react';
import logo from '../assets/gilko-footer.png';

const Footer = () => {
    return (
        <footer className="relative bg-primary pt-24 pb-12 overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col items-start text-left">
                        <div className="space-y-6">
                            <img 
                                src={logo} 
                                alt="Gilko Cattery" 
                                className="h-16 w-auto" 
                            />
                            <p className="text-white/70 max-w-md leading-relaxed  text-sm">
                                Berdedikasi pada pelestarian ras British Shorthair yang berkualitas tinggi. Menghadirkan kucing yang sehat, ceria , tenang ,lucu & menggemaskan untuk menjadi teman hidup di rumah baru kamu.
                            </p>
                        </div>
                        
                        {/* Social Media with Icons */}
                        <div className="flex gap-4">
                            {[
                                { 
                                    name: 'Instagram', 
                                    url: 'https://www.instagram.com/gilkocattery/', 
                                    icon: (
                                        <svg className="size-5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6668 4.33337H11.6735M4.66683 1.33337H11.3335C13.1744 1.33337 14.6668 2.82576 14.6668 4.66671V11.3334C14.6668 13.1743 13.1744 14.6667 11.3335 14.6667H4.66683C2.82588 14.6667 1.3335 13.1743 1.3335 11.3334V4.66671C1.3335 2.82576 2.82588 1.33337 4.66683 1.33337ZM10.6668 7.58004C10.7491 8.13487 10.6543 8.70152 10.396 9.19938C10.1377 9.69725 9.72893 10.101 9.22791 10.3532C8.7269 10.6053 8.15913 10.6931 7.60535 10.604C7.05158 10.5149 6.54 10.2534 6.14339 9.85681C5.74677 9.4602 5.48532 8.94862 5.39621 8.39485C5.3071 7.84108 5.39487 7.2733 5.64705 6.77229C5.89922 6.27128 6.30295 5.86253 6.80082 5.6042C7.29868 5.34587 7.86533 5.2511 8.42016 5.33337C8.98611 5.4173 9.51006 5.68102 9.91462 6.08558C10.3192 6.49014 10.5829 7.01409 10.6668 7.58004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                                    )
                                },
                                { 
                                    name: 'Shopee', 
                                    url: 'https://s.shopee.co.id/6VGowppAzz', 
                                    icon: (
                                        <svg className="size-4" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.41667 6.08333C9.41667 6.79058 9.13572 7.46885 8.63562 7.96895C8.13552 8.46905 7.45724 8.75 6.75 8.75C6.04276 8.75 5.36448 8.46905 4.86438 7.96895C4.36428 7.46885 4.08333 6.79058 4.08333 6.08333M0.818667 3.43933H12.6813M1.01667 3.06133C0.843571 3.29213 0.75 3.57284 0.75 3.86133V12.75C0.75 13.1036 0.890476 13.4428 1.14052 13.6928C1.39057 13.9429 1.72971 14.0833 2.08333 14.0833H11.4167C11.7703 14.0833 12.1094 13.9429 12.3595 13.6928C12.6095 13.4428 12.75 13.1036 12.75 12.75V3.86133C12.75 3.57284 12.6564 3.29213 12.4833 3.06133L11.15 1.28333C11.0258 1.11774 10.8648 0.983334 10.6796 0.890764C10.4945 0.798193 10.2903 0.75 10.0833 0.75H3.41667C3.20967 0.75 3.00552 0.798193 2.82038 0.890764C2.63524 0.983334 2.4742 1.11774 2.35 1.28333L1.01667 3.06133Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                                    )
                                },
                                { 
                                    name: 'WhatsApp', 
                                    url: 'https://wa.me/628138784422', 
                                    icon: (
                                         <svg className="size-4" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0833 2.75L8.08933 6.568C7.88593 6.68614 7.65489 6.74837 7.41967 6.74837C7.18444 6.74837 6.9534 6.68614 6.75 6.568L0.75 2.75M2.08333 0.75H12.75C13.4864 0.75 14.0833 1.34695 14.0833 2.08333V10.0833C14.0833 10.8197 13.4864 11.4167 12.75 11.4167H2.08333C1.34695 11.4167 0.75 10.8197 0.75 10.0833V2.08333C0.75 1.34695 1.34695 0.75 2.08333 0.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                                    )
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="size-12 rounded-full bg-white/10 text-tertiary flex items-center justify-center border border-white/5 hover:bg-tertiary hover:text-white transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg active:scale-95"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="lg:col-span-3 lg:ml-auto">
                        <div className="text-left space-y-8">
                            <h5 className="font-heading font-black text-tertiary uppercase">Navigasi</h5>
                            <ul className="space-y-4 text-white font-bold text-[15px]">
                                <li><a href="#" className="hover:text-tertiary transition-all inline-block">Beranda</a></li>
                                <li><a href="#about" className="hover:text-tertiary transition-all inline-block">Tentang Kami</a></li>
                                <li><a href="#kittens" className="hover:text-tertiary transition-all inline-block">Kitten Kami</a></li>
                                <li><a href="#shop" className="hover:text-tertiary transition-all inline-block">Gilko Shop</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="lg:col-span-4">
                        <div className="text-left space-y-8">
                            <h5 className="font-heading font-black text-tertiary uppercase">Alamat & Kontak</h5>
                            <div className="space-y-6">
                                <div className="flex gap-4 group">
                                    <div className="size-10 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center text-tertiary shadow-sm shrink-0">
                                        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">HQ GILKO CATTERY</p>
                                        <p className="text-sm font-bold text-white leading-relaxed">
                                            Jakarta Selatan, Indonesia <br /> 
                                        </p>
                                        <p className="text-[11px] text-white/50 font-medium">Buka khusus dengan janji temu</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center text-tertiary shadow-sm shrink-0">
                                        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">HUBUNGI KAMI</p>
                                        <p className="text-sm font-bold text-white">0813-8784-422</p>
                                        <p className="text-[11px] text-white/50 font-medium">admin@gilkocattery.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/40 ">
                    <div>© {new Date().getFullYear()} Gilko Cattery. Hak cipta dilindungi undang-undang..</div>
                    <div className="flex gap-8">
                        <span className="hover:text-white transition-colors cursor-default">Penyedia Kitten Terpercaya</span>
                        <span className="hover:text-white transition-colors cursor-default">Made with ❤️ for Cats</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
