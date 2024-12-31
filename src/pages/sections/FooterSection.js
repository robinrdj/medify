// Footer.js
import React from 'react';
import './FooterSection.css';
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Logo from "../../Assets/logo.png";
const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className='footer__logo__symbols'>
                <div className="footer__logo">
                    <img src={Logo} />
                </div>
                <div className="footer__symbols">
                    <a href="#"><CiFacebook className='footer__icons'/></a>
                    <a href="#"><AiFillTwitterCircle className='footer__icons' /></a>
                    <a href="#"><FaYoutube className='footer__icons' /></a>
                    <a href="#"><FaPinterest className='footer__icons' /></a>
                </div>
                </div>
               
                <div className="footer__links">
                    <div className="footer__col">
                        <a href="#">> About Us</a>
                        <a href="#">> Our Pricing</a>
                        <a href="#">> Our Gallery</a>
                        <a href="#">> Appointment</a>
                        <a href="#">> Privacy Policy</a>
                    </div>
                    <div className="footer__col">
                        <a href="#">> Orthology</a>
                        <a href="#">> Neurology</a>
                        <a href="#">> Dental Care</a>
                        <a href="#">> Ophthalmology</a>
                        <a href="#">> Cardiology</a>
                    </div>
                    <div className="footer__col">
                        <a href="#">> About Us</a>
                        <a href="#">> Our Pricing</a>
                        <a href="#">> Our Gallery</a>
                        <a href="#">> Appointment</a>
                        <a href="#">> Privacy Policy</a>
                    </div>
                </div>

            </div>
            <div className="footer__statement">
                <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default FooterSection;
