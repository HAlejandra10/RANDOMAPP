import React from 'react'
import { Routes, Route} from "react-router-dom";
import Consult from '../pages/consult';
import ContactUs from '../pages/contact';
import Home from '../pages/home';



const Linkspages = () => {
  return (
    <div>

         <Routes>
        <Route path="/" element={<Home />} />
         <Route path="contactUs" element={<ContactUs/> } />
        <Route path="consult" element={<Consult/> }/>
      </Routes>
    </div>
  )
}

export default Linkspages