import React from 'react';
import '../styles/Thanks.css';
import { useNavigate } from 'react-router-dom';
const ThankYou = ({ onClose }) => {
  const navigate=useNavigate();
  const close=()=>{
    navigate('/')
  }
  return (
    <div className="order-placed-container">
      <div className="order-placed-header">
        <span>Your Cart</span>
        <button className="close-btn" onClick={close}>✕</button>
      </div>
      
      <div className="order-placed-body">
        <h1>Congratulations</h1>
        <h2>Order Placed!</h2>
        
        <img 
          src="https://res.cloudinary.com/dyutmmnia/image/upload/v1729312625/cogkewer4hcv6ns8ccwy.png" 
          alt="Plant"
          className="order-placed-img"
        />

        <p>Thank you for choosing Chaperone services.<br />We will soon get in touch with you!</p>

        <button className="continue-shopping-btn">CONTINUE SHOPPING</button>
      </div>
    </div>
  );
}

export default ThankYou;
