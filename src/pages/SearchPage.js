import "./SearchPage.css";
import React from 'react';

import FooterSection from './sections/FooterSection';
import DownloadSection from './sections/DownloadSection';
import QuestionsSection from "./sections/QuestionsSection";
import NavbarSection from './sections/NavbarSection';


import SearchPageSearchSection from "./sections/SearchPageSearchSection";

function SearchPage() {
  return (
    <div>
      <NavbarSection />
      <SearchPageSearchSection />
      <QuestionsSection />
      <DownloadSection />
      <FooterSection />      
    </div>
  )
}

export default SearchPage