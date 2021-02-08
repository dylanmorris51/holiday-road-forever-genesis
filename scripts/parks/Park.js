export const Park = (parkObj) => {
    return `
    <section class="preview__card parks__Card">
        <h3 class="park__name">${parkObj.fullName}</h3>
        <img class="park__img" src="" alt="">
        <button id="parkDetails">Details</button>
    </section>
    `
}