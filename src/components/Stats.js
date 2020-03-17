import React from "react"
import useStats from './useStats'
import moment from 'moment'
export default function Stats({ url }) {
    const { stats } = useStats(url)
    if (!stats) return <p>Loading...</p>
    
    return (
        <div className="container mt-3 card-deck">
            
        <div className="card  mb-3" >
            <div className="card-header bg-primary text-white">Confirmed</div>
            <div className="card-body">
                <h5 className="card-title">{stats.confirmed.value}</h5>
                <h6 className="seondary"><small>
                    {moment(stats.lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a") }
                    </small>    
                </h6>

            </div>
        </div>
        <div className="card mb-3" >
            <div className="card-header text-white bg-info">Recovered</div>
            <div className="card-body">
                <h5 className="card-title">{stats.recovered.value}</h5>
            </div>
        </div>
        <div className="card  mb-3" >
            <div className="card-header bg-danger text-white">Deaths</div>
            <div className="card-body">
                <h5 className="card-title">{stats.deaths.value}</h5>
            </div>


        </div>
        </div>
    )
}