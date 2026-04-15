import React from 'react';

export default function StatItem({ number, label }) {
  return (
    <div className="text-center p-[1rem] md:p-[1.5rem] border border-[#C9944A]/20 bg-[#FDF6EC]">
      <div className="font-['Cormorant_Garamond',serif] text-[1.5rem] md:text-[2rem] font-semibold text-[#C9944A]">{number}</div>
      <div className="text-[0.65rem] md:text-[0.75rem] text-[#7a5c4a] tracking-[0.08em] uppercase mt-[0.3rem]">{label}</div>
    </div>
  );
}
