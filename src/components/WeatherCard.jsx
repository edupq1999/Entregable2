import React, { useState } from 'react'
import './CSS/WeatherCard.css'

const WeatherCard = ({weather, temperature}) => {
    
  const [isCelsius, setIsCelsius] = useState(true)

  const ChangeTemp = () => setIsCelsius(!isCelsius)
  console.log(weather)
  return (
    <article className='weather'>
      <section className='weather_tittle'>
        <h1>Weather App</h1>
        <h2>{`${weather?.name}`}, {`${weather?.sys.country}`}</h2>
      </section>
      <section className='weather_info'>
        <div className='weather_info_img'>
          <img src= {weather ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ''} alt="weather img" />
          <p>Temperature: {isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</p>
          <p>Max. Temperature: {isCelsius ? `${temperature?.celsius_max} °C` : `${temperature?.farenheit_max} °F`}</p>
          <p>Min. Temperature: {isCelsius ? `${temperature?.celsius_min} °C` : `${temperature?.farenheit_min} °F`}</p>
        </div>
        <ul className='weather_info_more'>  
          <li>"{`${weather?.weather[0].description}`}"</li>
          <li>Humidity: {`${weather?.main.humidity}`} %</li>
          <li>Wind Speed: {`${weather?.wind.speed}`} m/s</li>
          <li>Clouds: {`${weather?.clouds.all}`} %</li>
          <li>Pressure: {`${weather?.main.pressure}`} hPa</li>
        </ul>
      </section>
      <button onClick={ChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherCard