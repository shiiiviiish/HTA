import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [discountMsg, setDiscountMsg] = useState('');

  const subtotal = totalPrice;
  const total = subtotal - discount;

  const validCoupons: {[key: string]: number} = {
    'KAVYA10': 10,
    'HAPPY20': 20,
    'ART15': 15,
  };

  const handleApplyDiscount = () => {
    const code = discountCode.toUpperCase();
    if (validCoupons[code]) {
      const percent = validCoupons[code];
      const discountAmount = Math.round(subtotal * percent / 100);
      setDiscount(discountAmount);
      setDiscountMsg(`${percent}% discount applied!`);
    } else {
      setDiscount(0);
      setDiscountMsg('Invalid coupon code');
    }
  };

  const handleWhatsAppOrder = () => {
    if (!name || !phone || !address || !city || !pinCode) {
      alert('Please fill all required fields!');
      return;
    }

    const itemsList = cartItems.map(item =>
      `• ${item.name} (${item.id || ''}) x${item.quantity} = ₹${item.price * item.quantity}`
    ).join('%0A');

    const message =
      `Hi Kavya! I want to place an order:%0A%0A` +
      `${itemsList}%0A%0A` +
      `Subtotal: ₹${subtotal}%0A` +
      (discount > 0 ? `Discount: -₹${discount}%0A` : '') +
      `Total: ₹${total}%0A%0A` +
      `My details:%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Address: ${address}, ${city} - ${pinCode}`;

    clearCart();
    window.open(`https://wa.me/919877591063?text=${message}`, '_blank');
    navigate('/thank-you');
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="lg:w-3/5">
          <h2 className="text-xl font-semibold mb-4">Your Details</h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Full Address *"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City *"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="PIN Code *"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl" style={{backgroundColor: '#F5DD61'}}>
            <h3 className="font-bold mb-2">How ordering works:</h3>
            <p className="text-sm text-gray-700">
              After clicking "Order on WhatsApp", Kavya will receive your order details directly.
              She will confirm availability and share a UPI/GPay payment link. Simple and safe!
            </p>
          </div>
        </div>

        <div className="lg:w-2/5">
          <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="mb-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between mb-3 pb-3 border-b border-gray-200">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                  </div>
                  <p className="font-medium">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Coupon code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
              <button
                onClick={handleApplyDiscount}
                className="px-4 py-3 rounded-lg text-white font-medium"
                style={{backgroundColor: '#FAA300'}}
              >
                Apply
              </button>
            </div>

            {discountMsg && (
              <p className={`text-sm mb-4 ${discount > 0 ? 'text-green-600' : 'text-red-500'}`}>
                {discountMsg}
              </p>
            )}

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              disabled={cartItems.length === 0}
              className="w-full mt-6 py-4 rounded-full text-white font-bold text-lg"
              style={{backgroundColor: cartItems.length === 0 ? '#ccc' : '#25D366'}}
            >
              Order on WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              You'll be redirected to WhatsApp to confirm your order with Kavya
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;