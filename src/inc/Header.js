import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light white fixed-top scrolling-navbar">
          <a className="navbar-brand topic-font text-primary ml-5" href="#"><strong>LOGO</strong></a>
          <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav d-flex justify-content-end  ml-auto">
                  <li className="nav-item waves-effect waves-dark mr-5">
                      <a className="nav-link tcolor-dar small active align-middle"  href="#">HOME</a>
                  </li>
                  <li className="nav-item waves-effect waves-dark mr-5">
                      <a className="nav-link color-dar small"  href="#">FLIGHTS</a>
                  </li>
                  <li className="nav-item waves-effect waves-dark mr-5">
                      <a className="nav-link color-dar small"  href="#">LOGIN/REGISTER</a>
                  </li>
               </ul>
               <div className="mr-5">
                    <a className="nav-link color-dar bell"  href="#"><i className="fas fa-bell active"></i></a>
               </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
