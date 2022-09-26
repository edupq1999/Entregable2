import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  
  useEffect(() => {
    const success = pos =>{
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  console.log(coords);
  useEffect(() => {
    if (coords){
      const APIKEY = 'eadd5ed6c6e62e7ee2216516a5e61dc2'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const celsius_max = (res.data.main.temp_max - 273.15).toFixed(0)
          const celsius_min = (res.data.main.temp_min - 273.15).toFixed(0)
          const farenheit = celsius * 9 / 5 + 32
          const farenheit_max = celsius_max * 9 / 5 + 32
          const farenheit_min = celsius_min * 9 / 5 + 32
          setTemperature({celsius, celsius_max, celsius_min, farenheit, farenheit_max, farenheit_min})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
            temperature = {temperature}/>
        :
          <Loader />
      }
    </div>
  )
}

export default App
