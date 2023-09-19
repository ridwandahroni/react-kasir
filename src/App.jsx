// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainLayout from './components/layouts/Main_layout'
import Home from "./components/pages/home";
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import Checkout from "./components/pages/checkout";
import SlideMenu from "./components/slide/slide";
import Buy from "./components/pages/pesenan-anda"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pesanan" element={<Buy />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/keranjang" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//     <MainLayout>
// </MainLayout>
