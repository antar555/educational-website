import React from 'react';
import {  NavLink } from 'react-router-dom';


const Header = () => {
    const activeStyle={ 
        fontWeight: "bold",
         color: "red",
         backgroundColor: '#ffff99'
        }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white fw-bolder" to="/home">Enlighten Coaching</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto d-flex  justify-content-end ">
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link" to="/courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link" to="/contact">Contact</NavLink>
              </li>
             
             
            </ul>
           
          </div>
        </div>
      </nav>
    );
};

export default Header;