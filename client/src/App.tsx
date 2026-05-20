import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';
import { SaleBanner } from './components/SaleBanner';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import TherapyPage from './components/TherapyPage';
import AboutPage from './components/AboutPage';
import OurJourney from './components/OurJourney';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import ExhibitionPage from './components/ExhibitionPage';
import ArtPage from './components/ArtPage';
import StationeryPage from './components/StationeryPage';
import DecorPage from './components/DecorPage';
import GiftsPage from './components/GiftsPage';
import KavyaMessage from './components/KavyaMessage';
import FAQPage from './components/FAQPage';
import TermsPage from './components/TermsPage';
import RefundPage from './components/RefundPage';
import JoeyMascot from './components/JoeyMascot';
import LiveArtPage from './components/LiveArtPage';
import BlogPage from './components/BlogPage';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <SaleBanner />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/therapy" element={<TherapyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-journey" element={<OurJourney />} />
              <Route path="/art" element={<ArtPage />} />
              <Route path="/stationery" element={<StationeryPage />} />
              <Route path="/decor" element={<DecorPage />} />
              <Route path="/gifts" element={<GiftsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/refund" element={<RefundPage />} />
              <Route path="/kavya-picks" element={<GiftsPage />} />
              <Route path="/live-art" element={<LiveArtPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5DD61' }}>
                  <div className="text-center p-8 max-w-md mx-auto">
                    <img
                      src="/images/Joey.gif"
                      alt="Joey"
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-xl"
                      style={{ border: '4px solid #F4538A' }}
                    />
                    <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#FF6B35' }}>
                      Woof! 404
                    </p>
                    <h1 className="text-3xl font-serif mb-3" style={{ color: '#1a1a1a' }}>
                      Even Joey can't find this page!
                    </h1>
                    <p className="text-gray-600 mb-8">
                      Looks like this page wandered off like Joey on a walk. Let's get you back home.
                    </p>
                    <Link
                      to="/"
                      className="inline-block text-white px-8 py-3 rounded-full font-semibold transition-opacity hover:opacity-80"
                      style={{ backgroundColor: '#F4538A' }}
                    >
                      Back to Home 🐾
                    </Link>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>

        <KavyaMessage />
        <JoeyMascot />

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg text-xl"
            style={{ backgroundColor: '#F4538A' }}
          >
            ↑
          </button>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;