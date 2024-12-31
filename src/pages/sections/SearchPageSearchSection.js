import React, { useState, useEffect } from 'react';
import './SearchPageSearchSection.css';
import axios from "axios";
import UpdatedResultCard from "../components/UpdatedResultCard";
import FixedContent from '../components/FixedContent';


const SearchPageSearchSection = () => {
  const [states,setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [city,setCity] = useState("");
  const [state, setState] = useState("");

  const [medicalCenters, setMedicalCenters] = useState([]);

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

  useEffect(()=>{
      setAllCities();
  },[]);


  async function searchAns(){
    try{
      const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
      console.log(state);
      setMedicalCenters(res.data);
    }catch(e){
      console.log(e);
    }
  }


  const handleSearch = () => {
    searchAns();
  };

  useEffect(()=>{
    setAllStates();
  },[]);

  return (
    <div className="search__top">
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
        <button onClick={handleSearch} className="search__button">Search</button>
      </div>

      <div>
      <div className='searchResultContent'>
        <div className='medicalCenter__card'> 
        {medicalCenters.map(center => (
          <div key={center["Provider ID"]} >
            <UpdatedResultCard 
              hospitalName={center["Hospital Name"]} 
              city={center["City"]}
              state={center["State"]}
              location={center["Address"]}
              description={center["Hospital Ownership"]}
              fee={500}
              availability={true}
              buttonText={"Book FREE Center Visit"}
              rating={center["Hospital overall rating"]}
              onClick={true}
              isExpanded={true}
            />
          </div>
        ))}
        </div>
        <div className="fixedCard__Wrapper">
        <div className='fixedCard' style={{display:medicalCenters.length==0?"none":"block"}}>
            <FixedContent />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageSearchSection;
