import { saveItinerary } from "./ItineraryProvider.js"
import { useEateries, getEateries } from "../eateries/EateryProvider.js"
import { useAttractions, getAttractions } from "../attractions/AttractionProvider.js"
import { useParks, getParks } from '../parks/ParkProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".save__itenerary__button")

export const ShowItineraryButton = () => {
    // if(document.querySelector("#attractionSelect").value !=="0" && document.querySelector("#eaterySelect").value !== "0" && document.querySelector("#parkSelect").value !== "0"){
    contentTarget.innerHTML = "<button id='showItinerary'> Save Itinerary! </button>"
    // }
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showItinerary") {
        clickEvent.preventDefault()

        getAttractions()
            .then(useAttractions)
        getEateries()
            .then(useEateries)
        getParks()
            .then(useParks)

        const attractionsArray = useAttractions()
        const eateryArray = useEateries()
        const parkArray = useParks()
        
        const attractionId = document.querySelector("#attractionSelect").value
        const eateryId = document.querySelector("#eaterySelect").value
        const parkId = document.querySelector("#parkSelect").value
        

        const attractionObj = attractionsArray.find((attractionObj) => {
            return attractionObj.id === parseInt(attractionId)
        })

        const eateryObj = eateryArray.find((eateryObj) => {
            return eateryObj.id === parseInt(eateryId)
        })

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
