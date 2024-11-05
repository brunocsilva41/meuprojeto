import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>

  )
  
}

export default App;
