// src/pages/SuccessPage.js
import React from 'react';
import '../styles/SuccessPage.css'; // Import CSS for styling

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h2>
        <img 
          src='https://tse3.mm.bing.net/th?id=OIP.TQ0PES3HGa2hHtfxpW_GRQHaDE&pid=Api&P=0&h=180' 
          alt="Success Emoji" 
          className="success-image" 
        />
        Booking Successful🥳!
      </h2>
      <p className='p'>Your booking has been confirmed. Thank you for choosing us!</p>
    </div>
  );
};

export default SuccessPage;
