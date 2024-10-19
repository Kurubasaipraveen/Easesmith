import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductList.css';
import Filters from './Filter';
import CartPage from './CartModel'; // Make sure this component is correctly implemented

const ProductList = () => {
    const navigate = useNavigate();

    const thankyou = () => {
        navigate('./thanks');
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [cart, setCart] = useState([]); 

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const addToCart = () => {
        if (selectedProduct) {
            setCart((prevCart) => [...prevCart, selectedProduct]); // Add product to cart
            console.log(`${selectedProduct.name} added to cart!`);
        }
        closeModal();
    };

    // Sample product data
    const products = [
        {
          id: 1,
          name: 'Monstera',
          description: 'Indoor Plant, Low maintenance',
          rating: 4.9,
          originalPrice: 359,
          discountedPrice: 299,
          imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png', // Replace with the correct image path
        },
        {
          id: 2,
          name: 'Monstera',
          description: 'Indoor Plant, Low maintenance',
          rating: 4.9,
          originalPrice: 359,
          discountedPrice: 299,
          imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png', // Replace with the correct image path
        },
        {
            id: 3,
            name: 'Monstera',
            description: 'Indoor Plant, Low maintenance',
            rating: 4.9,
            originalPrice: 359,
            discountedPrice: 299,
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png', // Replace with the correct image path
          },
          {
            id: 4,
            name: 'Monstera',
            description: 'Indoor Plant, Low maintenance',
            rating: 4.9,
            originalPrice: 359,
            discountedPrice: 299,
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png', // Replace with the correct image path
          },
          {
            id: 5,
            name: 'Monstera',
            description: 'Indoor Plant, Low maintenance',
            rating: 4.9,
            originalPrice: 359,
            discountedPrice: 299,
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png', // Replace with the correct image path
          },
          {
            id: 6,
            name: 'Monstera',
            description: 'Indoor Plant, Low maintenance',
            rating: 4.9,
            originalPrice: 359,
            discountedPrice: 299,
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png', // Replace with the correct image path
          },
          {
            id: 7,
            name: 'Monstera',
            description: 'Indoor Plant, Low maintenance',
            rating: 4.9,
            originalPrice: 359,
            discountedPrice: 299,
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png', // Replace with the correct image path
          },
          {
            id: 8,
            name: 'Monstera',
            description: 'Indoor Plant, Low maintenance',
            rating: 4.9,
            originalPrice: 359,
            discountedPrice: 299,
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png', // Replace with the correct image path
          },{
            id: 9,
            name: 'Monstera',
            description: 'Indoor Plant, Low maintenance',
            rating: 4.9,
            originalPrice: 359,
            discountedPrice: 299,
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png', // Replace with the correct image path
          },
          
        
      ];
    
      const nurseries = [
        {
          id: 1,
          description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
          imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png', // Replace with the correct image path
        },
        {
          id: 2,
          description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
          imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303120/b57gmhqbvm7tvq4ot7qn.png', // Replace with the correct image path
        },
        {
          id: 3,
          description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
          imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png', // Replace with the correct image path
        },
        {
          id: 4,
          description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
          imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png', // Replace with the correct image path
        },
        {
          id: 5,
          description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
          imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png', // Replace with the correct image path
        },
        {
            id: 6,
            description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png', // Replace with the correct image path
          },
          {
            id: 7,
            description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png', // Replace with the correct image path
          },
          {
            id: 8,
            description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
            imageUrl: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png', // Replace with the correct image path
          },
      ];

    return (
        <section className="product-list">
            <div className='buttons'>
                <button className='first'>Plants</button>
                <button className='second'>Pots</button>
            </div>
            <p>Lorem ipsum dolor sit amet...</p>
            <div className="nursery-section">
                <h2>Nursery</h2>
                <div className="nursery-grid">
                    {nurseries.map((nursery) => (
                        <div key={nursery.id} className="nursery-card">
                            <img src={nursery.imageUrl} alt={nursery.name} />
                            <h3>{nursery.name}</h3>
                            <p>{nursery.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-header">
                <span>{products.length} products</span>
                <select className="sort-by">
                    <option>Sort by</option>
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
            <div className='column-filter-plants'>
                <div className='filter-row'>
                    <Filters />
                </div>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className='border'>
                                <img src={product.imageUrl} alt={product.name} />
                                <button className="view-product-btn" onClick={thankyou}>View Product</button>
                            </div>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="rating">
                                <span>⭐⭐⭐⭐⭐ {product.rating}</span>
                            </div>
                            <div className="price-section">
                                <span className="original-price">₹ {product.originalPrice}</span>
                                <span className="discounted-price">₹ {product.discountedPrice}</span>
                            </div>
                            <div className="action-buttons">
                                <button className="add-to-cart-btn" onClick={() => openModal(product)}>
                                    <i className="bi bi-plus-lg"></i>Add to cart<i className="bi bi-dash-lg"></i>
                                </button>
                                <button className="buy-on-rent-btn">Buy on Rent</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='last-btn'>
                <button className='add-to-cart-btn'>View More</button>
            </div>
            {isModalOpen && (
                <CartPage
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onAddToCart={addToCart}
                />
            )}
        </section>
    );
};

export default ProductList;
