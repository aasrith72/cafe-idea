import React from 'react';

export default function ContactInfoItem({ icon, title, details }) {
  return (
    <div className="flex gap-[1rem] items-start">
      <div className="w-[40px] h-[40px] bg-[#2C1810] text-[#C9944A] flex items-center justify-center text-[0.9rem] shrink-0">{icon}</div>
      <div>
        <strong className="text-[0.8rem] tracking-[0.08em] uppercase text-[#2C1810] block mb-[0.2rem]">{title}</strong>
        <span className="text-[0.88rem] text-[#7a5c4a]">{details}</span>
      </div>
    </div>
  );
}
