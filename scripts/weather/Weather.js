export const Weather = (weatherObj) => {
    return `
    <div class="weather__card">
        <h4 class="dayOfTheWeek">${weatherObj.weather[0].dt}</h4>
        <div><img class="weather__icon" src="http://openweathermap.org/img/wn/1${weatherObj.weather[0].icon}@2x.png"></div>
        <div class="weather__temp">${weatherObj.main.temp_min} / ${weatherObj.main.temp_max}</div>
        <div class="weather__forecast">${weatherObj.weather[0].main}</div>
    </div>
    `
}