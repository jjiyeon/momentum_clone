const COORDS = 'coords';
const API_KEY = "9a4af8436004a81780bd732a95fa9128";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude =  position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}
function handleGeoError(){
    console.log("Cant access geo loaction");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}
function loadCoord(){
    const loadedCord = localStorage.getItem(COORDS);
    if(loadedCord === null){
        askForCoords();
    }else{

    }
}
function init(){
    loadCoord();
}
init();