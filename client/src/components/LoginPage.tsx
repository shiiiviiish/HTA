import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg(error.message);
      setStatus('error');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif mb-10">Login</h1>
        <p className="mb-8 text-gray-700">Please enter your e-mail and password:</p>

        <div className="flex flex-col gap-6 max-w-lg">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
            <Link
              to="/forgot-password"
              className="absolute right-0 top-1/2 -translate-y-1/2 pr-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Forgot password?
            </Link>
          </div>

          {status === 'error' && (
            <div className="p-3 rounded-xl text-sm text-center" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
              ❌ {errorMsg}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={status === 'loading'}
            className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors"
            style={{ opacity: status === 'loading' ? 0.7 : 1 }}
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center mt-4">
            <p className="text-gray-700">
              New customer?{' '}
              <Link to="/register" className="text-gray-900 hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;