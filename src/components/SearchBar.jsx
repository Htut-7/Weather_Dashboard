import "../css/SearchBar.css";
import { useState } from "react";

export default function SearchBar({getWeather}) {

  let [city,setCity]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(city.trim()==='')
      return;
    getWeather(city);
    setCity('');
  }

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
        <input type='text' placeholder="Search for Cities" onChange={(e)=>setCity(e.target.value)} value={city}/>
        <button type='submit'>Search</button>
    </form>
  )
}
