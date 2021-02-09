import { useParks } from './ParkProvider.js'
import './ParkSelect.js'
import { WeatherPreview } from '../weather/WeatherPreview.js'
import { ShowParkButton } from './ParkButton.js'
import { ShowItineraryButton } from '../itinerary/ItinerarySaveButton.js'


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
        ShowItineraryButton()
    })

const renderPark = (parkObj) => {

    contentTarget.innerHTML = `
        <section class="preview__card park__card">
            <h4 class="park__name">${parkObj.fullName}</h4>
            <div><img class="park__img" src="${parkObj.images[0].url}" alt="${parkObj.images[0].altText}"></div>
            ${ShowParkButton(parkObj)}
        </section>
        `
}

// Park Details Button Event Listener

eventHub.addEventListener("parkDetailsClicked", event => {
    console.log("Park Event Check:", event.detail.parkId)

    const selectedParkId = event.detail.parkId
    const parksArray = useParks()
    const parkSelection = parksArray.find((parkObj) => parkObj.id === selectedParkId)
    
    ParkModal(parkSelection)
})




// Park details button modal HTML

const contentContainer = document.querySelector(".modal__card")

export const ParkModal = (parkObj) => {
    const ParkHTMLRepresentation = 
        `<div id="park_modal" class="modal_parent">
            <div class="modal__content">
                <h2>More Information</h2>
                <h3 class="park__name">${parkObj.fullName}</h3>
                <p class="park__location">${parkObj.addresses[0].city}, ${parkObj.states}</p>
                <p class="park__description">${parkObj.description}</p>
                <section class="modal__info">
                    <p class="park__directions">${parkObj.directionsInfo}</p>
                </section>
                <button id="modal__close">Close</button>    
            </div>
        </div>`

    contentContainer.innerHTML = ParkHTMLRepresentation
}