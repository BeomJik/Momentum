let weatherIcon = {
    '01' : 'fa-sun',
    '02' : 'fa-cloud-sun',
    '03' : 'fa-cloud',
    '04' : 'fa-cloud-meatball',
    '09' : 'fa-cloud-sun-rain',
    '10' : 'fa-cloud-showers-heavy',
    '11' : 'fa-poo-storm',
    '13' : 'fa-snowflake',
    '50' : 'fa-smog'
};

function onGeoOk(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector(`#weather`);
        const city = weatherContainer.querySelector(`#weather .city`);
        const temp = weatherContainer.querySelector(`#weather .temp`);
        const icon = weatherContainer.querySelector(`#weather .icon`);
        const weather = weatherContainer.querySelector(`#weather .weather`);
        const desc = weatherContainer.querySelector(`#weather .desc`);
        city.innerText = data.name;
        temp.innerText = Math.floor(data.main.temp) + 'º';
        let icon_info = (data.weather[0].icon).substr(0,2);
        icon.classList.add(weatherIcon[icon_info]);
        weather.innerText = data.weather[0].main;
        desc.innerText = data.weather[0].description;      
        // 눈 오는 날씨일 때 눈 내리는 애니메이션 구현 
        if (icon_info == 13) {
            for (let i = 0; i < 50; i++) {
                makeSnowflake();
                setTimeout(makeSnowflake, 500 * i);
            }            
        }
    });
}
function onGeoError() {
    alert(`위치 정보를 찾을 수 없습니다.`);    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);