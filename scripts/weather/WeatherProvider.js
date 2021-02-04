let weather = []

const taco = {
    lat: "44.409286",
    lon: "-68.247501"
}

export const getWeather = () => {
    const weatherFetchCall = `http://api.openweathermap.org/data/2.5/forecast?lat=${taco.lat}&lon=${taco.lon}&appid=a56ce011c11186efab6be61f90341659`
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
