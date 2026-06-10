# Weather Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![OpenWeather API](https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge)

</div>

## Overview

Weather Dashboard is a responsive weather application built with React and Vite. The application fetches real-time weather information from the OpenWeather API and presents current weather conditions, hourly forecasts, weekly forecasts, and air condition details through a clean and modern user interface.

## Features

* Search weather by city name
* Real-time weather information
* Current temperature and weather conditions
* Hourly forecast
* Weekly forecast
* Air condition details
* Dynamic weather icons
* Responsive design
* Modern dashboard UI

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

Create a `.env` file in the project root:

```env
VITE_API_KEY=your_openweather_api_key
```

Update the API key in `App.jsx`:

```javascript
const API_KEY = import.meta.env.VITE_API_KEY;
```

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
* Fetching and handling external API data
* Working with asynchronous JavaScript
* Creating responsive layouts with CSS
* Displaying dynamic data in a user-friendly interface

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
