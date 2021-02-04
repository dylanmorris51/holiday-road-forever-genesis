import { useParks, getParks } from './ParkProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".aside__left")

eventHub.addEventListener("change", event => {
    if(event.target.id==="dropdown__parks") {
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                parkThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})


const render = parksSelection => {
    contentTarget.innerHTML = `
    
    `
}