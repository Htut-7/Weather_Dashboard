import "../css/MainWeather.css";
import { WiDaySunny,WiCloud,WiRain,WiThunderstorm,WiSnow,WiFog } from "react-icons/wi";

export default function MainWeather({weather}) {

  if(!weather)
    return <h1>No Weather Data...</h1>;

  const condition=weather.weather[0].main

  const getWeatherIcon=()=>{
    switch(condition){
      case "Clear":
        return <WiDaySunny className="weather-icons"/>

      case "Clouds":
        return <WiCloud className="weather-icons"/>

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
    <div className="main-weather">
     <div className="weather-details">
      <h1>{weather.name}</h1>

      <p className="weather-conditions">
        {weather.weather[0].main}
      </p>

      <h2>
        {Math.round(weather.main.temp)}°
      </h2>
     </div>

     {getWeatherIcon()}
    </div>
  )
}
