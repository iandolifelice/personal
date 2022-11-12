import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Research from "./pages/Research.jsx";
import Teaching from "./pages/Teaching.jsx";
import Conferences from "./pages/Conferences.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';


function App() {
  const [navLink, setNavLink] = useState("home");
  return (
    <div className="App">
      <Header navLink={navLink} setNavLink={setNavLink}/>
      <Routes>
        <Route path="/personal/conferences" element={<Conferences/>}/>
        <Route path="/personal/research" element={<Research/>}/>
        <Route path="/personal/teaching" element={<Teaching/>}/>
        <Route path="/personal" element={<Home/>}/>
      </Routes>
      <Footer setNavLink={setNavLink}/>
     
    </div>
  );
}

export default App;
