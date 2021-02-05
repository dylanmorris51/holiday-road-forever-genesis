let eateries = []

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedResponse => {
            console.table("Eateries", parsedResponse)
            eateries = parsedResponse
        })
}

export const useEateries = () => {
    return eateries.slice()
}