
import React from 'react';
import { SaleBanner } from './SaleBanner';
import { Header } from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif mb-10">Login</h1>
        
        <p className="mb-8 text-gray-700">Please enter your e-mail and password:</p>
        
        <form className="flex flex-col gap-6 max-w-lg">
          <div>
            <input 
              type="email" 
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>
          
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
            <Link to="/forgot-password" className="absolute right-0 top-1/2 -translate-y-1/2 pr-4 text-sm text-gray-500 hover:text-gray-700">
              Forgot password?
            </Link>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors"
          >
            Login
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-700">
              New customer? <Link to="/register" className="text-gray-900 hover:underline">Create an account</Link>
            </p>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default LoginPage;
