// import { useParks, getParks } from "./parks/ParkProvider.js"

// getParks()
// .then(() => {
//     const parkData = useParks()
//     console.log(parkData)
// })
 
import { useWeather, getWeather} from "./weather/WeatherProvider.js"
import { attractionSelect } from "./attractions/AttractionsSelect.js"

attractionSelect()

getWeather()
.then(() => {
    const weather = useWeather()
    console.log(weather)
})
 