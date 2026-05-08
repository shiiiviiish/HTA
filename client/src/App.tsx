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
              <Route path="/exhibition/:id" element={<ExhibitionPage />} />
              <Route path="/art" element={<ArtPage />} />
              <Route path="/stationery" element={<StationeryPage />} />
              <Route path="/decor" element={<DecorPage />} />
              <Route path="/gifts" element={<GiftsPage />} />
              
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5DD61' }}>
                  <div className="text-center p-8 max-w-md mx-auto">
                    <div className="text-6xl mb-4">😅</div>
                    <h1 className="text-3xl font-serif text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
                    <Link
                      to="/"
                      className="inline-block text-white px-8 py-3 rounded-full font-semibold"
                      style={{ backgroundColor: '#F4538A' }}
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              } />
            
            </Routes>
          </main>
          <Footer />
        </div>
        <KavyaMessage />

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