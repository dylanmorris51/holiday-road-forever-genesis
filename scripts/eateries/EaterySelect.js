//similar to attractionSelect
//throw into main
import { useEateries, getEateries} from './EateryProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dropdown__eateries") 

//eaterySelect dropdown ==> EateryList.js
eventHub.addEventListener("change", event => {
    if(event.target.id==="eaterySelect") {
        
        const customEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryChosen: event.target.value
                
            }
        })
        console.log("Eatery That Was Chosen:", customEvent.detail.eateryChosen)
        eventHub.dispatchEvent(customEvent)
        console.log("Eatery Selection Event Successfully Dispatched!")
    }
})
 
const render = eaterySelect => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery!</option>
            ${
                eaterySelect.map(eatery => `
                        <option value="${eatery.id}">${eatery.businessName}</option>`
                ).join("")
            }
        </select>
    `
}

export const eaterySelect = () => {
    getEateries()
        .then(() => {
            const eateries = useEateries()
            render(eateries)
        })
}



