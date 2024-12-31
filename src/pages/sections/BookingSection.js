import React, { useState, useEffect } from 'react';
import './SearchPageSearchSection.css';
import axios from "axios";
import UpdatedResultCard from "../components/UpdatedResultCard";
import FixedContent from '../components/FixedContent';




const BookingSection = () => {

  const [bookings, setBookings] = useState([]);
  useEffect(()=>{
    let existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      setBookings(existingBookings);
      let bookingsArr = [];
 
  },[]);

  return (
    <div className="search__top">
      <div>
      <div className='searchResultContent'>
        <div className='medicalCenter__card'> 
        {bookings.map((center) => {
           let centeDetails = center["cardDetails"];
          return <div key={centeDetails["Provider ID"]} >
            <UpdatedResultCard 
              hospitalName={centeDetails.hospitalName} 
              city={centeDetails.city}
              state={centeDetails.state}
              location={centeDetails.location}
              description={centeDetails.description}
              fee={500}
              availability={true}
              buttonText={"Book FREE Center Visit"}
              rating={centeDetails.rating}
              onClick={true}
              isExpanded={true}
              isBooking={true}
              time={centeDetails.time}
              date={center.formattedDate}
              slot = {center.slot}
            />
          </div>
})}
        </div>
        <div className="fixedCard__Wrapper">
        <div className='fixedCard' style={{display:bookings.length==0?"none":"block"}}>
            <FixedContent />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
