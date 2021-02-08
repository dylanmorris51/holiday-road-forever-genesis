const eventHub = document.querySelector(".container")

let itinerary = []

export const useItinerary = () => itinerary.sice()

export const getItinerary = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => itinerary = parsedItineraries);
}

export const saveItinerary = (itineraryObj) => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itineraryObj)
    })
    .then(getItinerary)
    .then(dispatchItineraryChangeEvent)
}


const dispatchItineraryChangeEvent = () => {
    const iteneraryChangeEvent = new CustomEvent("itineraryStateChanged")
    eventHub.dispatchEvent(iteneraryChangeEvent)
}



