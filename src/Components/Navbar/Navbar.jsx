import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav__navbar">
      <div className="nav__navbar-links">
        <div className="nav__navbar-links_logo">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="nav__navbar-links_container">
          <p><a href="#Home">HOME</a></p>
          <p><a href="#Student">STUDENT</a></p>
          <p><a href="#Faculty">FACULTY</a></p>
          <p><a href="#Contact">CONTACT</a></p>
        </div>
      </div>
      <div className="nav__navbar-sign">
        <p>LOG IN</p>
        <button type="button">REGISTER</button>
      </div>
      <div className="nav__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="nav__navbar-menu_container scale-up-center">
          <div className="nav__navbar-menu_container-links">
            <p><a href="#Home">HOME</a></p>
            <p><a href="#Student">STUDENT</a></p>
            <p><a href="#Faculty">FACULTY</a></p>
            <p><a href="Contact">CONTACT</a></p>
          </div>
          <div className="nav__navbar-menu_container-links-sign">
            <p>LOG IN</p>
            <button type="button">REGISTER</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;