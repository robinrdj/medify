import React, { useState, useEffect } from 'react';
import { FaUserMd, FaFlask, FaHospital, FaPills, FaAmbulance } from 'react-icons/fa';
import './SearchSection.css';
import axios from "axios";
const SearchSection = () => {

  const [states,setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [city,setCity] = useState("");
  const [state, setState] = useState("");

  const statesUrl = "https://meddata-backend.onrender.com/states";

  async function setAllStates(){
    try{
      const res = await axios.get(statesUrl);
      setStates(res.data);
    }catch(e){
      console.log(e);
    }
  }
  async function setAllCities(state){
    try{
      const res = await axios.get(`https://meddata-backend.onrender.com/cities/${state}`);
      setCities(res.data);
    }catch(e){
      console.log(e);
    }
  }
  function handleStateChange(e){
    setState(e.target.value);
    setAllCities(e.target.value);
  }
  function handleCityChange(e){
   setCity(e.target.value);
  }
  async function searchAns(){
    try{
      const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
    }catch(e){
      console.log(e);
    }
  }  
  const handleSearch = () => {
    searchAns();
    localStorage.setItem("city",city);
    localStorage.setItem("state",state);
  };

  useEffect(()=>{
    setAllStates();
  },[]);

  return (
    <div className="search">
      <div className="search__inputs">
     <select value={state} onChange={handleStateChange} className="search__input__field" >
      <option value="">Select State</option>
        {states.map((item)=>{
            return <option key={item} value={item}>{item}</option>
        })}
      </select>
      <select value={city} onChange={handleCityChange} disabled={state.length===0} className="search__input__field">
      <option value="">Select City</option>
        {cities.map((item)=>{
          return <option key={item} value={item}>{item}</option>
        })}
      </select>

        <button onClick={handleSearch} className="search__button"><a href="/search" style={{textDecoration:"none"}}>Search</a></button>
      </div>

      <h3>You may be looking for</h3>
      <div className="search__categories">
        <div className="search__categories__item">
          <FaUserMd size={40} color="#2AA8FF" />
          <p>Doctors</p>
        </div>
        <div className="search__categories__item">
          <FaFlask size={40} color="#2AA8FF" />
          <p>Labs</p>
        </div>
        <div className="search__categories__item">
          <FaHospital size={40} color="#2AA8FF" />
          <p>Hospitals</p>
        </div>
        <div className="search__categories__item">
          <FaPills size={40} color="#2AA8FF" />
          <p>Medical Store</p>
        </div>
        <div className="search__categories__item">
          <FaAmbulance size={40} color="#2AA8FF" />
          <p>Ambulance</p>
        </div>
      </div>
  
    </div>
  );
};

export default SearchSection;
