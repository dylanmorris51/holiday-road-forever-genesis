import { useParks } from './ParkProvider.js'
import { WeatherPreview } from '../weather/WeatherPreview.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("park__card")

eventHub.addEventListener("parkSelect"), showParkEvent => {
    if (showParkEvent.detail.value )
}
