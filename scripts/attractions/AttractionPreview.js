import { useAttractions } from './AttractionProvider.js'
import { ShowAttractionButton } from './AttractionButton.js'
import './AttractionsSelect.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attraction__card")

eventHub.addEventListener("attractionChosen", attractionChosenEvent => {
    console.log("attraction event", attractionChosenEvent)

    if (attractionChosenEvent.detail.attractionChosen !== "0") {

        const attractionsArray = useAttractions()
        const attractionSelection = attractionsArray.find((attractionObj) => {
            return attractionObj.id === parseInt(attractionChosenEvent.detail.attractionChosen)
        })
        console.log("attraction work?", attractionSelection)
        renderAttraction(attractionSelection)
    }
})

const renderAttraction = (attractionObj) => {

    contentTarget.innerHTML = `
        <div class "attraction_name">${attractionObj.name}</div>
        ${ShowAttractionButton(attractionObj)}
        `
}

// details button modal HTML

const contentContainer = document.querySelector(".modal__card")

export const AttractionModal = (attractionObj) => {
    const AttractionHTMLRepresentation = 
        `<div id="attraction_modal" class="modal_parent">
            <div class="modal__content">
                <h2>More Information</h2>
                <h3 class="attraction__name">${attractionObj.name}</h3>
                <p class="attraction__location">${attractionObj.city}, ${attractionObj.state}</p>
                <section class="modal__info">
                <div class="attraction__description">${attractionObj.description}</div>
                </section>
                <button id="modal__close">Close</button>    
            </div>
        </div>`

    contentContainer.innerHTML = AttractionHTMLRepresentation
}

// click event for details button

eventHub.addEventListener("attractionDetailsClicked", event => {
    console.log("event works hopefully", event.detail.attractionId)

    const selectedAttractionId = event.detail.attractionId
    const attractionsArray = useAttractions()
    const attractionSelection = attractionsArray.find((attractionObj) => attractionObj.id === selectedAttractionId)
    AttractionModal(attractionSelection)
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "modal__close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
    }