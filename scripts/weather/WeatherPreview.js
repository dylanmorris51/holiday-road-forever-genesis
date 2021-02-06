import { useParks, getParks } from '../parks/ParkProvider.js'
import { Weather } from './Weather.js'
import { getWeather, useWeather } from './WeatherProvider.js'

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".weather__container")

const render = (weatherArray) => {

    let weatherPreviewHTML = ""

    for (const weather of weatherCollection) {
    weatherPreviewHTML += Weather(weather)

    contentTarget.innerHTML = `
        <h2>Five Day Forecast</h2>
        <div class="daily__weather">
        ${weatherPreviewHTML}
        </div>
    `}
}

export const WeatherPreview = () => {
    getWeather(park)
    .then(() => {
        const weatherArray = useWeather()
        render(weatherArray)
    })
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
