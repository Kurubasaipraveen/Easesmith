import React from 'react';
import '../styles/cartmodel.css'; 

const CartModal = ({ product, onClose }) => {
  if (!product) return null;
  // in this add produce card to the local strorage when user click on the confirm other wise not 
  const onAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; 
    cartItems.push(product); 
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add to Cart</h2>
        <img src={product.imageUrl} alt={product.name} className="modal-image" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>
          Original Price: <span className="original-price">₹ {product.originalPrice}</span>
        </p>
        <p>
          Discounted Price: <span className="discounted-price">₹ {product.discountedPrice}</span>
        </p>
        
        <div className="modal-actions">
          <button onClick={onAddToCart} className="confirm-btn">Confirm</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
