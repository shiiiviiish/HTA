import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{backgroundColor: '#59D5E0'}}>
        <h1 className="text-5xl font-serif mb-4 text-white">Get in Touch</h1>
        <p className="text-lg text-white">We'd love to hear from you!</p>
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-serif mb-8">Contact Kavya</h2>

            <div className="flex flex-col gap-6">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl" style={{backgroundColor: '#F5DD61'}}>
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-gray-600 text-sm">Chat directly with Kavya</p>
                </div>
              </a>

              <a href="mailto:kavya@happinessthroughart.com" className="flex items-center gap-4 p-4 rounded-2xl" style={{backgroundColor: '#FAA300'}}>
                <span className="text-3xl">📧</span>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-600 text-sm">kavya@happinessthroughart.com</p>
                </div>
              </a>

              <a href="https://www.instagram.com/happinessthroughart" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl" style={{backgroundColor: '#F4538A'}}>
                <span className="text-3xl">📸</span>
                <div>
                  <p className="font-bold text-white">Instagram</p>
                  <p className="text-white text-sm">Follow Kavya's art journey</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-8">Send a Message</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <button
                className="w-full py-3 rounded-xl text-white font-medium"
                style={{backgroundColor: '#59D5E0'}}
              >
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactPage;