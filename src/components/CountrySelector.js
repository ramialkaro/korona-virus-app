import React, { useState, useEffect } from 'react';
import useStats from './useStats';
import Stats from './Stats';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import axios from 'axios'
i18n.dir('ar');

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('Iraq');
  useEffect(()=>{
    axios.get('http://ip-api.com/json').then(res=> setSelectedCountry(res.data.country)) 
  },[])
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  
  return (

    <>
      {
        i18n.use(LanguageDetector).language === 'ar' ?
          <h2>{selectedCountry} {i18n.t('Currently Showing')} </h2> :
          <h2>{i18n.t('Currently Showing')} {selectedCountry}</h2>
      }
      <select
        value={selectedCountry}
        className="form-control form-control-lg m-3"
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.countries.map((item) => (
          <option

            key={item.name}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </select>

      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>

    </>
  );
}