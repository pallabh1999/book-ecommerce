import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../form/searchInputForm/SearchInputForm";



const Showcase = () => {
    return(
        <section className="showcase-container">
        
        <Navbar darkTheme={false} />

            <div className="overlay"></div>
          <div className="showcase-content">
            <h1>BEST BOOKS AVAILABLE!!</h1>
            <p>buy quality books at cheaper price!!</p>
            <SearchInputForm darkTheme={true}/>
            </div> 
          
        </section>
    )
}

export default Showcase;