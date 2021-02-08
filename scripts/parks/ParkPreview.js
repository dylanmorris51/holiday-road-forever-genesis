import { useParks } from './ParkProvider.js'
import './ParkSelect.js'
import { WeatherPreview } from '../weather/WeatherPreview.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".park__card")


eventHub.addEventListener("parkSelected", parkChosenEvent => {
    if (parkChosenEvent.detail.parkThatWasChosen !== "0") {
    
        const parksArray = useParks()
        const parkSelection = parksArray.find((parkObj) => {
            return parkObj.id === parkChosenEvent.detail.parkThatWasChosen
        })
        renderPark(parkSelection)
        }
    })

const renderPark = (parkObj) => {

    contentTarget.innerHTML = `
    <div class="park_name">${parkObj.fullName}</div>
    <div class="park_state">${parkObj.states}</div>
    `
}