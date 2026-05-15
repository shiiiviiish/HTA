import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I place an order?",
    answer: "You can place an order by clicking the 'Buy on WhatsApp' button on any product or by adding items to your cart and checking out. Kavya will confirm your order and share payment details directly!"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We currently accept UPI, GPay, PhonePe and bank transfers. Payment details will be shared by Kavya once your order is confirmed on WhatsApp."
  },
  {
    question: "How long does delivery take?",
    answer: "Orders are usually dispatched within 2-3 business days. Delivery typically takes 5-7 business days depending on your location across India."
  },
  {
    question: "Do you ship across India?",
    answer: "Yes! We ship to all major cities and towns across India. Shipping charges may vary based on location."
  },
  {
    question: "Can I get a custom order?",
    answer: "Absolutely! Kavya loves creating custom pieces. Reach out on WhatsApp to discuss your custom order requirements, timeline and pricing."
  },
  {
    question: "How do I book a therapy session?",
    answer: "Simply WhatsApp Kavya at +91 9877591063 or visit the Therapy page and click on 'Book a Session'. She will get back to you within 24 hours!"
  },
  {
    question: "Are therapy sessions online or offline?",
    answer: "Kavya offers both online and offline therapy sessions. You can discuss your preference when booking."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 7 days of delivery if the product is damaged or defective. Custom orders and therapy sessions are non-refundable."
  },
  {
    question: "Do you offer bulk or corporate orders?",
    answer: "Yes! We offer special pricing for bulk and corporate orders. Contact Kavya on WhatsApp to discuss your requirements."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, Kavya will share the tracking details directly on WhatsApp."
  },
];

const FAQPage = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-6 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h1 className="text-5xl font-serif mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Everything you need to know about HTA!
        </p>
      </div>

      <div className="py-16 px-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border border-gray-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {faq.question}
              <span className="text-2xl ml-4" style={{color: '#FF6B35'}}>
                {open === index ? '−' : '+'}
              </span>
            </button>
            {open === index && (
              <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100" style={{backgroundColor: '#fdf9f4'}}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="py-12 px-6 text-center" style={{backgroundColor: '#59D5E0'}}>
        <p className="text-white font-medium mb-4">Still have questions?</p>
        <button
  onClick={() => window.open('https://wa.me/919877591063', '_blank')}
  className="px-8 py-3 rounded-full text-white font-medium"
  style={{backgroundColor: '#25D366'}}
>
  Ask Kavya on WhatsApp
</button>
      </div>
    </div>
  );
};

export default FAQPage;