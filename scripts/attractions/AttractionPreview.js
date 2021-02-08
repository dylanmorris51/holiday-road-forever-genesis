import { useAttractions } from './AttractionProvider.js'
import './ParkSelect.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attraction__card")

eventHub.addEventListener("attractionSelect", attractionChosenEvent => {
    if (attractionChosenEvent.detail.attractionThatWasChosen !== "0") {

        const attractionsArray = useAttractions()
        const attractionSelection = attractionsArray.find((attractionObj) => {
            return attractionObj.id === attractionChosenEvent.detail.attractionThatWasChosen
        })
        renderAttraction(attractionSelection)
    }
})

const renderAttraction = (attractionObj) => {

    contentTarget.innerHTML = 
}