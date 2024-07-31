// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookingForm from './components/BookingForm';
import SuccessPage from './pages/SuccessPage';
import NavBar from './components/NavBar';
import { auth } from './firebase';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleBookProperty = (property) => {
    const existingProperty = cart.find((item) => item.id === property.id);
    if (existingProperty) {
      setCart(cart.map((item) =>
        item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...property, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (property) => {
    setCart(cart.map((item) =>
      item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (property) => {
    setCart(cart.map((item) =>
      item.id === property.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0));
  };

  const handleRemoveProperty = (property) => {
    setCart(cart.filter((item) => item.id !== property.id));
  };

  const handleConfirmBooking = async (bookingDetails) => {
    try {
      // Example: POST booking data to a backend or Firebase
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingDetails, cart }),
      });

      if (!response.ok) {
        throw new Error('Booking failed!');
      }

      // Clear cart after successful booking
      setCart([]);
      // Optionally, handle other booking logic like updating user data
    } catch (error) {
      console.error('Error confirming booking:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar user={user} />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={
            user ? (
              <HomePage onBook={handleBookProperty} />
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/checkout" element={
            user ? (
              <CheckoutPage
                cart={cart}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
                onRemove={handleRemoveProperty}
              />
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/book/:id" element={
            user ? (
              <BookingForm onConfirm={handleConfirmBooking} />
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
