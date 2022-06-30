import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './pages/home'
import About from './pages/home'
import Contact from './pages/home'

const Linkspages = () => {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} /> 
      </Routes>
    </div>
  )
}

export default Linkspages