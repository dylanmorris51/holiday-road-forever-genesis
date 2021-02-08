const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".save__itenerary__button")


export const ShowItineraryButton = () => {
    contentTarget.innerHTML = "<button id='showItinerary'> Save Itinerary! </button>"
}