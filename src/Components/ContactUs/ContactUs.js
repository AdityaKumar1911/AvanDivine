// src/ContactUs.js
import React from 'react';
import ContactCard from './ContactCard';
import './ContactUs.css';
import Navbar from "../Nav/Nav";
import ContactUsForm from './ContactUsForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Footer/footer';
const ContactUs = () => {
  return (
    <>
    <Navbar />
    <div className="contact-us">
    <div className="halo-block-header text-center has-des">
      <h3 className="Contactus-title"><span className="text">Get In Touch!</span></h3>
      <div className="rte subtext-spotlight subtex-font">We'd love to hear from you</div>
    </div>
      <div>
      <ContactCard />
      </div>
        <div>
        <ContactUsForm />
        </div>
      </div>
      <Footer />
      </>
  );
};

export default ContactUs;
