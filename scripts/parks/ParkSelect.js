import { useParks, getParks } from './ParkProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".aside__left")

eventHub.addEventListener("change", event => {
    if(event.target.id==="parkSelect") {
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                parkThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})


const render = parkSelection => {
    contentTarget.innerHTML = `
    
    <select class="dropdown" id="parkSelect">
        <option value ="0"> Choose a park! </option>
            ${parkSelection.map(park => `
                <option value="${park.id}">${park.fullName}</option>
            `).join("")
        }
    </select>
        `
}

export const parkSelect = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            render(parks)
        })
}