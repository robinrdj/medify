import React from 'react';

import FooterSection from './sections/FooterSection';
import DownloadSection from './sections/DownloadSection';
import QuestionsSection from "./sections/QuestionsSection";
import FamiliesSection from './sections/FamiliesSection';
import LatestNewsSection from './sections/LatestNewsSection';
import PatientCaringSection from './sections/PatientCaringSection';
import MedicalSpecialistSection from './sections/MedicalSpecialistSection';
import NavbarSection from './sections/NavbarSection';
import SearchSection from './sections/SearchSection';
import SpecializationSection from './sections/SpecializationSection';
import HeroSection from './sections/HeroSection';
import SwiperSection from "./sections/SwiperSection";
import SearchPageSearchSection from './sections/SearchPageSearchSection';

const HomePage = () => {

  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <SearchSection/>
      <SearchPageSearchSection />
      <SwiperSection />
      <SpecializationSection />
      <MedicalSpecialistSection />
      <PatientCaringSection />
      <LatestNewsSection />
      <FamiliesSection />
      <QuestionsSection />
      <DownloadSection />
      <FooterSection />    
    </div>
  );
};

export default HomePage;
