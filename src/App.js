import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/front/Nav/Nav';
import Paths from "./components/front/Paths/Paths";
import data from './components/back/Data';
import "./App.css";

const App = () => {

  const { productItems } = data;
  const [ cartItems, setCartItems ] = useState([]);

  const handleAdd = (prod) => {
    const prodExists = cartItems.find((item) => item.id === prod.id);
    if (prodExists) {
      setCartItems(cartItems.map((item) => item.id === prod.id ? { ...prodExists, quantity: prodExists.quantity + 1 } : item ));
    } else {
      setCartItems([ ...cartItems, { ...prod, quantity : 1 } ]);
    }
  }

  const removedAlert = (prod) => {
    document.getElementById('removed-alert').innerHTML = `${prod.name} was removed.`;
  }

  const handleSubtract = (prod) => {
    const prodExists = cartItems.find((item) => item.id === prod.id);
    if (prodExists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== prod.id));
      removedAlert(prod);
    } else {
      setCartItems(cartItems.map((item) => item.id === prod.id 
      ? { ...prodExists, quantity: prodExists.quantity - 1 } 
      : item
      ));
    }
  }

  const handleDelete = (prod) => {
    setCartItems(cartItems.filter((item) => item.id !== prod.id));
    removedAlert(prod);
  }

  return (
    <div>
      <Router>
        <Nav />
        <Paths 
          prodItems={productItems} 
          cartItems={cartItems} 
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          handleDelete={handleDelete}
        />
      </Router>
    </div>
  )
}

export default App;