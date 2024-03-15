import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
// import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
