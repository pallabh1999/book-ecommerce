import React from "react";
import ReactDOM from "react-dom/client";
// REACTDOM IS BASICALLY THE LIBRARY THAT GOING TO SEND YOUR REACT FILES TO INDEX.HTML. THE WAY WE DO THIS IS BY CREATE ROOT
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"

const root =  ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

)



