// filepath: c:\Users\sv176\OneDrive\Desktop\happiness_through_art\client\src\App.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ ADDED Link import
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ExhibitionPage from './components/ExhibitionPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <SaleBanner />
          <Header />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />        {/* ✅ ONLY ONE SHOP ROUTE */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/therapy" element={<TherapyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-journey" element={<OurJourney />} />
              <Route path="/exhibition/:id" element={<ExhibitionPage />} />
              
              {/* ✅ 404 Catch-all route - FIXED with Link */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50">
                  <div className="text-center p-8 max-w-md mx-auto">
                    <div className="text-6xl mb-4">😅</div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                    <Link 
                      to="/" 
                      className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      ← Back to Home
                    </Link>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;