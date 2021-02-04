import { useParks, getParks } from "./parks/ParkProvider.js"

getParks()
.then(() => {
    const parkData = useParks()
    console.log(parkData)
})
 