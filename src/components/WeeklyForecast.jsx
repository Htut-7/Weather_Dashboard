import "../css/WeeklyForecast.css";
import { WiDaySunny,WiCloud,WiRain,WiThunderstorm,WiSnow,WiFog } from "react-icons/wi";

export default function WeeklyForecast({forecast}) {

  if(!forecast || forecast.length===0)
    return <h3>No Weekly Forecast data...</h3>

  const getforecastIcon=(condition)=>{
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
    <div className="weekly-forecast">
      <h3>7-day Forecast</h3>

      <div className="weekly-container">
        {forecast.slice(0,7).map((item,index)=>
          <div className="weekly-item" key={index}>
            <p className="day">
              {new Date(item.dt_txt).toLocaleDateString('en-Us',{
                weekday: 'short'
              })}
            </p>

            <div className="weekly-weather">
              {getforecastIcon(item.weather[0].main)}

              <span>{item.weather[0].main}</span>              
              </div> 

              <h2>{Math.round(item.main.temp)}°</h2>
          </div>
        )}
      </div>
    </div>
  )
}
