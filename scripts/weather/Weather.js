export const Weather = (weatherObj) => {
    return `
    <div class="weather__card">
        <h4 class="dayOfTheWeek">${weatherObj.list.dt_txt}</h4>
        <p class="weather__icon">${weatherObj.list.weather.icon}</p>
        <p class="weather__temp_min">${weatherObj.list.main.temp_min}</p>
        <p class="weather__temp_max">${weatherObj.list.main.temp_max}</p>
        <p class="weather__forecast">${weatherObj.list.weather.main}</p>
    </div>
    `
}