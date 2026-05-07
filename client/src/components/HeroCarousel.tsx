import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroImage from '../assets/hero.jpeg';

export function HeroCarousel() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left Content */}
        <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col justify-center" style={{backgroundColor: '#F5DD61'}}>
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{color: '#FAA300'}}>
            By Kavya Atray
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-shrikhand mb-6">
  Every stroke is a Heartbeat of Joy.❤️
</h2>
          <p className="text-lg mb-8 max-w-lg">
            Explore original paintings, handcrafted bookmarks, art prints 
            and more — each piece created with love and intention. 
            Art that heals, inspires, and brings joy to your everyday life.
          </p>
          <button className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full transition-colors w-fit" style={{backgroundColor: '#F4538A'}}>
            Explore Art
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] md:h-auto" style={{backgroundColor: '#59D5E0'}}>
         <img 
            src={heroImage}
            alt="Kavya painting in her studio"
           className="absolute inset-0 w-full h-full object-cover"
          />
          
        </div>
      </div>
    </div>
  );
}