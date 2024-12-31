import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bookings" element={<BookingPage />} />
      </Routes>
    </div>
  )
}

export default App