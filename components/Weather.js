import React from 'react'
import WeatherCurrentCard from './WeatherCurrentCard'
import WeatherForecastCard from './WeatherForecastCard'
import { useWeather } from '../hooks/useWeather'
import Loading from './Loading'

const Weather = () => {
  const { currentWeather, forecastWeather, isLoading, isError } = useWeather('weather')

  if (isLoading || isError) return <Loading />

  return (
    <div className="border-r border-gray-500 p-3 h-auto overflow-hidden w-full divide-y-2 divide-gray-400">
      <WeatherCurrentCard weather={currentWeather} />
      <WeatherForecastCard weather={forecastWeather} />
    </div>
  )
}

export default Weather
