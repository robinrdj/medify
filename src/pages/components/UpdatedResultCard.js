import React,{useState} from 'react';
import './UpdatedResultCard.css';
import hospitalImg from '../../Assets/hospital.png';
import { IoMdThumbsUp } from "react-icons/io";
import Slot from '../sections/Slot';

const UpdatedResultCard = ({
  hospitalName,
  state,
  city,
  location,
  description,
  fee,
  availability,
  buttonText,
  rating,
  isBooking=false,
  time,
  date,
  slot
}) => {
  const [showSlot, setShowSlot] = useState(false);
  const storeInLocal = (formattedDate,slot)=>{
    let existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    let cardDetails = {hospitalName,state, city,description,location, fee, availability, buttonText,rating, time, date};
    existingBookings.push({ cardDetails, formattedDate, slot });
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
  }
  return (
    <div>
    <div className='resultCard'>
     <div className='resultCard__left'>
        <div className="resultCard__img">
          <img src={hospitalImg} alt="Hospital Img" />
        </div>
     </div>
     <div className='resultCard__middle'>
     <div className="hospital__info">
          <p className='hospital__name'>{hospitalName}</p>
          <p className="hospital__location"><span>{city},</span><span>{state}</span></p>
          <p className="hospital__description">{description}</p>
        </div>
        {!isBooking?  <div className="hospital__fee">
          <span className="fee">FREE</span>
          <span className="original__fee">{fee} ₹ </span>
          <span>consultation fee at clinic</span>
        </div>:""}
        <div className="resultCard__rating">
          <span role="img" aria-label="rating"><IoMdThumbsUp /></span> {rating}
        </div>
        </div>
     <div className='resultCard__right'>
      {isBooking?       <div style={{display:"flex",flexDirection:"row"}}>
       <p style={{border:"1px solid blue",width:"130px", marginRight:"10px"}}>{slot}</p>
       <p style={{border:"1px solid green",width:"130px"}}>{date}</p>
       </div>:
             <div className="availability">
               {availability ? "Available Today" : "Not Available"}
             </div>
       }
 {!isBooking? 
        <button className="resultCard__button" onClick={()=>{setShowSlot(!showSlot)}}>{buttonText}</button>
:""}

     </div>
    </div>
    {showSlot?<Slot  storeInLocal={storeInLocal}/>:""}
   </div>
  );
};

export default UpdatedResultCard;
