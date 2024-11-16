
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <ul>
        <li><Link to="/new" onClick={onClose}>New</Link></li>
          <li><Link to="/bags" onClick={onClose}>Bags</Link></li>
          <li><Link to="/Women" onClick={onClose}>Women</Link></li>
          <li><Link to="/mens" onClick={onClose}>Men</Link></li>
          <li><Link to="/watches" onClick={onClose}>Watches</Link></li>
          <li><Link to="/services" onClick={onClose}>Services</Link></li>
          <li><Link to="/call-us" onClick={onClose}>Call Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;