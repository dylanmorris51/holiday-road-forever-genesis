<<<<<<< HEAD
import { parkSelect } from "./parks/ParkSelect.js"


parkSelect()
=======
// import { useParks, getParks } from "./parks/ParkProvider.js"

// getParks()
// .then(() => {
//     const parkData = useParks()
//     console.log(parkData)
// })
 
import { useWeather, getWeather} from "./weather/WeatherProvider.js"

getWeather()
.then(() => {
    const weather = useWeather()
    console.log(weather)
})
 
>>>>>>> main
