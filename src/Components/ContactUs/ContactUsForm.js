import React, { useState } from 'react';
import './ContactUsForm.css';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        notifications: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'phone') {
            // Allow only numeric input for phone
            const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
            setFormData({
                ...formData,
                [name]: numericValue,
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <p>We will get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">
                        <i className="fa fa-user"></i> Full Name <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <i className="fa fa-envelope"></i> Email <span>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={formData.notifications}
                            onChange={handleChange}
                        />{' '}
                        <i className="input-text"></i>Accept to receive notifications by email.
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        <i className="fa fa-phone"></i> Phone <span>*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What can I help you?"
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUsForm;
