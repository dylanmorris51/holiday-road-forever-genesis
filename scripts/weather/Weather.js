export const Weather = (weatherObj) => {
    // debugger
    return `
    <div class="weather__card">
        <h4 class="dayOfTheWeek">${weatherObj.dt_txt}</h4>
        <div><img class="weather__icon" src="http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png"></div>
        <div class="weather__temp">Min: ${weatherObj.main.temp_min}° / Max: ${weatherObj.main.temp_max}°</div>
        <div class="weather__forecast">${weatherObj.weather[0].description}</div>
    </div>
    `
}
