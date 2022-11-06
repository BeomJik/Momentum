function onGeoOk(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector(`#weather`);
        const weather = weatherContainer.querySelectorAll(`#weather div`)[0];
        const city = weatherContainer.querySelectorAll(`#weather div`)[1];
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;

    });
}
function onGeoError() {
    alert(`위치 정보를 찾을 수 없습니다.`);    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);