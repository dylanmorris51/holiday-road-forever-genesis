
const contentTarget = document.querySelector(".eateryListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showEateries") {
        const customEvent = new CustomEvent("showEateriesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowEateriesButton = () => {
    contentTarget.innerHTML = "<button id='showEateries'>Show Eateries</button>"
}