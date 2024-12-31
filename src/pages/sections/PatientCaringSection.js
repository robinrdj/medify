import React from 'react';
import './PatientCaringSection.css';
import TickImg from "../../Assets/tick.png";
import CaringImg1 from "../../Assets/caringImg1.png";
import CaringImg2 from "../../Assets/caringImg2.png";
import CallImg from "../../Assets/CallImg.png";

const PatientCaringSection = () => {
    return (
        <div className="patient__caring__section">
            <div className="caring__full__content">
                <div>
                <div className="free__consultation">
                        <div className='free__consultation__firstLine'>
                        <img src={CallImg} alt="call img" className='callImg' />
                        <p> Free Consultation</p>
                        </div>
                        <p className='consultation__msg'>Consultation with the best</p>
                    </div>
                    <img src={CaringImg1} alt="Doctor Consultation" className="caring__image1"/>
                    <img src={CaringImg2} alt="Doctor with Patient" className="caring__image2"/>
                  
                </div>
                <div className="caring__contents">
                    <h3>Helping Patients From Around the Globe!!</h3>
                    <h1>Patient <span className="blued">Caring</span></h1>
                    <p>Our goal is to deliver quality care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                    <ul className="caring__items">
                        <li><img src={TickImg} alt="tickImage" /> Stay Updated About Your Health</li>
                        <li><img src={TickImg} alt="tickImage" /> Check Your Results Online</li>
                        <li><img src={TickImg} alt="tickImage" /> Manage Your Appointments</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PatientCaringSection;
