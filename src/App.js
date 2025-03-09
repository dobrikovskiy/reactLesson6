import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ThemeToggle from './ThemeToggle';
import TemperatureConverter from './TemperatureConverter';
import TodoList from './TodoList';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';
import './App.css';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/converter" element={<TemperatureConverter />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;