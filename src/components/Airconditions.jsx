import "../css/AirCondition.css";
import { WiHumidity, WiThermometer, WiRaindrop, WiStrongWind } from "react-icons/wi";

export default function Airconditions({weather}) {

  if(!weather)
    return <h3>No Air Conditions data...</h3>
    
  return (
    <div className="air-conditions">
      <div className="air-header">
        <h3>Air Conditions</h3>
      </div>

      <div className="condition-grid">
        <div className="condition-card">
          <div className="condition-title">
            <WiThermometer className="condition-icon"/>
            <p>Real Feel</p>
          </div>

          <h2>{Math.round(weather.main.feels_like)}°</h2>
        </div>

      <div className="condition-card">
        <div className="condition-title">
          <WiStrongWind className="condition-icon"/>
          <p>Wind</p>
        </div>

        <h2>{weather.wind.speed}</h2>
      </div>

       <div className="condition-card">
        <div className="condition-title">
          <WiHumidity className="condition-icon"/>
          <p>Chance of Rain</p>
        </div>
        <h2>{weather.main.humidity}%</h2>
      </div>

       <div className="condition-card">
        <div className="condition-title">
          <WiRaindrop className="condition-icon"/>
          <p>Pressure</p>
        </div>
        <h2>{weather.main.pressure}</h2>
      </div>
      </div>     
    </div>
  )
}
