import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Thanks from './components/Thanks';
import Cart from './components/Cart'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><ProductList /></Layout>} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
