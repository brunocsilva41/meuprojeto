import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Blogs from "./pages/Blogs.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="https://whimsical-kataifi-e8b8fd.netlify.app/blogs" element={<Blogs />} />
        <Route path="Layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>

  )
  
}

export default App;
