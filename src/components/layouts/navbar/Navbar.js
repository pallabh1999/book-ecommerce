import React, {useContext} from "react";
import './navbar.styles.css';
import { Link, useNavigate} from 'react-router-dom';
import { UserContext } from "../../../App";
import { ReactComponent as Cart } from "../../../assets/cart.svg";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase/FireBase";



const Navbar = ({ darkTheme }) => {
     
    const user = useContext(UserContext);
    // console.log(user);
    const auth = getAuth(app);
    const navigate = useNavigate()

    const handleLogout = () => {
       signOut(auth).then(()=>{
// once the sign out is complete we can redirect the user to the home page in order to do that we use use navigate hook which comes from react dom
         navigate('/');
       })
       .catch((err) => {
        console.log(err);
       })
    };


    const showLoginAndSignup = (
         <nav className="nav-links-container">
            <Link to="/" href="#" className="nav-links">Home</Link>
            <Link to="/books" className="nav-links">Books</Link>
            <Link to="/login" className="nav-links">Login</Link>
            <Link to="/signup" className="nav-links">Sign up</Link>
        </nav> 
    )   
    
    const showLogoutAndCart = (
        <nav className="nav-links-container">
                <Link to="/" href="#" className="nav-links">Home</Link>
                <Link to="/books" className="nav-links">Books</Link>
                <a onClick={handleLogout} to="/" className="nav-links">Logout</a>
                <Link to="/cart" className="cart-link"><Cart /></Link>
            </nav> 
    )

    return(
        <section className={darkTheme ? 'background-dark relative'+ ' navbar-container':'background-transparent' + ' navbar-container'}>
         <div className="container flex justify-between align center">
            <a href="#" className="logo">Sweet<span className="text-primary">reads!</span></a>

 {/* if the user is present we are going to show logout and caart  esle we are going to show login and signup*/}
            { user ? showLogoutAndCart : showLoginAndSignup }


         </div>
        </section>
    )
}

export default Navbar;