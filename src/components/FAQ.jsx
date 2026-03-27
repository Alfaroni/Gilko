import React, { useState, useEffect } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5),
                y: (e.clientY / window.innerHeight - 0.5)
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const questions = [
        {
            q: "Bagaimana cara mengadopsi kitten?",
            a: "Kitten biasanya dapat diadopsi ketika sudah cukup umur dan siap secara fisik maupun sosial, umumnya setelah melewati fase awal tumbuh kembang bersama induknya. Pada usia ini, kitten sudah mulai mandiri, aktif, dan lebih siap beradaptasi dengan lingkungan barunya. Kami memastikan setiap kitten dari Gilko berada dalam kondisi sehat sebelum proses adopsi dilakukan."
        },
        {
            q: "Apakah kitten dari Gilko sudah vaksin?",
            a: "Ya. Setiap kitten mendapatkan perawatan kesehatan dasar sesuai dengan tahapan usianya. Kami bekerja sama dengan dokter hewan untuk memastikan kondisi kesehatan kitten terpantau dengan baik sebelum mereka berpindah ke rumah barunya."
        },
        {
            q: "Apakah bisa melihat kitten sebelum melakukan adopsi?",
            a: "Kami memahami bahwa calon adopter ingin mengenal kitten lebih dekat. Informasi mengenai kitten biasanya kami bagikan melalui foto, video, dan update berkala. Untuk detail lebih lanjut mengenai ketersediaan atau proses melihat kitten, Kamu dapat menghubungi kami melalui DM atau kontak yang tersedia."
        },
        {
            q: "Apakah Gilko Cattery adalah breeder resmi?",
            a: "Gilko Cattery dibangun dengan komitmen pada breeding yang bertanggung jawab. Kami menjaga standar pemilihan indukan, kesehatan, serta lingkungan tumbuh kitten agar sesuai dengan praktik breeding yang etis dan dapat dipertanggungjawabkan."
        },
        {
            q: "Apakah kitten cocok untuk keluarga dengan anak?",
            a: "Banyak kitten yang dapat beradaptasi dengan baik dalam lingkungan keluarga. Namun setiap kitten memiliki karakter yang berbeda. Kami biasanya membantu calon adopter memahami karakter kitten sehingga dapat menemukan pasangan yang paling cocok untuk lingkungan rumah dan gaya hidup kamu."
        },
        {
            q: "Apa yang harus disiapkan sebelum mengadopsi kitten?",
            a: "Sebelum membawa pulang kitten, ada beberapa hal yang sebaiknya sudah disiapkan seperti tempat tidur yang nyaman, litter box, makanan yang sesuai, serta area yang aman untuk mereka beradaptasi. Persiapan ini membantu kitten merasa lebih nyaman di rumah barunya sejak hari pertama."
        },
        {
            q: "Apakah Gilko membantu setelah proses adopsi?",
            a: "Tentu! Kami siap membantu memberikan panduan dan konsultasi mengenai perawatan, adaptasi, atau hal lain yang dibutuhkan selama masa awal bersama kitten baru kamu."
        },
        {
            q: "Apakah tersedia pilihan kitten jantan dan betina?",
            a: "Ketersediaan kitten jantan atau betina bergantung pada setiap litter yang lahir. Informasi mengenai kitten yang tersedia biasanya kami update secara berkala melalui media sosial atau dapat ditanyakan langsung melalui kontak kami."
        },
        {
            q: "Apakah kitten dari Gilko sudah litter trained?",
            a: "Sebagian besar kitten yang dibesarkan dalam lingkungan home-raised biasanya sudah mulai terbiasa menggunakan litter box sejak usia dini. Hal ini memudahkan proses adaptasi mereka ketika berada di rumah baru."
        },
        {
            q: "Apakah bisa melakukan reservasi kitten?",
            a: "Ya, proses reservasi dapat dilakukan setelah kitten tersedia dan calon adopter telah mendapatkan informasi lengkap mengenai kitten yang dipilih. Detail mengenai proses reservasi dan ketentuannya akan dijelaskan secara transparan sebelum proses dilakukan."
        }
    ];

    return (
        <section id="faq" className="py-12 lg:py-24 relative">
            
            <div className="container max-w-3xl mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center ">
                    {/* Header */}
                    <div className="space-y-6 mb-16 text-center">

                         <h3 className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs inline-flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-tertiary"></span>
                           Tanya Jawab
                        </h3>
                        <h2 className="text-2xl lg:text-4xl font-heading font-black text-primary leading-tight">
                           Hal yang Sering <br /> Ditanyakan.
                        </h2>
                        <p className="text-primary/60 max-w-lg mx-auto">
                            Masih ada pertanyaan lain yang belum terjawab? <br className="hidden md:block" />
                            Jangan ragu untuk mengobrol dengan kami langsung.
                        </p>
                    </div>

                    {/* Question List */}
                    <div className="w-full space-y-4 mb-16">
                        {questions.map((item, i) => (
                            <div
                                key={i}
                                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${openIndex === i ? 'bg-white border-tertiary/20 shadow-xl shadow-black/5' : 'bg-white/50 border-primary/5 hover:border-primary/10'
                                    }`}
                            >
                                <button
                                    className="w-full text-left py-4 px-6 flex items-center justify-between gap-6"
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                >
                                    <span className={`text-base lg:text-lg font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-primary'}`}>
                                        {item.q}
                                    </span>
                                    <div className={`shrink-0 size-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-primary border-transparent rotate-180' : 'bg-white border-primary/10'
                                        }`}>
                                        <svg className={`size-5 transition-colors ${openIndex === i ? 'text-white' : 'text-primary font-bold'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="py-4 px-6 pb-8 text-primary/60 leading-relaxed font-medium border-t border-primary/5 pt-6">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button instead of Input */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="font-black text-primary text-xl">Masih Bingung?</div>
                        <a
                            href="https://wa.me/628138784422?text=Halo%20Gilko%20Cattery%2C%20ada%20yang%20ingin%20saya%20tanyakan."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white text-primary pl-6 p-2 border border-primary/5  rounded-full hover:text-secondary hover:bg-tertiary transition-all shadow-xl shadow-black/5 hover:-translate-y-1 hover:scale-105  inline-flex items-center gap-3"
                        >
                            Hubungi Kami via WA
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

export default FAQ;
