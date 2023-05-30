import React from "react";
import { NavLink, Link} from 'react-router-dom';

function Header() {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-medium" style={{color:"black", backgroundColor: "rgb(226, 178, 4)"}}>
  <Link className="navbar-brand" to='/Home'>TOASTIE+CAFÉ</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">

      <li className="nav-item">
            <NavLink 
            to='/Home' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Home</NavLink>
      </li>

      <li className="nav-item">
            <NavLink 
            to='/Gallery' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Gallery</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/About' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>About</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/Contact' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Contact</NavLink>
        </li>
{/* 
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/gallery">Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/pictures">Pictures Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li> */}

    </ul>
   </div>
</nav>
</>
)
};

export default Header;
