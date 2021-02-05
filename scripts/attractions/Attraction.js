
 export const Attraction = (attractionsObj) => {
    return `
    <section class="preview__card attractions__Card">
        <h3 class="attraction__name">${attractionsObj.name}</h3>
        <img class="attraction__img" src="" alt="">
        <button id="attractionDetails">Details</button>
    </section>
    `
}