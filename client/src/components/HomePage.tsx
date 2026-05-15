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

     

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={300}>
        <TestimonialsSection />
      </AnimateOnScroll>

      
    </div>
  );
};

export default HomePage;
