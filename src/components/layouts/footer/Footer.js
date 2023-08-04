import React from 'react';
import './footer.styles.css';

const Footer = () => {
  return (
    <section className='footer-container'>
        <div className='container'>
            <h2>if you have any queries feel free to ask here</h2>


            <form className='footer-form'>
               <div className="form-group">
                <label htmlfor="name" className='form-label'>Name:</label>
                <input type='text' id='name' className='form-input' placeholder='enter ur name'/>
               </div>

               <div className="form-group">
               <label htmlfor="email" className='form-label'>Email:</label>
                <input type='email' id='email' className='form-input' placeholder='enter ur email'/>
               </div>

               <div className="form-group">
               <label htmlfor="query" className='form-label'>Ask us</label>
                <textarea className='form-input' id='query' placeholder='type ur query'></textarea>
               </div>

               <div className="form-group">
               <a href="#" className='form-submit' >Submit</a>
               </div>
            </form>
            <p> &copy; 2023 Sweet reads. All Rights reserved </p>
        </div>
    </section>
  )
}

export default Footer
