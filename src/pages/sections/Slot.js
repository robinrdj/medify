import React, { useState } from "react";
import "./Slot.css";

const Slot = ({storeInLocal}) => {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState("");

  const dates = [
    { label: "Today", slots: 11 },
    { label: "Tomorrow", slots: 11 },
    { label: "Day after Tomorrow", slots: 11 },
  ];

  const timeSlots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  
  const getFormattedDate = (date) => {
    const day = date.getDate();
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthName[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSlotClicking =(slot,period)=>{
    setSelectedSlot(slot);
    const today = new Date();

    if(selectedDate==="Today"){
      storeInLocal(getFormattedDate(today),slot);
    }
    else if(selectedDate==="Tomorrow"){
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + 1);
      storeInLocal(getFormattedDate(nextDay),slot);
    }else{
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(today.getDate() + 2);
      storeInLocal(getFormattedDate(dayAfterTomorrow),slot);
    }
  
  }

  return (
    <div className="slot__selector">
      <div className="date__navigation">
        {dates.map((date) => (
          <div
            key={date.label}
            className={`date__item ${selectedDate === date.label ? "active" : ""}`}
            onClick={() => setSelectedDate(date.label)}
          >
            <div className="date__label">{date.label}</div>
            <div className="date__slots">{date.slots} Slots Available</div>
          </div>
        ))}
      </div>
      <div className="time__slots">
        {Object.keys(timeSlots).map((period) => (
          <div key={period} className="time__period">
            <h4 className="period__title">{period}</h4>
            <div className="slots__container">
              {timeSlots[period].map((slot) => (
                <button
                  key={slot}
                  className={`slot__button ${selectedSlot === slot ? "selected" : ""}`}
                  onClick={() => handleSlotClicking(slot,period)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slot;
