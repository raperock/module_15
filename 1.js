const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn-test');


// Функция, выводящая текст об ошибке
const error = () => {
    status.textContent = 'Невозможно получить ваше местоположение';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    // status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    let requst=`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`
    fetch(requst)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            writeOutput(formatOutput(data))
        })
}
function formatOutput(data) {
    let output =`<p>${data.timezone}</p>
        <p>${data.date_time_txt}</p>
        `
    return output;

}
function writeOutput(message) {
    output.innerHTML = message;
}

btn.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        // status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

});