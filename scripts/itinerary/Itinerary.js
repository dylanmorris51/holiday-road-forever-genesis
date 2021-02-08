
export const Itinerary = (itineraryObj) => {
    return `
    <div class="itineraryCard"> 
        <p class="itinerary__park"><h3>${itineraryObj.park}</h3></p>
            <p class="itinerary__eatery">${itineraryObj.eatery}</p>
            <p class="itinerary__attraction">${itineraryObj.attraction}</p>
    </div>
    `
}
