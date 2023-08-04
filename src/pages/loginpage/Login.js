import React from "react";
import "./login.styles.css";
import AuthBgImg from "../../assets/auth-bg.jpg";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import AuthForm from "../../components/form/authform/AuthForm";

const Login = () => {
  return (
    <React.Fragment>
    <Navbar darkTheme={true}/>
    <section className="login-container">
      <div className="login-img-container">
        <img src={AuthBgImg} alt="authentication-bg" />
      </div>
      <div className="login-content-container">
        <div className="container"></div>
        <div className="content-wrapper">
          <h2>LogIn</h2>
          <br></br>
          <p>SignIn with Email and Password.</p>

          <br></br>
         <AuthForm buttonName="LogIn"/>
          
        </div>
    </div>
      
    </section>
    <Footer/>
    </React.Fragment>
  );
};

export default Login;
