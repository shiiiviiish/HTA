// filepath: c:\Users\sv176\OneDrive\Desktop\happiness_through_art\client\src\App.tsx
import React from 'react';
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

function App() {
  return (
    <CartProvider>
      <Router>
        <SaleBanner />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/therapy" element={<TherapyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;