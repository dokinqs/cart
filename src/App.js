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
    const addedAlready = cartItems.find((item) => item.id === prod.id);
    if (addedAlready) {
      setCartItems(cartItems.map((item) => item.id === prod.id ? { ...addedAlready, quantity: addedAlready.quantity + 1 } : item ));
    } else {
      setCartItems([ ...cartItems, { ...prod, quantity : 1 } ]);
    }
  }

  return (
    <div>
      <Router>
        <Nav />
        <Paths prodItems={productItems} cartItems={cartItems} handleAdd={handleAdd}/>
      </Router>
    </div>
  )
}

export default App;