import { saveItinerary } from "./ItineraryProvider.js"
import { useEateries } from "./EateryProvider.js"
import { useAttractions } from "./AttractionProvider.js"
import { useParks } from './ParkProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".save__itenerary__button")


export const ShowItineraryButton = () => {
    contentTarget.innerHTML = "<button id='showItinerary'> Save Itinerary! </button>"
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showItinerary") {
        clickEvent.preventDefault()

        const attractionsArray = useAttractions()
        const attractionObj = attractionsArray.find((attractionObj) => {
            return attractionObj.id === parseInt(attractionId)
        })
        const attractionId = document.querySelector("#attractionSelect").value

        const eateryId = document.querySelector("#eaterySelect").value
        const eateryObj = eateryArray.find((eateryObj) => {
            return eateryObj.id === parseInt(eateryId)
        })

        const parkId = document.querySelector("#parkSelect").value
        const parkObj = parkArray.find((parkObj) => {
            return parkObj.id === parkId
        })

    
        const newItinerary = {
        "park": parkObj.fullName,
        "eatery": eateryObj.businessName,
        "attraction": attractionObj.name,
        }
        
        saveItinerary(newItinerary)
    }
})
