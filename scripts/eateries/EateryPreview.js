import { useEateries } from './EateryProvider.js'
import { ShowEateryButton } from './EateryButton.js'
import './EaterySelect.js'


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eatery__card")

// eatery selected event from dropdown to render on Preview

eventHub.addEventListener("eateryChosen", eateryChosenEvent => {
    if (eateryChosenEvent.detail.eateryChosen !== "0") {
    
        const eateriesArray = useEateries()
        const eaterySelection = eateriesArray.find((eateryObj) => {
            return eateryObj.id === parseInt(eateryChosenEvent.detail.eateryChosen)
        })
        renderEatery(eaterySelection)
        }
    })

const renderEatery = (eateryObj) => {

    contentTarget.innerHTML = `
        <section class="preview__card eatery__card">    
            <h4 class="eatery_name">${eateryObj.businessName}</h4>
            ${ShowEateryButton(eateryObj)}
        </section>
    `
}

// details button modal HTML

const contentContainer = document.querySelector(".modal__card")

export const EateryModal = (eateryObj) => {
    const EateryHTMLRepresentation = 
        `<div id="eatery_modal" class="modal_parent">
            <div class="modal__content">
                <h2>More Information</h2>
                <h3 class="eatery__name">${eateryObj.businessName}</h3>
                <p class="eatery__location">${eateryObj.city}, ${eateryObj.state}</p>
                <section class="modal__info">
                <div class="eatery__description">${eateryObj.description}</div>
                </section>
                <button id="modal__close">Close</button>    
            </div>
        </div>`

    contentContainer.innerHTML = EateryHTMLRepresentation
}

// click event for details button

eventHub.addEventListener("detailsClicked", event => {
    console.log("event works idk", event.detail.eateryId)

    const selectedEateryId = event.detail.eateryId
    const eateriesArray = useEateries()
    const eaterySelection = eateriesArray.find((eateryObj) => eateryObj.id === selectedEateryId)
    EateryModal(eaterySelection)
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "modal__close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
    }