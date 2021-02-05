const contentTarget = document.querySelector(".parkListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showParks") {
        const customEvent = new CustomEvent("showParksClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowParksButton = () => {
    contentTarget.innerHTML = "<button id='showParks'>Show Parks</button>"
}