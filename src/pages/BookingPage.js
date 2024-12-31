import "./SearchPage.css";
import React,{useState, useEffect} from 'react';

import FooterSection from './sections/FooterSection';
import DownloadSection from './sections/DownloadSection';
import NavbarSection from './sections/NavbarSection';
import BookingSection from "./sections/BookingSection";


function BookingPage() {
  return (
    <div>
      <NavbarSection />
      <BookingSection />
      <DownloadSection />
      <FooterSection />      
    </div>
  )
}

export default BookingPage;