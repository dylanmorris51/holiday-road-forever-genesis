import { useParks, getParks } from './ParkProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dropdown__parks")

export const parkSelect = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            render(parks)
        })
}

const render = parkSelection => {
    contentTarget.innerHTML = `
    
    <select class="dropdown" id="parkSelect">
        <option value ="0">Please select a park!</option>
            ${parkSelection.map(parkObj => `
                <option value="${parkObj.id}">${parkObj.fullName}</option>
            `).join("")
        }
    </select>
        `
}

// Event for ParkSelect dropdown ==> ParkList.js

eventHub.addEventListener("change", event => {
    if(event.target.id === "parkSelect") {
        
        const parkSelection = event.target.value
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                parkThatWasChosen: parkSelection
                
            }
        })
        console.log("Park That Was Chosen:", customEvent.detail.parkThatWasChosen)
        eventHub.dispatchEvent(customEvent)
        console.log("Park Selection Event Successfully Dispatched!")
    }
})

// eventHub.addEventListener("change", event => {
//     if(event.target.id==="parkSelect") {
        
//         const customEvent = new CustomEvent("parkChosen", {
//             detail: {
//                 parkThatWasChosen: event.target.value
                
//             }
//         })
//         console.log("Park That Was Chosen:", customEvent.detail.parkThatWasChosen)
//         eventHub.dispatchEvent(customEvent)
//         console.log("Park Selection Event Successfully Dispatched!")
//     }
// })





// Event for ParkSelect dropdown ==> WeatherList.js (sending the right coordinates)
eventHub.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "parkSelect") {
        getParks()
            .then(() => {
                const parklocation = useParks()
                // Filter for coordinates
                const selectedPark = changeEvent.target.value
                console.log('selectedPark: ', selectedPark);
                const parkObject = parklocation.find(park => park.id === selectedPark)
                console.log('parkObject: ', parkObject);
                const dataPayload = {
                    lon: parkObject.longitude,
                    lat: parkObject.latitude
                }
                console.log('dataPayload: ', dataPayload);
                
                const coordinatesEvent = new CustomEvent("coordinates", {
                    detail: {
                        coordinates: dataPayload
                    }
                })
                eventHub.dispatchEvent(coordinatesEvent)
                console.log("Coordinates Were Succesfully Dispatched!", coordinatesEvent.detail.coordinates)
            })
    }
})