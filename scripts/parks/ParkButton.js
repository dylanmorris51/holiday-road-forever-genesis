import "./ParkPreview.js"

export const ShowParkButton = (parkObj) => {
    return `<button id="park_button--${parkObj.id}">Details</button>`
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    console.log("Park detail button click:", event.target)

    if(event.target.id.startsWith("park_button--")) {
        const [prefix, parkId]= event.target.id.split("--")
        const customEvent = new CustomEvent("parkDetailsClicked", {
            detail: {
                parkId: parkId
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
    console.log("did park details click work")
})