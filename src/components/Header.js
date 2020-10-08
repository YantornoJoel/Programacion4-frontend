import React, { Component } from "react";
import logo from '../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*LOGO*/}
          <div id="logo">
            <img
              src={logo}
              className="app-logo"
              alt="logo"
            />
            <span id="brand">
              {" "}
              <strong>BLOG</strong>NSLP{" "}
            </span>
          </div>
          {/*MENU*/}
          <nav id="menu">
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="formulario.html">Formulario</a>
              </li>
              <li>
                <a href="#">Page one</a>
              </li>
            </ul>
          </nav>
          {/*LIMPIAR FLOTADOS*/}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
