import "../css/HourlyForecast.css";
import { WiDaySunny,WiCloud,WiRain,WiThunderstorm,WiSnow,WiFog } from "react-icons/wi";

export default function HourlyForecast({forecast}) {

  if(!forecast || forecast.length===0)
    return <h1>No Forecast Data...</h1>

  const getweatherIcons=(condition)=>{
    switch(condition){
      case "Clear":
        return <WiDaySunny className="forecast-icon"/>

      case "Clouds":
        return <WiCloud className="forecast-icon"/>

      case "Rain":
        return <WiRain className="weather-icons"/>

      case "Thunderstorm":
        return <WiThunderstorm className="weather-icons"/>

      case "Snow":
        return <WiSnow className="weather-icons"/>

      case "Mist":
      case "Fog":
      case "Haze":
        return <WiFog className="weather-icons"/>

      default :
      return <WiDaySunny className="weather-icons"/>
    }
  }
  
  return (
    <div className="hourly-forecast">
      <h3>Today's Forecast</h3>

      <div className="forecast-container">
        {forecast.slice(0,5).map((item,index)=>
          <div className="forecast-item" key={index}>
            <p>
              {item.dt_txt.split(' ')[1].slice(0,5)}
            </p>

            {getweatherIcons(item.weather[0].main)}

            <h2>
              {Math.round(item.main.temp)}°
            </h2>
          </div> 
        )}
      </div>
    </div>
  )
}
