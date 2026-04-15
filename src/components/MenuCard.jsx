import React from 'react';

export default function MenuCard({ item }) {
  return (
    <div className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(44,24,16,0.12)] group">
      <div className="overflow-hidden">
        <img src={item.img} alt={item.name} className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-[1.3rem]">
        <div className="text-[0.7rem] tracking-[0.12em] uppercase text-[#C9944A] mb-[0.4rem]">{item.tag}</div>
        <div className="font-['Cormorant_Garamond',serif] text-[1.3rem] font-semibold text-[#2C1810] mb-[0.4rem]">{item.name}</div>
        <div className="text-[0.82rem] text-[#7a5c4a] leading-[1.6] mb-[1rem]">{item.desc}</div>
        <div className="font-['Cormorant_Garamond',serif] text-[1.3rem] font-semibold text-[#C9944A]">{item.price}</div>
      </div>
    </div>
  );
}
