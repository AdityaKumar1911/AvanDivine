import React from 'react';
import './SectionHeader.css'; // Import the CSS file for styling

const SectionHeader = ({ text }) => {
  return (
    <div className="section-header">
      <hr className="line" />
      <span className="section-text">{text}</span>
      <hr className="line" />
    </div>
  );
}

export default SectionHeader;
