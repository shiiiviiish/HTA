import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`,
        },
      },
    });

    if (error) {
      setErrorMsg(error.message);
      setStatus('error');
    } else {
      setStatus('success');
      setTimeout(() => navigate('/'), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif mb-10">Register</h1>
        <p className="mb-8 text-gray-700">Please fill in the fields below:</p>

        <div className="flex flex-col gap-6 max-w-lg">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
          />

          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
          />

          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
          />

          {status === 'error' && (
            <div className="p-3 rounded-xl text-sm text-center" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
              ❌ {errorMsg}
            </div>
          )}

          {status === 'success' && (
            <div className="p-3 rounded-xl text-sm text-center" style={{ backgroundColor: '#d4edda', color: '#155724' }}>
              ✅ Account created! Redirecting you home...
            </div>
          )}

          <button
            onClick={handleRegister}
            disabled={status === 'loading' || status === 'success'}
            className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors"
            style={{ opacity: status === 'loading' ? 0.7 : 1 }}
          >
            {status === 'loading' ? 'Creating account...' : 'Create account'}
          </button>

          <div className="text-center mt-4">
            <p className="text-gray-700">
              Already have an account?{' '}
              <Link to="/login" className="text-gray-900 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;