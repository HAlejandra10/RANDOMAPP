import React from 'react'
import styled from 'styled-components';
import {FaTaxi} from 'react-icons/fa'
import { useAuth0 } from '@auth0/auth0-react'
// import db from './../db.js'
// import { doc, getDoc } from "firebase/firestore";



const Login = () => {

  // const docRef = doc(db, "productos", "K2bmjYCiVrJBqDjjIS3i");
// eslint-disable-next-line
  // const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }

  return (

<Section>
<form>
<div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
             <div className="brand_logo_container">
                <div className='login_logo'>
              <FaTaxi  />
              <div className="logo_word"> 
                <span>MY TAXI</span>
                </div>
              </div>
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                  </div>
                  <input type="text" name className="form-control input_user" defaultValue placeholder="username" />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" name className="form-control input_pass" defaultValue placeholder="password" />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" className="btn login_btn">Login</button>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account? <a href="#" className="ml-2">Register</a>
              </div>
              <div className="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
               </div> 
            </div>
          </div>
        </div>
      </div>
</form>
</Section>
  )
}

export default Login;

const Section = styled.section`

.user_card {
    height: 500px;
    align-self: center;
    width: 390px;
    margin-top: 100px;
    margin-bottom: 200px;
    background: #efb810;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    left: 300px;

}
// .brand_logo {
//     height: 350px;
//     width: 150px;
//     border-radius: 50%;
//     border: 2px solid white;
// }
.form_container {
    display: grid;
    place-content: center;
    margin-top: 50px;
}
.login_btn {
    width: 100%;
    background: black !important;
    color: white !important;
}
.login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
}
.login_container {
    padding: 0 2rem;
}
.input-group-text {
    background: black !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
}
 .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
     background-color: black !important;
 }

.login_logo {   
         width: 100%;
         height: 200%;
        display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
        //  gap: 5rem;
         align-self: center;
         grid:flex;
        svg {
           color: black;
           font-size: 6rem;
        //    align-self: center;
           justify-content: center;
           height: 200%;
           gap: 2rem;
           position:relative;
           top: -50px;
           justify-content: left;
           right: -70px;
         }
         span {
             height: 100px;
             position:relative;
             left: -50px;
             bottom: -20px;
             font-size: 2rem;
             text-align: left;
             justify-content: center;
            font-family: "Permanent Marker", cursive;
          
          }
}
`