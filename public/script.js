const iconContainer=document.querySelector('.icon-container');
const inputValue = document.getElementById('city-search');
const button=document.querySelector('.submit-btn');
const locationElement=document.querySelector('[data-location]');
const statusElement=document.querySelector('[data-status]');
const windElement=document.querySelector('[data-wind]');
const tempElement=document.querySelector('[data-temperature]');
const humidityElement=document.querySelector('[data-Humidity]');



button.addEventListener('click',function getData(){
  const api=`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=265ed39b19667fd477c97a158e012bfa&units=metric`;
  fetch(api)
  .then(res=> {
    return res.json()
  })
  .then((data)=>{
    setWeatherData(data);
  })
  .catch(err=>console.log(err));
  
})

function setWeatherData(data){
 locationElement.textContent=inputValue.value;
 statusElement.textContent=data.weather[0].description;
 windElement.textContent=data.wind.speed;
 tempElement.textContent=data.main.temp;
 humidityElement.textContent=data.main.humidity;
 iconContainer.innerHTML=`<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
}










