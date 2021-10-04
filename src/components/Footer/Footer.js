import React from 'react';

const Footer = () => {
    const footerStyle={
       footer: {
           backgroundColor: ' #db6930'
       },
       button:{
           backgroundColor: '#54456b',
       },
       text:{
           backgroundColor:'rgba(0, 0, 0, 0.2)'
       }
       
    }
    return (
        <div>
          
<div >
    <br />
    <br />
    <br />

  <footer className="text-center text-lg-start" style={footerStyle.footer}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={footerStyle.button}>
        <i className="fab fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={footerStyle.button}>
        <i className="fab fa-youtube"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={footerStyle.button}>
        <i className="fab fa-instagram"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={footerStyle.button}>
        <i className="fab fa-twitter"></i>
      </button>
    </div>

  
    <div className="text-center text-white p-3" style={footerStyle.text}>
      © 2021 Copyright:
      <p className="text-white">Antar Karmakar</p>
    </div>
  
  </footer>
  
</div>

        </div>
    );
};

export default Footer;