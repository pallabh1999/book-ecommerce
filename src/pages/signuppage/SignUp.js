import React from "react";
import "./signup.styles.css";
import AuthBgImg from "../../assets/auth-bg.jpg";

import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import AuthForm from "../../components/form/authform/AuthForm";

const SignUp = () => {
  return (
    <React.Fragment>
    <Navbar darkTheme={true}/>
    <section className="signup-container">
      <div className="signup-img-container">
        <img src={AuthBgImg} alt="authentication-bg" />
      </div>
      <div className="signup-content-container">
        <div className="container"></div>
        <div className="content-wrapper">
          <h2>Signup</h2>
          <br></br>
          <p>Create a new account with email and password.</p>

          <br></br>

          
          <AuthForm buttonName="Sign up"/>
        </div>
    </div>
      
    </section>
    <Footer/>
    </React.Fragment>
  );
};

export default SignUp;
