import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import AD from "../../Assets/Images/AD.png";

function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-6 mt-3 footer-text">
                        <div className="first-column">
                            <p className="footer-title">HELP</p>
                            <ul>
                                <li>
                                    <Link to="./CallUs">
                                        A Client Advisior is avilable at
                                        <br />
                                        You can also{" "}
                                        <Link style={{ textDecoration: "underline" }}>
                                            chat
                                        </Link> or{" "}
                                        <Link style={{ textDecoration: "underline" }}>email</Link>{" "}
                                        us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/help/faq">FAQ's</Link>
                                </li>
                                <li>
                                    <Link to="/help/shipping">Stores</Link>
                                </li>
                                <li>
                                    <Link to="/help/returns">Follow Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mt-3 footer-text">
                        <div className="first-column">
                            <p className="footer-title">SERVICES</p>
                            <ul >
                                <li>
                                    <Link to="/services/consulting">Repairs</Link>
                                </li>
                                <li>
                                    <Link to="/services/design">Shipping</Link>
                                </li>
                                <li>
                                    <Link to="/services/design">Personlisation</Link>
                                </li>
                                
                                <li>
                                    <Link to="/services/marketing">Download our Apps</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mt-3 footer-text">
                        <div className="first-column">
                            <p className="footer-title">ABOUT</p>
                            <ul>
                                
                                <li>
                                    <Link to="/about/careers">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/about/blog">Sustainability</Link>
                                </li>
                                <li>
                                <Link to="/about/blog">Privacy And Policy</Link>
                                </li>
                                <li>
                                <Link to="/about/blog">Terms And Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mt-3 footer-text">
                        <div className="first-column">
                            <p className="footer-title">CONNECT</p>
                            <ul>
                                <li>
                                    <Link to="/help/contact">
                                        <Link style={{ textDecoration: "underline" }}>
                                            Sign up
                                        </Link> for first access to latest collections,<br /> campaigns and video
                                    </Link>   </li>

                            </ul>
                            <p className="footer-text">ADDRESS</p>
                            <ul>
                                <li className="text-white footer-text">
                                    <Link>
                                    35- Ferozeshah Road
                                     <br/>New Delhi - 110001 <br/>
                                    011-23604650</Link>  </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/* <p className="advant-text">ADVANT DIVINE</p> */}
                <div className="centered-image-container">
                    <img src={AD} alt="Descriptive Alt Text" className="centered-image" />
                </div>{" "}
            </div>
        </div>
    );
}

export default Footer;
