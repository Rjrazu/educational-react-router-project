import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>CommitMent School and College</h1>
                                <p className="mt-4 ">
                                    <small>
                                        Come For Knowledge And Go Out For Services!
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>CSC © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Quick Path</li>
                                    <li className="footer-menu"><NavLink to="./home">Home</NavLink></li>
                                    <li className="footer-menu"><NavLink to="./services">Services</NavLink></li>
                                    <li className="footer-menu"><NavLink to="./contact">Contact Us</NavLink></li>
                                    <li className="footer-menu"><NavLink to="./about">About Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">

                                    </div>
                                    <div>
                                        <h5>+1 8 800 555 35 35</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">

                                    </div>
                                    <div>
                                        <p>
                                            160 Broadway, New York, NY 10038,
                                            <br /> 102 1st Avenue, New York, NY 100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;