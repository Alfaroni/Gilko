import React from 'react';
import irbisImg from '../assets/irbis.jpeg';
import tysonImg from '../assets/tyson.jpeg';

const Bloodline = () => {
    return (
        <section id="bloodline" className="py-20 lg:py-32 bg-tertiary/5 relative overflow-hidden text-primary">
            {/* Background Paws Decorations */}
            <div className="absolute top-20 right-10 opacity-[0.07] pointer-events-none fill-primary hidden md:block">
                <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7394 19.3073C28.7698 19.2984 28.7698 19.2984 28.8008 19.2894C29.5641 19.0672 30.3622 18.8789 31.1569 18.8216C31.2397 18.8141 31.3214 18.8017 31.4036 18.7891C31.7278 18.7405 32.052 18.7258 32.3794 18.7205C32.4355 18.7194 32.4915 18.7178 32.5476 18.7161C32.7911 18.7087 33.0318 18.7115 33.2749 18.7244C33.2937 18.7254 33.2937 18.7254 33.313 18.7263C33.3467 18.7281 33.3804 18.7301 33.4142 18.732C33.4726 18.7346 33.5304 18.7329 33.5888 18.7309C33.7125 18.7274 33.8343 18.7352 33.9575 18.7448C33.9746 18.7461 33.9746 18.7461 33.992 18.7475C34.1807 18.7618 34.3678 18.783 34.5551 18.8095C34.6286 18.8196 34.7023 18.8282 34.776 18.8369C34.8929 18.8507 35.0097 18.8656 35.1263 18.8816C35.1987 18.8914 35.271 18.8989 35.3438 18.9055C35.4424 18.9154 35.5376 18.9349 35.634 18.9574C35.7271 18.979 35.8205 18.995 35.915 19.0097C36.1168 19.0429 36.3173 19.0845 36.517 19.1287C36.5661 19.1395 36.6152 19.1496 36.6645 19.1592C36.8181 19.1892 36.9708 19.22 37.1212 19.2633C37.1651 19.2743 37.2085 19.2831 37.2529 19.2914C37.3592 19.3123 37.4633 19.3396 37.5679 19.3677C37.5977 19.3757 37.5977 19.3757 37.6282 19.3838C37.6699 19.395 37.7117 19.4063 37.7535 19.4175C37.817 19.4346 37.8806 19.4516 37.9442 19.4685C37.985 19.4794 38.0258 19.4904 38.0666 19.5014C38.0854 19.5064 38.1042 19.5114 38.1235 19.5165C38.2227 19.5433 38.3202 19.5726 38.4171 19.6067C38.4755 19.627 38.5346 19.6446 38.5937 19.6626C38.711 19.6986 38.8268 19.738 38.9424 19.7793C39.0167 19.8058 39.0913 19.8311 39.1665 19.855C39.2605 19.8852 39.3525 19.9192 39.4446 19.9546C39.5071 19.9784 39.5699 20.0011 39.6327 20.0237C39.7281 20.0587 39.8204 20.0975 39.9128 20.1397C39.9929 20.175 40.0741 20.2075 40.1554 20.2401C40.2783 20.2896 40.3997 20.3411 40.5199 20.3968C40.5895 20.4291 40.6597 20.4594 40.7306 20.4889C40.966 20.5885 41.2056 20.7009 41.4209 20.8393C41.4944 20.8848 41.5698 20.9235 41.6477 20.9605C41.9723 21.1169 42.2747 21.319 42.5769 21.5141C42.6462 21.5588 42.7159 21.6026 42.7862 21.6456C42.9612 21.7524 43.1208 21.8767 43.2795 22.0061C43.3325 22.0492 43.3859 22.0918 43.4394 22.1342C43.4562 22.1475 43.473 22.1608 43.4904 22.1746C43.5344 22.2089 43.5798 22.2408 43.6257 22.2726C43.7447 22.3573 43.8543 22.4531 43.9647 22.5485C43.9818 22.5633 43.9818 22.5633 43.9992 22.5783C44.0787 22.647 44.1579 22.716 44.2369 22.7853C44.246 22.7933 44.2551 22.8013 44.2644 22.8095C44.7209 23.2111 45.144 23.6574 45.5323 24.1251C45.5476 24.1433 45.5476 24.1433 45.5633 24.1619C45.632 24.2441 45.6966 24.3288 45.76 24.4152C45.7723 24.4316 45.7845 24.4481 45.7971 24.4651C46.2595 25.0945 46.6722 25.8035 46.9769 26.5229C46.9838 26.5392 46.9838 26.5392 46.9909 26.5558C47.2059 27.0647 47.3699 27.5959 47.4865 28.1357C47.492 28.1605 47.4974 28.1854 47.5029 28.2102C47.5811 28.5671 47.6451 28.9224 47.686 29.2857C47.6905 29.3252 47.6951 29.3647 47.6998 29.4042C47.7764 30.0508 47.8213 30.7076 47.7265 31.355C47.7192 31.405 47.7125 31.455 47.7059 31.505C47.7028 31.5287 47.6996 31.5524 47.6963 31.5761C47.6867 31.6471 47.6792 31.7181 47.6727 31.7894C47.6366 32.1352 47.5481 32.4807 47.4338 32.8084C47.4082 32.8838 47.3864 32.9603 47.364 33.0366C47.2504 33.4173 47.1074 33.7767 46.9354 34.1347C46.9167 34.1748 46.898 34.2148 46.8793 34.2549C46.5551 34.9385 46.1582 35.5796 45.6612 36.1506C45.6206 36.1973 45.5804 36.2443 45.5403 36.2914C44.9404 36.9891 44.2111 37.5798 43.4142 38.0383C43.4022 38.0451 43.3902 38.052 43.3779 38.0591C42.4133 38.6128 41.3443 38.984 40.2578 39.2139C40.1769 39.2312 40.0974 39.2516 40.0176 39.2737C39.8915 39.3082 39.7652 39.3343 39.6366 39.3573C39.625 39.3594 39.6134 39.3615 39.6014 39.3637C39.154 39.4449 38.7049 39.52 38.2537 39.5761C38.2421 39.5776 38.2306 39.579 38.2188 39.5805C38.1109 39.5939 38.0029 39.607 37.8949 39.6197C36.8154 39.747 35.8672 40.0893 35.0886 40.874C35.075 40.8877 35.0614 40.9014 35.0474 40.9155C35.0066 40.9566 34.9661 40.998 34.9258 41.0396C34.9137 41.0519 34.9016 41.0643 34.8892 41.077C34.805 41.1652 34.7352 41.2587 34.666 41.3589C34.6416 41.3935 34.6172 41.428 34.5927 41.4626C34.5452 41.5296 34.498 41.5968 34.4507 41.6639C34.4406 41.6782 34.4306 41.6924 34.4202 41.7071C34.2994 41.8787 34.1794 42.0508 34.0618 42.2247C33.9532 42.385 33.8421 42.5435 33.7297 42.7012C33.7222 42.7118 33.7146 42.7224 33.7068 42.7334C33.6291 42.8426 33.5501 42.9504 33.4665 43.0552C33.3849 43.1575 33.3097 43.2635 33.2356 43.3714C33.2023 43.4198 33.1688 43.4679 33.1352 43.5161C33.1216 43.5357 33.1081 43.5552 33.0945 43.5747C32.7972 44.0025 32.4956 44.4269 32.1802 44.8416C32.1669 44.8592 32.1669 44.8592 32.1533 44.8771C32.0746 44.9805 31.9921 45.0796 31.9054 45.1764C31.8303 45.2606 31.7562 45.3455 31.683 45.4313C31.1418 46.0647 30.5287 46.6981 29.8038 47.121C29.7885 47.1299 29.7733 47.1388 29.7576 47.148C29.7255 47.1668 29.6933 47.1855 29.6611 47.2041C29.6132 47.232 29.5655 47.2602 29.5178 47.2883C29.2241 47.4599 28.918 47.5942 28.5943 47.6986C28.5737 47.7053 28.5531 47.712 28.5318 47.7189C28.3612 47.7734 28.191 47.8168 28.0148 47.8487C28.0003 47.8515 27.9858 47.8542 27.9708 47.857C27.6982 47.9081 27.425 47.9306 27.1484 47.9474C27.1333 47.9485 27.1182 47.9495 27.1026 47.9506C26.7247 47.9768 26.3429 47.9381 25.9687 47.8859C25.9485 47.8832 25.9283 47.8805 25.9076 47.8777C25.8131 47.8643 25.7207 47.8466 25.6277 47.8255C25.5331 47.8042 25.4394 47.7889 25.3434 47.7764C25.2206 47.7602 25.1046 47.7333 24.9856 47.6992C24.9383 47.6862 24.8926 47.6761 24.8443 47.6681C24.7744 47.6561 24.71 47.6349 24.6432 47.6111C24.5919 47.593 24.5402 47.5764 24.4883 47.56C24.3925 47.529 24.2987 47.4943 24.2048 47.4581C24.161 47.4416 24.1173 47.426 24.073 47.411C22.7806 46.9747 21.6061 46.0646 20.1265 44.2966C20.1105 44.2738 20.0943 44.2512 20.0781 44.2286C19.9949 44.1112 19.921 43.9891 19.8485 43.8649C19.8421 43.8541 19.8358 43.8433 19.8293 43.8321C19.7811 43.7501 19.7333 43.6678 19.6857 43.5855C19.6787 43.5734 19.6717 43.5613 19.6644 43.5489C19.3426 42.9931 19.054 42.4288 18.8518 41.8175C18.846 41.8004 18.8402 41.7833 18.8343 41.7657C18.6654 41.2634 18.5498 40.7357 18.4673 40.2128C18.4642 40.193 18.461 40.1733 18.4577 40.1529C18.4063 39.8293 18.3639 39.5047 18.3238 39.1795C18.3163 39.1201 18.3085 39.0607 18.3006 39.0014C18.2858 38.8875 18.2744 38.7734 18.2641 38.659C18.2621 38.6376 18.2602 38.6163 18.2582 38.5943C18.1805 37.7149 18.16 36.8234 18.1993 35.9413C18.2002 35.9208 18.201 35.9003 18.202 35.8792C18.2078 35.7587 18.2181 35.6392 18.2314 35.5193C18.2377 35.4621 18.2421 35.405 18.2454 35.3476C18.2467 35.3267 18.2479 35.3059 18.2493 35.2844C18.2512 35.2514 18.2512 35.2514 18.2532 35.2176C18.2715 34.907 18.2954 34.5988 18.3446 34.2913C18.3589 34.2015 18.3693 34.1114 18.3798 34.021C18.4048 33.815 18.4373 33.6101 18.4715 33.4054C18.4779 33.3657 18.4843 33.3261 18.4907 33.2864C18.5114 33.1601 18.5339 33.0342 18.5571 32.9083C18.564 32.8702 18.5708 32.832 18.5777 32.7939C18.6059 32.6376 18.6387 32.4828 18.6752 32.3282C18.6925 32.2552 18.7089 32.1824 18.7227 32.1086C18.7379 32.028 18.7593 31.9496 18.7817 31.8707C18.7934 31.8246 18.8029 31.7794 18.8116 31.7327C18.8335 31.621 18.8626 31.5115 18.8922 31.4016C18.898 31.3801 18.9037 31.3587 18.9096 31.3366C18.9217 31.2914 18.9338 31.2463 18.946 31.2011C18.9614 31.1438 18.9767 31.0864 18.992 31.0291C19.0068 30.9736 19.0217 30.9182 19.0366 30.8628C19.042 30.8425 19.0474 30.8221 19.053 30.8012C19.081 30.6976 19.1112 30.5956 19.1469 30.4944C19.1618 30.4514 19.1737 30.4081 19.1846 30.364C19.2042 30.2891 19.2273 30.2165 19.2529 30.1434C19.2694 30.095 19.2847 30.0463 19.2997 29.9975C19.3354 29.8818 19.3748 29.7686 19.4186 29.6557C19.4464 29.5817 19.4718 29.507 19.4972 29.4321C19.5427 29.299 19.5936 29.1693 19.6485 29.0398C19.6717 28.9845 19.6939 28.9289 19.7162 28.8734C19.7876 28.696 19.8627 28.5206 19.9399 28.3457C19.9704 28.2766 20.0001 28.2071 20.0294 28.1374C20.2386 27.6455 20.2386 27.6455 20.3574 27.4538C20.4409 27.3173 20.507 27.1702 20.5759 27.026C20.8325 26.4934 21.1385 25.98 21.4421 25.4731C21.4996 25.377 21.5561 25.2804 21.6123 25.1836C21.7508 24.9456 21.8896 24.7087 22.0439 24.4806C22.0725 24.4381 22.1008 24.3954 22.129 24.3528C22.2807 24.1253 22.4435 23.9098 22.6165 23.6983C22.6639 23.6403 22.7109 23.5821 22.7579 23.5239C23.0268 23.1912 23.3008 22.8645 23.5878 22.5473C23.6299 22.5008 23.6714 22.4539 23.7129 22.4069C24.7566 21.2287 26.0003 20.3499 28.7394 19.3073Z" />
                </svg>
            </div>

            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-24 space-y-4">
                    <div className="inline-block px-5 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                        Bloodline Terbaik
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-heading font-black text-primary tracking-tight">
                        Sire / Pejantan <span className="italic text-tertiary">GILKO</span>
                    </h2>
                </div>

                <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                    {/* Center Decorative Line */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0 flex-col items-center justify-center pointer-events-none">
                        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
                    </div>

                    {/* IRBIS CARD */}
                    <BloodCard 
                        name="IRBIS"
                        title="Grand International Champion"
                        image={irbisImg}
                        origin="Rusia (Imported)"
                        color="Cinnamon Solid"
                        emsCode="BSH o"
                        bloodType="A"
                        floatingText="Terpilih sebagai indukan utama kami dengan anatomi tubuh standar internasional."
                        floatingTitle="TERBAIK."
                        cardSide="left"
                    />

                    {/* TYSON CARD */}
                    <BloodCard 
                        name="TYSON"
                        title="International Champion"
                        image={tysonImg}
                        origin="Indonesia ( Anak Irbis )"
                        color="Red & White"
                        emsCode="BSH d03"
                        bloodType="A"
                        floatingText="Terpilih sebagai indukan utama kami dengan anatomi tubuh standar internasional"
                        floatingTitle="TERBAIK."
                        cardSide="right"
                    />
                </div>

                {/* Footer Badges & Bottom Call to Action */}
                <div className="mt-20 lg:mt-28 text-center space-y-12">
                    <div className="flex justify-center items-start gap-4 md:gap-12">
                        <div className="text-center">
                            <span className="font-heading font-black text-xl md:text-4xl text-primary block leading-none">WCF</span>
                            <span className="text-xs uppercase font-bold text-primary/60 tracking-wider">Sertifikat Resmi</span>
                        </div>
                        <div className="w-px  bg-primary/10"></div>
                        <div className="text-center">
                            <span className="font-heading font-black text-xl md:text-4xl text-primary block leading-none">100%</span>
                            <span className="text-xs uppercase font-bold text-primary/60 tracking-wider">Sehat</span>
                        </div>
                        <div className="w-px  bg-primary/10"></div>
                        <div className="text-center">
                            <span className="font-heading font-black text-xl md:text-4xl text-primary block leading-none">ICA</span>
                            <span className="text-xs uppercase font-bold text-primary/60 tracking-wider">Sertifikat Resmi</span>
                        </div>
                    </div>

                    <div className="flex justify-center pt-4">
                        

                         <a
                            href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20saya%20ingin%20bertanya%20mengenai%20adopsi%20kitten."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white text-primary pl-6 p-2 border border-primary/5  rounded-full hover:text-secondary hover:bg-tertiary transition-all shadow-xl shadow-black/5 hover:-translate-y-1 hover:scale-105  flex items-center gap-3"
                        >
                             Konsultasi lebih di sini
                            <div className="bg-tertiary size-8 rounded-full flex items-center justify-center transition-all text-white group-hover:bg-white group-hover:text-tertiary group-hover:translate-x-1 rotate-[-45deg]">
                                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Reusable Card Component
const BloodCard = ({ name, title, image, origin, color, emsCode, bloodType, floatingText, floatingTitle, cardSide }) => {
    const isLeft = cardSide === 'left';
    
    return (
        <div className={`relative group ${!isLeft ? 'lg:mt-24' : ''}`}>
             {/* Top overlay badge: Verified Pedigree */}
                <div className={`absolute top-6 lg:top-12 ${isLeft ? 'right-6 lg:-right-6' : 'left-6 lg:-left-6'} z-10`}>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-primary shadow-lg">
                        <svg className="size-2.5 text-green-500 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Pedigree
                    </span>
                </div>
            {/* Image Card Container */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden  border border-primary/5 shadow-2xl bg-white transition-all duration-500">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* Cinematic shadow overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                

                {/* Floating Description Overlay Card */}
                <div className={`absolute top-6 ${isLeft ? 'left-6' : 'right-6'} z-20 w-[180px] md:w-[210px] hidden lg:block  bg-black/60 backdrop-blur-md text-white border border-white/10 p-4 rounded-[1.5rem] shadow-2xl`}>
                    <div className="text-[11px] font-black tracking-widest text-tertiary uppercase mb-1">{floatingTitle}</div>
                    <p className="text-[9px] leading-relaxed uppercase tracking-tight text-white/90 font-bold">
                        {floatingText}
                    </p>
                </div>

                {/* Bottom Overlay Title & Subtitle */}
                <div className="absolute bottom-6 inset-x-6 z-10 text-white">
                    <span className="inline-flex items-center gap-1.5 text-tertiary font-bold  text-xs lg:text-base uppercase mb-1">
                        <svg className='shrink-0 size-6' width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.746 1.34513C13.8035 1.2406 13.8881 1.15344 13.9908 1.09273C14.0935 1.03202 14.2107 1 14.33 1C14.4493 1 14.5664 1.03202 14.6692 1.09273C14.7719 1.15344 14.8564 1.2406 14.914 1.34513L18.85 8.81713C18.9439 8.99014 19.0749 9.14023 19.2336 9.25662C19.3923 9.373 19.5749 9.4528 19.7681 9.49027C19.9614 9.52775 20.1605 9.52197 20.3512 9.47336C20.542 9.42475 20.7196 9.33451 20.8713 9.20912L26.574 4.32379C26.6835 4.23475 26.8184 4.18275 26.9593 4.17526C27.1002 4.16777 27.2398 4.20519 27.3581 4.28212C27.4764 4.35905 27.5672 4.47154 27.6175 4.60338C27.6678 4.73522 27.675 4.87962 27.638 5.01579L23.8593 18.6771C23.7822 18.9567 23.616 19.2035 23.386 19.3801C23.156 19.5567 22.8746 19.6535 22.5847 19.6558H6.07666C5.78644 19.6538 5.50481 19.5571 5.27451 19.3805C5.04422 19.2038 4.87785 18.9569 4.80066 18.6771L1.02333 5.01713C0.986326 4.88095 0.993488 4.73655 1.04378 4.60471C1.09407 4.47287 1.1849 4.36039 1.30319 4.28345C1.42148 4.20652 1.56114 4.1691 1.70205 4.17659C1.84296 4.18408 1.97786 4.23609 2.08733 4.32513L7.78866 9.21046C7.94039 9.33585 8.118 9.42609 8.30874 9.4747C8.49948 9.5233 8.69862 9.52908 8.89186 9.4916C9.0851 9.45413 9.26764 9.37433 9.42638 9.25795C9.58512 9.14156 9.71613 8.99148 9.80999 8.81846L13.746 1.34513Z" fill="currentColor"/>
<path d="M4.99666 24.9905H23.6633M13.746 1.34513C13.8035 1.2406 13.8881 1.15344 13.9908 1.09273C14.0935 1.03202 14.2107 1 14.33 1C14.4493 1 14.5664 1.03202 14.6692 1.09273C14.7719 1.15344 14.8564 1.2406 14.914 1.34513L18.85 8.81713C18.9439 8.99014 19.0749 9.14023 19.2336 9.25662C19.3923 9.373 19.5749 9.4528 19.7681 9.49027C19.9614 9.52775 20.1605 9.52197 20.3512 9.47336C20.542 9.42475 20.7196 9.33451 20.8713 9.20913L26.574 4.32379C26.6835 4.23475 26.8184 4.18275 26.9593 4.17526C27.1002 4.16777 27.2398 4.20519 27.3581 4.28212C27.4764 4.35905 27.5672 4.47154 27.6175 4.60338C27.6678 4.73522 27.675 4.87962 27.638 5.01579L23.8593 18.6771C23.7822 18.9567 23.616 19.2035 23.386 19.3801C23.156 19.5567 22.8746 19.6535 22.5847 19.6558H6.07666C5.78644 19.6538 5.50481 19.5571 5.27451 19.3805C5.04422 19.2038 4.87785 18.9569 4.80066 18.6771L1.02333 5.01713C0.986326 4.88095 0.993488 4.73655 1.04378 4.60471C1.09407 4.47287 1.1849 4.36039 1.30319 4.28345C1.42148 4.20652 1.56114 4.1691 1.70205 4.17659C1.84296 4.18408 1.97786 4.23609 2.08733 4.32513L7.78866 9.21046C7.94039 9.33585 8.118 9.42609 8.30874 9.4747C8.49948 9.5233 8.69862 9.52908 8.89186 9.4916C9.0851 9.45413 9.26764 9.37433 9.42638 9.25795C9.58512 9.14156 9.71613 8.99148 9.80999 8.81846L13.746 1.34513Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 {title}
                    </span>
                    <h3 className="text-6xl lg:text-7xl font-heading font-black tracking-tight uppercase leading-none">{name}</h3>
                </div>
            </div>

            {/* Specifications Section under the Image */}
            <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-primary uppercase tracking-wider">Asal Lahir</span>
                    <span className="font-bold text-primary/80">{origin}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-primary uppercase tracking-wider">Warna</span>
                    <span className="font-bold text-primary/80">{color}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-primary uppercase tracking-wider">Kode EMS</span>
                    <span className="font-mono font-bold text-primary/80">{emsCode}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-primary uppercase tracking-wider">Golongan Darah</span>
                    <span className="font-bold text-primary/80">{bloodType}</span>
                </div>
                <div className="pt-2">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest shadow-md">
                        Bloodline Terbaik
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Bloodline;