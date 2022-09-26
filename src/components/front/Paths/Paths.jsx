import React from 'react';
import Products from "../Products/Products";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import { Route, Routes } from "react-router-dom";

const Paths = ({ prodItems, cartItems, handleAdd, handleRemove }) => {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Products pItems={prodItems} handleAdd={handleAdd}/>}
        ></Route>
        <Route 
          path="/login" 
          element={<Login />}
        ></Route>
        <Route 
          path="/cart" 
          element={<Cart 
            cItems={cartItems} 
            handleAdd={handleAdd} 
            handleRemove={handleRemove} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default Paths;



