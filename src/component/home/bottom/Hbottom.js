import React, { Component } from 'react';

class Hbottom extends Component {
  render() {
    return (
      <div className="Hbottom row text-white p-5">
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="p-2 w-50 m-auto">
                <h2 className="text-left mt-3 mb-4">Contact Us</h2>
                <p className="text-left mb-2"><i className="fas fa-phone mr-3 flip"></i>+3101234567</p>
                <p className="text-left"><i className="fas fa-envelope mr-3"></i>info@notify.com</p>
            </div>
            
        </div>
        <form className="col-sm-12 col-md-6 col-lg-6">
            <div className="container card p-5">
                <h2 className="text-primary text-left mb-3">Sign up for airline promotions</h2>
                <input type="name" className="w-100 input-custom mb-3 border border-light" type="text" placeholder="Your Name"/>
                <input type="email" className="w-100 input-custom mb-3 border border-light" type="text" placeholder="Your Email"/>
                <button type="submit" className="btn btn-indigo w-100 mt-4 waves-effect waves-light">SIGN UP</button>
            </div>
        </form>
      </div>
    );
  }
}
export default Hbottom;