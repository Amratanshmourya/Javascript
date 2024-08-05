const data=document.querySelector("#data")
btn=document.querySelector("#btn")
const userinput=document.querySelector("#Input");
const api_key="a16361dfc23640e7ac4130910240408";
btn.addEventListener("click",function(){
    var city=userinput.value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=yes`)
.then(function(response){
    if(response.status=="200"){
        return response.json()
        }
        else{
            return null
        }
    
}).then(function(data){
if(data!=null){
    feeddata(data)
}
else{
    document.querySelector(".weather-container").innerHTML=
    `<h1> Some Error Happens </h1>
    <h1> Check Speling or try again </h1>
    `
}
})

.catch(function(){
   
})
})

function feeddata(data){

    const htmll=document.querySelector(".weather-container")
    htmll.innerHTML=`
    <h1>Weather in ${data.location.name}</h1>
    <p><strong>Region:${data.location.region}</p>
    <p><strong>Country:</strong> ${data.location.country}</p>
    <p><strong>Local Time:</strong> ${data.location.localtime}</p>
    <h2>Current Conditions</h2>
    <img src='https://${data.current.condition.icon}'></img>
    <p><strong>Temperature:</strong> ${data.current.temp_c} °C / ${data.current.temp_f} °F</p>
    <p><strong>Condition:</strong> ${data.current.condition.text}</p>
    <p><strong>Wind:</strong> ${data.current.wind_kph} kph (${data.current.wind_mph} mph)</p>
    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
    <p><strong>Pressure:</strong> ${data.current.pressure_mb} mb</p>
    <p><strong>Precipitation:</strong> ${data.current.precip_mm} mm</p>
    <p><strong>Visibility:</strong> ${data.current.vis_km} km</p>
    <p><strong>UV Index:</strong> ${data.current.uv}</p>
    <h2>Air Quality</h2>
    <p><strong>CO:</strong> ${data.current.air_quality.co}</p>
    <p><strong>NO2:</strong> ${data.current.air_quality.no2}</p>
    <p><strong>O3:</strong> ${data.current.air_quality.o3}</p>
    <p><strong>SO2:</strong> ${data.current.air_quality.so2}</p>
    <p><strong>PM2.5:</strong> ${data.current.air_quality.pm2_5}</p>
    <p><strong>PM10:</strong> ${data.current.air_quality.pm10}</p>`
}
