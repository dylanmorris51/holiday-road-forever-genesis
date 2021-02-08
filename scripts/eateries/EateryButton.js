import "./EateryPreview.js"

export const ShowEateryButton = (eateryObj) => {
    return `<button id="eatery_button--${eateryObj.id}">Details</button>`
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    console.log(event.target)

    if(event.target.id.startsWith("eatery_button--")) {
        const [prefix, eateryId]= event.target.id.split("--")
        const customEvent = new CustomEvent("detailsClicked", {
            detail: {
                eateryId: parseInt(eateryId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
    console.log("did details click work")
})