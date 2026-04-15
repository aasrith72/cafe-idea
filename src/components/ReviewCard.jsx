import React from 'react';

export default function ReviewCard({ text, avatar, name, role }) {
  return (
    <div className="p-[2.5rem_2rem] border border-[#C9944A]/15 bg-[#FDF6EC] relative shadow-[0_10px_30px_rgba(44,24,16,0.08)] hover:shadow-[0_20px_50px_rgba(44,24,16,0.12)] transition-all duration-300 hover:-translate-y-[6px]">
      <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-light text-[#C9944A] leading-[0.5] mb-[1.5rem] opacity-60">"</div>
      <p className="text-[0.95rem] text-[#7a5c4a] leading-[1.85] italic mb-[1.5rem]">{text}</p>
      <div className="text-[#C9944A] text-[0.85rem] tracking-[0.1em] mb-[1rem]">★★★★★</div>
      <div className="flex items-center gap-[0.8rem]">
        <img src={avatar} alt={name} className="w-[42px] h-[42px] rounded-full object-cover" />
        <div>
          <div className="font-medium text-[0.88rem] text-[#2C1810]">{name}</div>
          <div className="text-[0.75rem] text-[#7a5c4a]">{role}</div>
        </div>
      </div>
    </div>
  );
}
