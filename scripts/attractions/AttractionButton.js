import "./AttractionPreview.js"

export const ShowAttractionButton = (attractionObj) => {
    return `<button id="attraction_button--${attractionObj.id}">Details</button>`
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    console.log(event.target)

    if(event.target.id.startsWith("attraction_button--")) {
        const [prefix, attractionId]= event.target.id.split("--")
        const customEvent = new CustomEvent("attractionDetailsClicked", {
            detail: {
                attractionId: parseInt(attractionId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
    console.log("details click work")
})