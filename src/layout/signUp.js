import React from 'react'
import styled from 'styled-components'
import { FaTaxi} from 'react-icons/fa'

const  SignUp = () => {
  return (
  <Section>

{/* <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul> */}

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
           
              <form className='class="mx-1 mx-md-4'>
              <p className="title_signup text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </Section>
  )
}

export default SignUp

const Section = styled.section`
.user_card {
    height: 600px;
    align-self: center;
    width: 1000px;
    margin-top: 100px;
    margin-bottom: 200px;
    background: #efb810;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;

}
.title_signup {
    position:relative;
    right: -70px;
    bottom: -200px
    top: -250px;

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
           justify-content: center;
           height: 200%;
           gap: 2rem;
           position:relative;
           justify-content: center;
            left: -250px;
           right: -70px;
           bottom: -200px
         }
         span {
             height: 100px;
             position:relative;
             left: -400px;
             bottom: -300px;
             font-size: 2rem;
             text-align: left;
             justify-content: center;
            font-family: "Permanent Marker", cursive;
          
          }
}
`