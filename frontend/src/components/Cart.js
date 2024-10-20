import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css'
const Cart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate=useNavigate()
  const close=()=>{
    navigate('/')
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);
//   Remove from the cart item
  const removeFromCart = (indexToRemove) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="cart-page">
      <div className="space-first">
        <h2>Your Cart</h2>
        <i className="bi bi-x-lg" onClick={close} style={{ cursor: 'pointer' }}></i>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  Original Price: <span className="original-price">₹ {item.originalPrice}</span>
                </p>
                <p>
                  Discounted Price: <span className="discounted-price">₹ {item.discountedPrice}</span>
                </p>
              </div>
              <button className="remove-item-btn" onClick={() => removeFromCart(index)}>
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
