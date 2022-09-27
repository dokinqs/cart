import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/front/Nav/Nav';
import Paths from "./components/front/Paths/Paths";
import data from './components/back/Data';
import "./App.css";

const App = () => {

  const { productItems } = data;
  const [ cartItems, setCartItems ] = useState([]);
  let [ totalItems, setTotalItems ] = useState(0);

  const handleAdd = (prod) => {
    const prodExists = cartItems.find((item) => item.id === prod.id);
    if (prodExists) {
      setCartItems(cartItems.map((item) => item.id === prod.id ? { ...prodExists, quantity: prodExists.quantity + 1 } : item ));
      totalItems++;
      setTotalItems(totalItems);
    } else {
      setCartItems([ ...cartItems, { ...prod, quantity : 1 } ]);
      totalItems++;
      setTotalItems(totalItems);
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
      totalItems--;
      setTotalItems(totalItems);
    } else {
      setCartItems(cartItems.map((item) => item.id === prod.id 
      ? { ...prodExists, quantity: prodExists.quantity - 1 } 
      : item
      ));
      totalItems--;
      setTotalItems(totalItems);
    }
  }

  const handleDelete = (prod) => {
    totalItems -= prod.quantity;
    setCartItems(cartItems.filter((item) => item.id !== prod.id));
    setTotalItems(totalItems);
    removedAlert(prod);
  }

  return (
    <div>
      <Router>
        <Nav 
          cartItems={cartItems}
          totalItems={totalItems}
          />
        <Paths 
          prodItems={productItems} 
          cartItems={cartItems} 
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          handleDelete={handleDelete}
          totalItems={totalItems}
        />
      </Router>
    </div>
  )
}

export default App;