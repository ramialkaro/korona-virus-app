import React,{ useState } from 'react';
import useStats from './useStats';
import Stats from './Stats';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.dir('ar');

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('finland');
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
      className="form-control form-control-lg"
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.countries.map((item) => (
          <option
          defaultValue={selectedCountry}
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