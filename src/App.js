import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./firebase/FireBase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetailsPage from "./pages/bookdetailpage/BookDetails";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/signuppage/SignUp";
import CartPage from "./pages/cartpage/CartPage";

export const UserContext = createContext({});
export const CartContext = createContext([]);

const App = () => {
  const auth = getAuth(app);
  const [auhenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount]=useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
  }, []);

  useEffect(() => {
     let total=0;
     cartItems.forEach((item)=>{
        //  console.log(item.price)
        total = total + parseInt(item.price)
     })
     setTotalAmount(total)
  },[cartItems])

  
  return (
    <UserContext.Provider value={auhenticatedUser}>
      <CartContext.Provider value={{ cartItems,totalAmount, setCartItems }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/book-details/:id" element={<BookDetailsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};
export default App;
