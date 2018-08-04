import React, { Component } from 'react';

class Hheader extends Component {
    render() {
      return (
          <div className="Hheader">
               {/* background */}
                <div className="back-image"></div>
                <div className="cloud-bottom"></div>
                <div className="plane"></div>
                <div className="cloud-piece"></div>

                {/* Book Now form */}
                <div className="row h-100">
                    <div className="col-sm-12 col-md-6 col-lg-6"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 m-auto">
                        <div className="form">
                            <div className="container text-white">
                                <h2><b>WHERE WOULD YOU LIKE TO FLY TO?</b></h2>
                                {/* FROM */}
                                <div className="form-group">
                                    <div className="w-100 text-left mb-2">From</div>
                                    <input className="w-100 input-custom" type="text"/>
                                </div>
                                {/* TO */}
                                <div className="form-group">
                                    <div className="w-100 text-left mb-2">To</div>
                                    <input className="w-100 input-custom" type="text"/>
                                </div>
                                {/* DATE AND CLASS */}
                                <div className="row">
                                    <div className="col-6">
                                        <div className="w-100 text-left mb-2">Date</div>
                                        <div className="calender">
                                            <input className="w-100 input-custom" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="w-100 text-left mb-2">Class</div>
                                        <select placeholder="Business Class" className="w-100 input-custom colorful-select dropdown-primary">
                                            <option value="1">Class A</option>
                                            <option value="2">Class B</option>
                                            <option value="3">Class C</option>
                                            <option value="4">Class D</option>
                                            <option value="5">Class E</option>
                                        </select>
                                    </div>
                                </div>
                                {/* ONE WAY OR ROUND TRIP */}
                                <div className="row">
                                    <div className="form-check mt-4 ml-0 col-6">
                                        <input className="form-check-input text-danger" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            One Way
                                        </label>
                                    </div>
                                    <div className="form-check mt-4 col-6">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            Round Trip
                                        </label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-indigo w-100 mt-4 waves-effect waves-light">BOOK NOW</button>
                            </div>
                        
                        </div>
                    </div>
                </div>
          </div>    
    );
}
}
export default Hheader;