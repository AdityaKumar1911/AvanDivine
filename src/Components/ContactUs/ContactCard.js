// src/ContactCard.js
import React from 'react';
import './ContactCard.css';

const ContactCard = () => {
    return (
        <div className="contact-card-container">
            <div className="contact-card">
                <div className="card-section">
                    <div className="icon-container">
                        <i className="icon fa fa-map-marker"></i>
                    </div>
                    <div className="card-content">
                        <h3>Address</h3>
                        <p>607, Prabhat Kiran Building,<br />Rajendra Place, New Delhi - 110008</p>
                    </div>
                </div>
                <div className="card-section">
                    <div className="icon-container">
                        <i className="icon fa fa-phone"></i>
                    </div>
                    <div className="card-content">
                        <h3>Customer Care</h3>
                        <p>+91 8076846052</p>
                    </div>
                </div>
                <div className="card-section">
                    <div className="icon-container">
                        <i className="icon fa fa-truck"></i>
                    </div>
                    <div className="card-content">
                        <h3>Always Free Shipping</h3>
                    </div>
                </div>
                <div className="card-section">
                    <div className="icon-container">
                        <i className="icon fa fa-envelope"></i>
                    </div>
                    <div className="card-content">
                        <h3>Email</h3>
                        <p>info@Avant-devine.com<br />complaint@Avant-devine.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
