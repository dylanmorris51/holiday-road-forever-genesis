import { useAttractions } from './AttractionProvider.js'
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

    return contentTarget.innerHTML = `
    <div class "attraction_name">${attractionObj.name}</div>
    `
}