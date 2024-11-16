import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './SideBar.css';

const Sidebar = ({ isOpen, toggleSidebar, setSelectedColor }) => {
    const [color, setColor] = useState('');
    const [universe, setUniverse] = useState('');

    const handleColorClick = (color) => {
        setColor(color);
    };

    const handleClearClick = () => {
        setColor('');
        setUniverse('');
        setSelectedColor('');
    };

    const handleShowProductsClick = () => {
        setSelectedColor(color);
        toggleSidebar();
    };

    const colorMap = {
        Beige: '#f5f5dc',
        Black: '#000000',
        Blue: '#0000ff',
        Green: '#008000',
        Grey: '#808080',
        Marron: '#800000',
        Multicolor: '#ff00ff',
        Silver: '#c0c0c0',
    };

    return (
        <>
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Show filters</h2>
                    <FaTimes className="close-btn" onClick={toggleSidebar} />
                </div>
                <div className="filter-section">
                    <h3>Universe</h3>
                    <select value={universe} onChange={(e) => setUniverse(e.target.value)}>
                        <option value="">Select Universe</option>
                        <option value="universe1">Universe 1</option>
                        <option value="universe2">Universe 2</option>
                    </select>
                </div>
                <div className="filter-section">
                    <h3>Colours</h3>
                    <div className="colors">
                        {Object.keys(colorMap).map((col) => (
                            <div
                                key={col}
                                className={`color ${color === col ? 'selected' : ''}`}
                                onClick={() => handleColorClick(col)}
                            >
                                <div className='color-box' style={{ backgroundColor: colorMap[col] }}></div>
                                <span>{col}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="buttons">
                    <button className="clear-btn" onClick={handleClearClick}>
                        Clear
                    </button>
                    <button className="show-products-btn" onClick={handleShowProductsClick}>
                        Show products
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
