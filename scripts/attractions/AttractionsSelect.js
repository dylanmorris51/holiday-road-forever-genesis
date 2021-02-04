import { useAttractions, getAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".aside__left")

eventHub.addEventListener("change", changeEvent =>{
    if(changeEvent.target.id === "attractionSelect") {
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionChosen: changeEvent.target.value
            }
        })
        // console.log(customEvent)
        eventHub.dispatchEvent(customEvent)
    }
})

const render = attractionsSelection => {
contentTarget.innerHTML = `
<select class="dropdown__attractions" id="attractionSelect">
<option value="0">Please select an attraction...</option>
${attractionsSelection.map(attraction => {
    return `<option value="${attraction.id}">${attraction.name}</option> 
    `
}).join("")}
</select>
`
}






export const attractionSelect = () => {
// Trigger fetching the API data and loading it into application state
getAttractions()
.then( () => {
  // Get all convictions from application state
  const attractions = useAttractions()
  render(attractions)
})
}
