import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/front/Nav/Nav';
import Paths from "./components/front/Paths/Paths";
import data from './components/back/Data';
import "./App.css";

const App = () => {

  const { productItems } = data;

  return (
    <div>
      <Router>
        <Nav />
        <Paths productItems={productItems} />
      </Router>
    </div>
  )
}

export default App;