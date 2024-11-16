import React from 'react';
import "./Accordian.css";


function Accordian() {
    return (
        <>
            <div class="mt-lg-4 mt-3    ">
                <p>Offer Available</p>
                <div className='badge-container'>
                    <div className='disscount-price'>Get 5% Off</div>
                    <p style={{marginTop: "20px", letterSpacing: "0.9px"}}>On All Prepaid Orders using UPI / Paytm /PhonePe / Cards - Hurry limited period offer</p>
                </div>
                <div class="faq-drawer">
                    <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">FIT & FABRIC</label>
                    <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                            <p>Fit - Regular</p>
                            <p style={{ marginTop: "-15px" }}>Fabric - Rayon</p>
                        </div>
                    </div>
                </div>

                <div class="faq-drawer">
                    <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">SHIPPING</label>
                    <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                            <ul>
                                <li>We deliver in almost every part of India (subject to confirmation from the courier vendor).</li>
                                <li>Orders above INR 999 will be eligible for free shipping. Below that, shipping charge. will be levied</li>
                                <li>It takes approx. 3 - 7 working days to deliver your product at your doorstep. Sometimes delivery may take longer due to bad weather, flight delays, political disruptions, other unforeseen circumstances.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="faq-drawer">
                    <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">RETURNS & EXCHANGE</label>
                    <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                            <p> We have a 07-day return policy, which means you have 7 days after receiving your item to request a return.</p>
                            <p style={{ textDecoration: "underline", cursor: "pointer" }}> Click to know more</p>
                            <p>Or</p>
                            <p>Contact us at <span style={{ textDecoration: "underline" }}>info@advantdivine.com</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Accordian