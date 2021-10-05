import React from 'react';



const Contact = () => {
   
    return (
        
      <div>
        <br />
        <h1 className="text-center">Contact Us</h1>
        <br />
      
     <div className="container py-4 w-50  shadow p-3 mb-5 bg-body rounded">
       
      <div>
      
      
        <form id="contactForm">
      
         
          <div className="mb-3">
            <label className="form-label" >Name</label>
            <input className="form-control" id="name" type="text" placeholder="Name" />
          </div>
      
          
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
          </div>
      
         
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" id="message" type="text" placeholder="Message" style= {{height: '10rem'}}></textarea>
          </div>
      
         
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" type="submit">Submit</button>
          </div>
      
        </form>
      
      </div>
      </div>
      </div>

        
    );
};

export default Contact;