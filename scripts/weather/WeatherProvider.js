let weather = []
// Check to see if the URL loads when a variable is in the fetch call:
// const taco = {
//     lat: "44.409286",
//     lon: "-68.247501"
// }

export const getWeather = () => {
    const weatherFetchCall = `http://api.openweathermap.org/data/2.5/forecast?lat=${parksObj.lat}&lon=${parksObj.lon}&appid=a56ce011c11186efab6be61f90341659`
    return fetch(weatherFetchCall)
        .then(response => response.json())
            .then( parsedWeather => {
                console.log("Weather Data Check", parsedWeather)
                weather = parsedWeather.list
            })
}

export const useWeather = () => {
    return weather.slice()
}
