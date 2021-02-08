import { useAttractions, getAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dropdown__attractions")

eventHub.addEventListener("change", changeEvent =>{
    if(changeEvent.target.id === "attractionSelect") {
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionChosen: changeEvent.target.value
            }
        })
        console.log("Attraction That Was Chosen:", customEvent.detail.attractionChosen)
        console.log("Attractions Selection Successfully Dispatched!")
        eventHub.dispatchEvent(customEvent)
    }
})

const render = attractionsSelection => {
contentTarget.innerHTML = `
    <select class="dropdown__attractions" id="attractionSelect">
        <option value="0">Please select an attraction!</option>
        ${attractionsSelection.map(attraction => {
        return `<option value="${attraction.id}">${attraction.name}</option> 
    `
    }).join("")}
    </select>
    `
}






export const attractionSelect = () => {
    getAttractions()
    .then( () => {
    const attractions = useAttractions()
    render(attractions)
    })
}
