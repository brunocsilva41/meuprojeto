import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="Layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>

  )
  
}

export default App;
