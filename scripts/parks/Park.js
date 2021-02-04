export const Park = (parksObj) => {
    return `
    <section class="preview__card parks__Card">
        <h3 class="park__name">${parksObj.fullName}</h3>
        <img class="park__img" src="" alt="">
        <button id="parkDetails">Details</button>
    </section>
    `
}