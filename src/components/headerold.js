import React from "react";
import { NavLink, Link} from 'react-router-dom';
import './header.css';
import logo from '../assets/logonav.jpg';

function Header() {
  return (
<>
<nav classNameName="navbar navbar-expand-lg navbar-medium" style={{color:"black", backgroundColor: "rgb(226, 178, 4)"}}>
  <Link classNameName="navbar-brand" to='/Home'>
  <img src={logo} alt='logo' width="100" height="45" /></Link>
  <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
    <span classNameName="navbar-toggler-icon"></span>
  </button>

  <div classNameName="collapse navbar-collapse" id="navbarNav">
    <ul classNameName="navbar-nav ">

      <li classNameName="nav-item">
            <NavLink 
            to='/Home' 
            end 
            classNameName={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Home</NavLink>
      </li>

      <li classNameName="nav-item">
            <NavLink 
            to='/Menu' 
            end 
            classNameName={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Our Menu</NavLink>
        </li>

        <li classNameName="nav-item dropdown">
            <NavLink 
            to='/Dropdown' 
            end 
            classNameName={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Dropdown Menu</NavLink>
  
              <ul classNameName="dropdown-menu">
  
                <li classNameName="dropdown-item">
                <NavLink 
                to='/Drinks' 
                end 
                classNameName={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }>Drinks Menu</NavLink>
                </li>
                <li classNameName="dropdown-item">
                <NavLink 
                to='/Sandwich' 
                end 
                classNameName={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }>Sandwich Menu</NavLink>
                </li>

              </ul>
        </li>

      <li classNameName="nav-item">
            <NavLink 
            to='/Gallery' 
            end 
            classNameName={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Gallery</NavLink>
        </li>

        <li classNameName="nav-item">
            <NavLink 
            to='/About' 
            end 
            classNameName={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>About</NavLink>
        </li>

        <li classNameName="nav-item">
            <NavLink 
            to='/Contact' 
            end 
            classNameName={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Contact</NavLink>
        </li>

        <li classNameName="nav-item dropdown">
          <NavLink classNameName="nav-link dropdown-toggle" href="/Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu Options
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink classNameName="dropdown-item" to="/Drinks">Drinks</NavLink></li>
            <li><NavLink classNameName="dropdown-item" to="/Sandwich">Sandwiches</NavLink></li>
          </ul>
        </li>


    </ul>
   </div>
</nav>
</>
)
};

export default Header;
