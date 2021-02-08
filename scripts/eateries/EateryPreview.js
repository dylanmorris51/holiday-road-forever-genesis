import { useEateries } from './EateryProvider.js'
import './EaterySelect.js'


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eatery__card")


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
    <div class="eatery_name">${eateryObj.businessName}</div>
    `
}