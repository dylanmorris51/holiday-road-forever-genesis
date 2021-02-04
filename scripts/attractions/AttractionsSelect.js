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
        // console.log(customEvent)
        eventHub.dispatchEvent(customEvent)
    }
})

const render = attractionsSelection => {
contentTarget.innerHTML = `
<select class="dropdown" id="attractionSelect">
<option value="0">Please select an attraction...</option>
${attractionsSelection.map(attraction => {
    // const attraction = attraction.name
    return `<option value="${attraction.id}">${attraction}</option> 
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
