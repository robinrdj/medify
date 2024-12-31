import React,{useState} from 'react';
import './DownloadSection.css';
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { TbBrandApple } from "react-icons/tb";
import phoneInside from '../../Assets/phoneInside.png';
import phoneOutside from '../../Assets/phoneOutside.png';

const DownloadSection = () => {
    const [input, setInput] = useState("");
    return (
        <div className="download">
            <div className="download__img">
            <div className="phones">
                <div className="phone__container phone__left">
                <img src={phoneOutside} alt="Phone Frame" className="phone__frame" />
                <img src={phoneInside} alt="Phone Screen" className="phone__inside" />
                </div>
                <div className="phone__container phone__right">
                <img src={phoneOutside} alt="Phone Frame" className="phone__frame" />
                <img src={phoneInside} alt="Phone Screen" className="phone__inside" />
                </div>
            </div>
            </div>
            <div className="download__texts">
                <h2>Download the <span className="blueInk">Medify</span> App</h2>
                <div className="sms__section">
                    <p>Get the link to download the app</p>
                    <div className="sms__input">
                        <input type="text" placeholder="+91 Enter phone number" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                        <button>Send SMS</button>
                    </div>
                </div>
                <div className="download__links">
                    <button><PiGooglePlayLogoLight className="download__icons"/> Google Play</button>
                    <button><TbBrandApple className="download__icons"/> App Store</button>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
