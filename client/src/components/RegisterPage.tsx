import React from 'react';
import { SaleBanner } from './SaleBanner';
import { Header } from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white">

      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif mb-10">Register</h1>
        
        <p className="mb-8 text-gray-700">Please fill in the fields below:</p>
        
        <form className="flex flex-col gap-6 max-w-lg">
          <div>
            <input 
              type="text" 
              placeholder="First name"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>
          
          <div>
            <input 
              type="text" 
              placeholder="Last name"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>
          
          <div>
            <input 
              type="email" 
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors"
          >
            Create account
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-700">
              Already have an account? <Link to="/login" className="text-gray-900 hover:underline">Login</Link>
            </p>
          </div>
        </form>
      </div>

    </div>
  );
};

export default RegisterPage;
