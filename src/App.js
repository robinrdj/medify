import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import BookingPage from './pages/BookingPage';
import SearchSection from './pages/sections/SearchSection';
function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/searchSection" element={<SearchSection />} />
        
      </Routes>
    </div>
  )
}

export default App