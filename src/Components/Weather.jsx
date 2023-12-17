// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function WeatherComponent() {
//     const [weatherData, setWeatherData] = useState(null);
//     const API_KEY = 'df48fd64b1121cfc17e8b62e80c1fca1';  // API_KEY' from OpenWeatherMap
//     const CITY = 'Auckland';  // I have made it Auckland as dynamic

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
//                 setWeatherData(response.data);
//             } catch (error) {
//                 console.error("Error fetching the weather data", error);
//             }
//         };
//         fetchData();
//     }, []);

//     if (!weatherData) return <p>Loading...</p>;

//     return (
//         <div>
//             <h3>{weatherData.name}</h3>
//             <p>Today: {weatherData.weather[0].description}</p>
//             <p>Temperature: {weatherData.main.temp}°C</p>
//             <p>Humidity: {weatherData.main.humidity}%</p>
//             {/* Add more weather details if needed */}
//         </div>
//     );
// }

// export default WeatherComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = 'df48fd64b1121cfc17e8b62e80c1fca1';
    const CITY = 'Auckland';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error fetching the weather data", error);
            }
        };
        fetchData();
    }, []);

    if (!weatherData) return <p>Loading...</p>;

    return (
        <div className="weather-component">
            <h3>{weatherData.name}</h3>
            <p>Today: {weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            {/* Add more weather details if needed */}
        </div>
    );
}

export default WeatherComponent;
