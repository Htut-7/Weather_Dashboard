# Weather Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![OpenWeather API](https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge)

</div>

## Overview

Weather Dashboard is a modern and responsive weather application built with React and Vite. The application uses the OpenWeather API to provide real-time weather information, including current weather conditions, hourly forecasts, weekly forecasts, and air condition details for cities worldwide.

## Features

* Search weather by city name
* Real-time weather information
* Current temperature and weather conditions
* Hourly weather forecast
* Weekly weather forecast
* Air condition details
* Dynamic weather icons
* Responsive design for desktop and mobile devices
* Clean and modern user interface

## Technologies Used

* React
* Vite
* CSS3
* React Icons
* OpenWeather API

## Installation

Clone the repository:

```bash
git clone https://github.com/Htut-7/Weather_Dashboard.git
```

Navigate to the project directory:

```bash
cd Weather_Dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the project root and add your OpenWeather API key:

```env
VITE_API_KEY=your_openweather_api_key
```

You can obtain a free API key from:

https://openweathermap.org/api

## Project Structure

```bash
src/
├── components/
│   ├── Sidebar.jsx
│   ├── SearchBar.jsx
│   ├── MainWeather.jsx
│   ├── HourlyForecast.jsx
│   ├── WeeklyForecast.jsx
│   └── Airconditions.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## Learning Outcomes

This project helped strengthen skills in:

* Building reusable React components
* Managing state with React Hooks
* Working with external APIs
* Handling asynchronous data fetching
* Creating responsive user interfaces
* Displaying dynamic data effectively

## Future Improvements

* Geolocation support
* Search history
* Loading states and skeleton loaders
* Enhanced error handling
* Dark and light mode toggle
* Dynamic weather backgrounds
* Weather alerts and notifications

## Author

**Sithu Htut**

GitHub: https://github.com/Htut-7
