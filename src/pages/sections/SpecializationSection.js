import React from 'react';
import { FaTooth, FaStethoscope, FaHeartbeat, FaMicroscope, FaVial, FaBrain, FaFlask, FaBone } from 'react-icons/fa';
import './SpecializationSection.css';

const specializations = [
  { name: 'Dentistry', icon: <FaTooth size={40} color="#2AA8FF" /> },
  { name: 'Primary Care', icon: <FaStethoscope size={40} color="#2AA8FF" /> },
  { name: 'Cardiology', icon: <FaHeartbeat size={40} color="#2AA8FF" /> },
  { name: 'MRI Resonance', icon: <FaMicroscope size={40} color="#2AA8FF" /> },
  { name: 'Blood Test', icon: <FaVial size={40} color="#2AA8FF" /> },
  { name: 'Psicologist', icon: <FaBrain size={40} color="#2AA8FF" /> },
  { name: 'Laboratory', icon: <FaFlask size={40} color="#2AA8FF" /> },
  { name: 'X-Ray', icon: <FaBone size={40} color="#2AA8FF" /> },
];

const SpecializationSection = () => {
  return (
    <div className="specialization">
      <h2 className="specialization__title">Find By Specialisation</h2>
      <div className="specialization__grid">
        {specializations.map((item, index) => (
          <div key={index} className="specialization__card">
            <div className="specialization__icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <button className="specialization__button">View All</button>
    </div>
  );
};

export default SpecializationSection;
