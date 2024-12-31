import React from 'react';
import './QuestionsSection.css';
import QstImg from "../../Assets/Questions.png"

const QuestionsSection = () => {
    return (
        <div className="questions">
            <h3>Get Your Answer</h3>
            <h1>Frequently Asked Questions</h1>
            <div className="questions__content">
                <img src={QstImg} alt="Doctor with patient" className="questions__image"/>
                <div className="questions__list">
                    <div className="questions__qst">
                        <p>Why choose our medical for your family?</p>
                        <span>+</span>
                    </div>
                    <div className="questions__qst">
                        <p>Why we are different from others?</p>
                        <span>+</span>
                    </div>
                    <div className="questions__qst">
                        <p>Trusted & experience senior care & love</p>
                        <span>+</span>
                    </div>
                    <div className="questions__qst">
                        <p>How to get appointment for emergency cases?</p>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsSection;
