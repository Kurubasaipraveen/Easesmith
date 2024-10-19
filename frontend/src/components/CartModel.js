import React from 'react';
import '../styles/cartmodel.css'; // Import your modal CSS here

const CartModal = ({ product, onClose, onConfirm,onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add to Cart</h2>
        <img src={product.imageUrl} alt={product.name} className="modal-image" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Original Price: <span className="original-price">₹ {product.originalPrice}</span></p>
        <p>Discounted Price: <span className="discounted-price">₹ {product.discountedPrice}</span></p>
        
        <div className="modal-actions">
          <button onClick={onAddToCart} className="confirm-btn">Confirm</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
