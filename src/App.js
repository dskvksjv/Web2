import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import './App.css';

const Home = () => <h2>Головна</h2>;

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mascara', price: 10.99, selected: false },
    { id: 2, name: 'Lipstick', price: 19.99, selected: false },
  ]);

  const handleCheckboxChange = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId ? { ...product, selected: !product.selected } : product
      );
    });
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Menu />
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductList products={products} onCheckboxChange={handleCheckboxChange} />}
            />
          </Routes>
        </Body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
