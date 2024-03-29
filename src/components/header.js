import React from "react";
// import { NavLink, Link} from 'react-router-dom';
import './header.css';
import logo from '../assets/logonav.jpg';

function Header() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{color:"black", backgroundColor: "rgb(226, 178, 4)"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/Home">
      <img src={logo} alt="logo" width="80" height="35"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Menu
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Drinks">Drinks</a></li>
            <li><a className="dropdown-item" href="/Sandwich">Food</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
</>
)
};

export default Header;
