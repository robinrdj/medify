import React from 'react';
import './FamiliesSection.css';
import { PiHospital } from "react-icons/pi";
import { RiHospitalLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

const FamiliesSection = () => {
    return (
        <div className="families__section">
            <div className="families__content">
                <h3>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h3>
                <h1>Our Families</h1>
                <p>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
            <div className="families__cards">
                <div className="families__card__left">
                <div className="families__card">
                    <FaHandHoldingHeart className='families_icons families_icon1'/>
                    <h2>5000+</h2>
                    <h3>Happy Patients</h3>
                </div>
                <div className="families__card">
                    <PiHospital className='families_icons families_icon2' />
                    <h2>200+</h2>
                    <h3>Hospitals</h3>
                </div>
                </div>
                <div className="families__card__right">
                <div className="families__card">
                    <RiHospitalLine className='families_icons families_icon3' />
                    <h2>1000+</h2>
                    <h3>Laboratories</h3>
                </div>
                <div className="families__card">
                    <FaUserDoctor className='families_icons families_icon4' />
                    <h2>700+</h2>
                    <h3>Expert Doctors</h3>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FamiliesSection;
