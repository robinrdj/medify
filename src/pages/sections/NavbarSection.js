import React from 'react';
import './NavbarSection.css';
import logoImage from '../../Assets/logo.png';
const NavbarSection = () => {
  return (
    <div className='navigation__bar'>
      <p> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
      <nav className="navbar">
      <ul className="navbar__links">
        <li><a href="/"><img src={logoImage} alt="medify logo" className='navbar__logo'></img></a></li>
        <li><a href="/search">Find Doctors</a></li>
        <li><a href="#">Hospitals</a></li>
        <li><a href="#">Medicines</a></li>
        <li><a href="#">Surgeries</a></li>
        <li><a href="#">Software for Provider</a></li>
        <li><a href="#">Facilities</a></li>
      </ul>
      <button className="navbar__button"><a href="/bookings" style={{textDecoration:"none"}}>My Bookings</a></button>
    </nav>
    </div>
   
  );
}

export default NavbarSection;
