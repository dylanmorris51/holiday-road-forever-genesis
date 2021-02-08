export const Weather = (weatherObj) => {
    // debugger
    return `
    <div class="weather__card">
        <h4 class="dayOfTheWeek">${weatherObj.dt_txt}</h4>
        <div><img class="weather__icon" src="http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png"></div>
        <div class="weather__temp">${weatherObj.main.temp_min} / ${weatherObj.main.temp_max}</div>
        <div class="weather__forecast">${weatherObj.weather[0].main}</div>
    </div>
    `
}

//incomplete weather 