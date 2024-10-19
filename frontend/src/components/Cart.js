import React from 'react';
import '../styles/Cart.css'; 
import { useNavigate } from 'react-router-dom';
const Cart = ({ cart = [], onClose }) => { 
    const totalPrice = cart.reduce((acc, item) => acc + item.discountedPrice, 0);
    const navigate=useNavigate()
    const onClosebtn=()=>{
        navigate('/')
    }
    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            <button onClick={onClosebtn} className="close-cart-btn" aria-label="Close cart">Close</button>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹ {item.discountedPrice}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ₹ {totalPrice}</h3>
                    <button className="checkout-btn">Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
