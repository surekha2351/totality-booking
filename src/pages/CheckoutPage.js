import React, { useState } from 'react';
import '../styles/CheckoutPage.css';

const CheckoutPage = ({ cart }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    paymentDetails: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout submission logic
  };

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="paymentDetails"
          placeholder="Payment Details"
          value={form.paymentDetails}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Complete Booking</button>
      </form>
      <div className="cart-summary">
        <h3>Booking Summary</h3>
        <p>Total Cost: ${totalCost}</p>
        {/* List cart items */}
      </div>
    </div>
  );
};

export default CheckoutPage;
