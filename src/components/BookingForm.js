// src/components/BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ onConfirm }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onConfirm function and pass bookingDetails
    onConfirm(bookingDetails);
    // Navigate to success page after booking is confirmed
    navigate('/success');
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={bookingDetails.name}
          onChange={handleChange}
          required
        /><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={bookingDetails.email}
          onChange={handleChange}
          required
        /><br/>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={bookingDetails.phone}
          onChange={handleChange}
          required
        /><br/>
        <textarea
          name="address"
          placeholder="Address"
          value={bookingDetails.address}
          onChange={handleChange}
          required
        /><br/>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
