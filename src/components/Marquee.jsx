import React from 'react';

const Marquee = () => {
    const brandingList = [
        { text: "Vaksinasi Lengkap", color: "#f2a154" },
        { text: "Bersetifikat / Pedigree resmi", color: "#FCD34D" },
        { text: "Pengiriman Seluruh Wilayah Indonesia", color: "#d6ccae" },
        { text: "Perawatan Terbaik", color: "#fbbf24" },
        { text: "Dukungan Seumur Hidup", color: "#e5d9b8" },
        { text: "Garansi Kesehatan", color: "#f2a154" },
        { text: "Bloodline Terbaik", color: "#6f4f37" }
    ];

    return (
        <section className="overflow-hidden">
            <div className="w-full relative overflow-hidden py-8  -rotate-1 md:-rotate-2 items-center flex">
                <div className="flex animate-marquee whitespace-nowrap min-w-max">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6 px-3">
                            {brandingList.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white rounded-full shadow-lg shadow-black/5 px-6 py-3 border border-gray-100 transition-transform hover:scale-105 mx-2">
                                    <div className="size-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                                    <span className="font-bold text-primary/80 truncate uppercase tracking-wider text-xs">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
