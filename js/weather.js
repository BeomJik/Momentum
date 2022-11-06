function onGeoOk(position) {
    console.log(position);
    let 위도 = position.coords.latitude;
    let 경도 = position.coords.longitude;
    console.log(`너의 위치  위도 : ${위도} 경도 : ${경도}`);
}
function onGeoError() {
    alert(`Can't find you. No weather for you.`);    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);