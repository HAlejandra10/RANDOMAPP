import React from 'react';
import styled from "styled-components";
// import Dashboard from './Componentes/dashboard';
import Login from './layout/login';
import SignUp from './layout/signUp';
// import SideBar from './layout/sideBar';




const App = () => {
  return (
    <Div>
      {/* <Login/> */}
    {/* <SideBar/>
    <Dashboard/> */}
<SignUp/>
   
    </Div>
  );
}

export default App;

const Div= styled.div`
position: relative;
`