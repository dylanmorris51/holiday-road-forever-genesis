import { saveItinerary } from "./ItineraryProvider.js"
import { useEateries, getEateries } from "../eateries/EateryProvider.js"
import { useAttractions, getAttractions } from "../attractions/AttractionProvider.js"
import { useParks, getParks } from '../parks/ParkProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".save__itenerary__button")

let attractionId 
let eateryId 
let parkId 

//listens for park selector 
eventHub.addEventListener("parkSelected", event => {
    //IF SO grabs the park id and sets the literal park id to "parkId"
    parkId = event.detail.parkThatWasChosen 
    //check to see if all THREE have been selected
    ShowItineraryButton()
})

//
eventHub.addEventListener("eateryChosen", event => {
    eateryId = event.detail.eateryChosen 
    ShowItineraryButton()
})

eventHub.addEventListener("attractionChosen", event => {
    attractionId = event.detail.attractionChosen
    ShowItineraryButton()
})

export const ShowItineraryButton = () => {
    // debugger
    if (attractionId && eateryId && parkId ){
        contentTarget.innerHTML = "<button id='showItinerary'> Save Itinerary! </button>"
    }
}

eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent)
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
        
        attractionId = document.querySelector("#attractionSelect").value
        eateryId = document.querySelector("#eaterySelect").value
        parkId = document.querySelector("#parkSelect").value

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
