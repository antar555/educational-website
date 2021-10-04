import React from 'react';



const Contact = () => {
   
    return (
        
           
        <div  className="container d-flex justify-content-center align-items-center  rounded-3 my-5 shadow-lg p-3 mb-5 bg-body rounded">
           
        <div className="contact-form">
          <h1>Contact Us</h1>
          <p>To Learn and Enlighten Yourself</p>
          <input type="email" className="form-control" placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <br />
          <br />
          
          <button type="submit" className="btn btn-dark">Submit</button>
        </div>

         </div>

        
    );
};

export default Contact;