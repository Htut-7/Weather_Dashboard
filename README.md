# Weather Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Design-success?style=for-the-badge)

</div>

A modern weather dashboard built with React and OpenWeather API. The application provides real-time weather information, hourly forecasts, weekly forecasts, and air condition details with a clean responsive UI.

---

## Features

* Real-time weather data
* Dynamic weather icons
* Hourly forecast section
* Weekly forecast section
* Air conditions display
* Responsive dashboard layout
* Search weather by city
* Modern dark UI design

---

## Tech Stack

| Technology      | Usage                   |
| --------------- | ----------------------- |
| React           | Frontend Library        |
| Vite            | Development Environment |
| CSS3            | Styling                 |
| React Icons     | Weather Icons           |
| OpenWeather API | Weather Data            |

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/weather-dashboard.git
```

Navigate to the project folder:

```bash
cd weather-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key
```

---

## Project Structure

```bash
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── SearchBar.jsx
│   ├── MainWeather.jsx
│   ├── HourlyForecast.jsx
│   ├── WeeklyForecast.jsx
│   └── Airconditions.jsx
│
├── css/
│
├── App.jsx
└── main.jsx
```

---

## API

This project uses the OpenWeather API for:

* Current weather data
* Hourly forecast
* Weekly forecast

Official API Documentation:

https://openweathermap.org/api

---

## Future Improvements

* Loading states
* Error handling
* Geolocation support
* Search history
* Dynamic backgrounds
* Theme switcher
* Weather animations

---

## License

This project is licensed under the MIT License.
