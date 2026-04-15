import React from 'react';

export default function GalleryItem({ src, alt, extraClasses = '' }) {
  return (
    <div className={`overflow-hidden group h-[250px] md:h-full ${extraClasses}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover transition-all duration-500 brightness-90 group-hover:scale-105 group-hover:brightness-100" />
    </div>
  );
}
