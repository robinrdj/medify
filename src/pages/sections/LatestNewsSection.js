import React from 'react';
import './LatestNewsSection.css';
import LatestNews from "../../Assets/LatestNews.png";
import NewsDoctor from "../../Assets/newsDoctor.png";


const Card = () => {
    return (
        <div className="news__card">
            <img src={LatestNews} alt="new alt" className="news__img"/>
            <div className="news__content">
                <div className="news__date">
                    <p>Medical</p>
                    <p>March 31, 2022</p>
                </div>
                <h2>6 Tips To Protect Your Mental Health When You're Sick</h2>
                <div className='news__author'>
                <img src={NewsDoctor} alt="news doctor" className='news__doctor__img'/>
                <p >Rebecca Lee</p>
                </div>

            </div>
        </div>
    );
};

const LatestNewsSection = () => {
    return (
        <div className="news">
            <h3>Blog & News</h3>
            <h1>Read Our Latest News</h1>
            <div className="news__cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};



export default LatestNewsSection;
