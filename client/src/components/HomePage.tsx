import React from 'react';
import { SaleBanner } from './SaleBanner';
import { Header } from './Header';
import { HeroCarousel } from './HeroCarousel';
import { ProductGallery } from './ProductGallery';
import CategoriesSection from './CategoriesSection';
import GiftsSection from './GiftsSection';
import CollaborationSection from './CollaborationSection';
import TestimonialsSection from './TestimonialsSection';
import CommunitySection from './CommunitySection';
import Footer from './Footer';
import ProductRow from './ProductRow';
import AnimateOnScroll from './AnimateOnScroll';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={100}>
        <Link to="/gifts" className="block w-full py-4 px-6 text-center text-white text-sm font-medium hover:opacity-90 transition-all" style={{ backgroundColor: '#FF6B35' }}>
  💛 If Kavya could gift you — See her top picks!
      </Link>
       <ProductGallery />
      </AnimateOnScroll>

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={200}>
        <ProductRow />
      </AnimateOnScroll>

      
      

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={100}>
        <CollaborationSection />
      </AnimateOnScroll>
      <div className="py-16 px-6 text-center" style={{backgroundColor: '#F5DD61'}}>
  <img
    src="/images/Joey.gif"
    alt="Joey"
    className="w-40 h-40 rounded-full object-cover mx-auto mb-6 shadow-xl"
    style={{border: '4px solid #FAA300'}}
  />
  <h2 className="text-3xl font-serif mb-3" style={{color: '#5C3317'}}>Meet Joey!</h2>
  <p className="text-gray-700 max-w-xl mx-auto">
    Kavya's furry best friend and the unofficial mascot of Happiness Through Art!
    Joey approves every artwork before it leaves the studio. 🐾
  </p>
</div>

     

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={300}>
        <TestimonialsSection />
      </AnimateOnScroll>

      
    </div>
  );
};

export default HomePage;
