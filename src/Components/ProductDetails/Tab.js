import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './ProductDetails.css';


export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            sx={{
                                '.MuiTabs-indicator': {
                                    backgroundColor: 'black',
                                },
                            }}
                        >
                            <Tab 
                                label="DESCRIPTION"
                                value="1"
                                className='description-title'
                                sx={{
                                    '&.Mui-selected': {
                                        color: 'black',
                                    },
                                    '&.MuiTouchRipple-root': {
                                        color: 'black',
                                    },
                                }}
                            />
                            <Tab
                                label="DETAILS"
                                value="2"
                                className='description-title'
                                sx={{
                                    '&.Mui-selected': {
                                        color: 'black',
                                    },
                                    '&.MuiTouchRipple-root': {
                                        color: 'black',
                                    },
                                }}
                            />
                            <Tab
                                label="WASH CARE"
                                value="3"
                                className='description-title'
                                sx={{
                                    '&.Mui-selected': {
                                        color: 'black',
                                    },
                                    '&.MuiTouchRipple-root': {
                                        color: 'black',
                                    },
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel className='product-description' value="1" style={{ textAlign: "justify" }}>
                        INDULGE IN LUXURY WITH OUR GREY HERRINGBONE HOODIE, CRAFTED WITH A SOPHISTICATED GREY HERRINGBONE DESIGN AND AN INNER WAFFLE LINING FOR ADDED COMFORT. ELEVATE YOUR CASUAL WARDROBE WITH THIS EXCLUSIVE PIECE, PERFECT FOR THOSE WHO APPRECIATE STYLE.
                    </TabPanel>
                    <TabPanel className='product-description' value="2" >
                        <p>100% COTTON</p>
                        <p className='details-tab'>Weight - 565 GSM</p>
                        <p className='details-tab'>SCREEN PRINT</p>
                    </TabPanel>
                    <TabPanel className='product-description' value="3" style={{ textAlign: "justify" }}>
                        <p>USE COLD WATER TO PROTECT AGAINST FADING & SHRINKING.</p>
                        <p className='details-tab'>AVOID HARSHER DETERGENTS & TURN THEM INSIDE OUT FOR THE WASH.</p>
                    </TabPanel>
                </TabContext>
            </Box>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p>Size</p>
                <div className="size-chart">
                    <p>Size Chart</p>
                </div>
            </div>
        </>
    );
}
