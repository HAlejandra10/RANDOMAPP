import React from 'react'
import { Routes, Route} from "react-router-dom";
import Consult from '../Componentes/consult';
import ContactUs from '../Componentes/contact';
import Home from '../Componentes/home';



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