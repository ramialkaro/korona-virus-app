import React from "react"
import useStats from './useStats'
import moment from 'moment'
import i18n from "i18next";
import { resources } from '../resoureces'
i18n.init({
    resources
});
export default function Stats({ url }) {
    const { stats } = useStats(url)
    if (!stats) return <p>Loading...</p>

    return (
        <div className="container mt-3 card-deck">

            <div className="card  mb-3" >
                <div className="card-header bg-primary text-white">{i18n.t('Confirmed')} <span style={{fontSize:'11pt'}}>100%</span></div>
                <div className="card-body">
                    {(stats.confirmed === undefined) ? <h5>{i18n.t('Error')}</h5> :
                        <>
                            <h5 className="card-title">{stats.confirmed.value} </h5>
                            <h6 className="seondary"><small>
                                {moment(stats.lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a")}

                            </small>
                            </h6>
                        </>
                    }
                </div>
            </div>
            <div className="card mb-3" >
                <div className="card-header text-white bg-info">{i18n.t('Active')}  <span style={{fontSize:'12pt'}}>{Math.round(((stats.confirmed.value - (stats.recovered.value+stats.deaths.value))/stats.confirmed.value)*1000)/10}%</span></div>
                <div className="card-body">
                    {(stats.confirmed === undefined) ? <h5>{i18n.t('Error')}</h5> :
                        <h5 className="card-title">{stats.confirmed.value - (stats.recovered.value+stats.deaths.value)}</h5>}
                </div>
            </div>
            <div className="card mb-3 alert-success" >
                <div className="card-header text-white bg-success">{i18n.t('Recovered')} <span style={{fontSize:'12pt'}}>{Math.round((stats.recovered.value/stats.confirmed.value)*1000)/10}%</span></div>
                <div className="card-body">
                    {(stats.confirmed === undefined) ? <h5>{i18n.t('Error')}</h5> :
                        <h5 className="card-title">{stats.recovered.value}</h5>}
                </div>
            </div>
            <div className="card  mb-3 alert-danger" >
                <div className="card-header bg-danger text-white">{i18n.t('Deaths')} <span style={{fontSize:'12pt'}}>{Math.round((stats.deaths.value/stats.confirmed.value)*1000)/10}%</span></div>
                <div className="card-body">
                    {(stats.confirmed === undefined) ? <h5>{i18n.t('Error')}</h5> :
                        <h5 className="card-title">{stats.deaths.value}</h5>}
                </div>


            </div>
        </div>
    )
}