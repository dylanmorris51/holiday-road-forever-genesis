import { useParks, getParks } from '../parks/ParkProvider.js'
import { Weather } from './Weather.js'
import { getWeather, weather, useWeather } from './WeatherProvider.js'

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".weather__container")

const render = (weatherPreview) => {
    let weatherPreviewHTML = ""
        for (const weatherObj of weatherPreview) {

    weatherPreviewHTML += Weather(weatherObj)

    contentTarget.innerHTML = `
    <h2>Weekly Forecast</h2>
        <div class="daily__weather">
        ${weatherPreviewHTML}
        </div>
    `}
}

export const WeatherList = () => {
        const fiveDayWeather = useWeather()
        render(fiveDayWeather)
    }

eventHub.addEventListener("coordinates", event =>{
    console.log(event.detail.coordinates, "park chosen reaction")

    const weatherCoordinates = event.detail.coordinates
    console.log(weatherCoordinates, "park object")
    getWeather(weatherCoordinates).then(() => {
        console.log(weather, "weather data received")

        WeatherList()
    })
})
