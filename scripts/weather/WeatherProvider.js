import "../parks/Park.js"
import { settings } from '../Settings.js'

export let weather = []

export const getWeather = (parkObj) => {
    const weatherFetchCall = `http://api.openweathermap.org/data/2.5/forecast?lat=${parkObj.lat}&lon=${parkObj.lon}&appid=${settings.weatherKey}&units=imperial`
    // fucntion to find object and pass in object, extract lat and lon (And id) 
    
    return fetch(weatherFetchCall)
        .then(response => response.json())
            .then(parsedWeather => {
                console.log("Weather Data Check", parsedWeather)
                weather = parsedWeather.list
            })
}

export const useWeather = () => {
    return weather.slice()
}