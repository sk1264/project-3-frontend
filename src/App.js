import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import New from './pages/New'
import Show from './pages/Show'
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700703052.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
