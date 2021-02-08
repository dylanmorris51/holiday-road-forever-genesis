import { useParks } from './ParkProvider.js'
import './ParkSelect.js'
import { WeatherPreview } from '../weather/WeatherPreview.js'
import { ShowParkButton } from './ParkButton.js'


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
    ${ShowParkButton(parkObj)}
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
                <h3 class="park__description">${parkObj.description}</h3>
                <section class="modal__info">
                <div class="park__directions">${parkObj.directionsInfo}</div>
                </section>
                <button id="modal__close">Close</button>    
            </div>
        </div>`

    contentContainer.innerHTML = ParkHTMLRepresentation
}