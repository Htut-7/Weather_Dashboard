import './App.css';
import Sidebar from './components/Sidebar';
import Airconditions from './components/Airconditions';
import MainWeather from "./components/MainWeather";
import SearchBar from "./components/SearchBar";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import { useState } from 'react';

function App() {

  let [weather,setWeather]=useState(null);
  let [forecast,setForecast]=useState([])

  const API_KEY='54783f9e9e1251a657a2adb6115f13a6'

  const getWeather=async(city)=>{
    try{
      const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data=await res.json();
    setWeather(data);
    console.log(data);

      const forecastRes=await fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const forecastData=await forecastRes.json();
      setForecast(forecastData.list);
      console.log(forecastData.list);

    }catch(error){
      console.log(error);
    }
  }

  return(
    <div className='app'>
      <Sidebar/>

      <div className='weather-container'>
        <SearchBar getWeather={getWeather}/>

       <div className='weather-layout'>
         <div className='left-section'>
          <MainWeather weather={weather}/>
          <HourlyForecast forecast={forecast}/>
          <Airconditions weather={weather}/>
        </div>

        <div className='right-sesction'>
          <WeeklyForecast forecast={forecast}/>
        </div>
       </div>
      </div>
    </div>
  )
  
}

export default App
