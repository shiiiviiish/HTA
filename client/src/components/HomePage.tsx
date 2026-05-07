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


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={100}>
        <ProductGallery />
      </AnimateOnScroll>

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={200}>
        <ProductRow />
      </AnimateOnScroll>

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={300}>
        <CategoriesSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="opacity-100 scale-100" delay={200}>
        <GiftsSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={100}>
        <CollaborationSection />
      </AnimateOnScroll>

     

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={300}>
        <TestimonialsSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={400}>
        <CommunitySection />
      </AnimateOnScroll>
    </div>
  );
};

export default HomePage;