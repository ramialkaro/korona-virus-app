import React, { useState } from 'react';
import './App.css';
import Stats from './components/Stats'
import CountrySelector from './components/CountrySelector'
import i18n from "i18next";
import { resources } from './resoureces'
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment'


// initialize i18next with catalog and language to use
i18n.init({
  resources,
});
console.log(i18n.use(LanguageDetector).language)
i18n.on('languageChanged', function (lng) {
  moment.locale(lng);
})


function App() {

  const [timer, setTimer] = useState(new Date(Date.now()).toLocaleString())
  setTimeout(() => {
    setTimer(new Date(Date.now()).toLocaleString())
  }, 1000)
  
  
  
  return (
    <div className="container text-center">
      <div className="btn-group btn-group-toggle m-3" data-toggle="buttons">
        <button className="btn btn-outline-light bg-success" style={{ minWidth: '4rem' }} onClick={() => i18n.changeLanguage('en')}>en</button>
        <button className="btn btn-outline-light bg-success" style={{ minWidth: '4rem' }} onClick={() => i18n.changeLanguage('fi')}>fi</button>
        <button className="btn btn-outline-light bg-success " style={{ minWidth: '4rem' }} onClick={() => i18n.changeLanguage('ar')}>ع</button>
      </div>

      {
        i18n.use(LanguageDetector).language === 'ar' ?
          <div className="bg-dark text-info m-3 p-3 rounded ">
            {timer} <strong className="text-white">{i18n.t('time')}</strong>
          </div>
          :
          <div className=" bg-dark text-info m-3 p-3 rounded">

            <strong className="text-white">{i18n.t('time')}</strong> {timer}
          </div>
      }

      
      <div className="mt-5 mb-5">
        <h2>{i18n.t('all_world')}</h2>
        <Stats url="https://covid19.mathdro.id/api" />
      </div>
      <CountrySelector />
      <div className="text-primary m-3 ">{i18n.t('coded_by')}</div>
    </div>
    
  );
}

export default (App);   // instead of "export default App;"
