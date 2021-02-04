import { useParks, getParks } from "./parks/ParkProvider.js"
import './weather/WeatherProvider.js'
import { useWeather, getWeather } from "./weather/WeatherProvider.js"

getParks()
.then(() => {
    const parkData = useParks()
    console.log(parkData)
})

getWeather()
    .then(() => {
        const weatherData = useWeather()
        console.log('weatherData: ', weatherData);
    })

    // const taco = {
    //     lat: "44.409286",
    //     long: "-68.247501"
    // }