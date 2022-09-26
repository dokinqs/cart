import React from 'react';
import Products from "../Products/Products";
import { Route, Routes } from "react-router-dom";

const Paths = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Products productItems={productItems} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default Paths;



