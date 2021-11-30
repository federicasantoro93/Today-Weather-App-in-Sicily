const currentDate = document.querySelector('.current_date');
const today = new Date();
const todayLocal= today.toLocaleString();
//currentDate.innerText =`${todayLocal}`;


const selectProvince = document.querySelector('#select_province');
const provincesWrapper = document.querySelector('.provinces_wrapper');


selectProvince.addEventListener('change', (event) => {

    
    provincesWrapper.textContent = `You chose ${event.target.value}`;
    console.log(event.target.value);
    //PI(agrigentoAPI); // 9 switch?

    //API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&units=metric&appid=ebeb562bdc09967ba266dc46f612e2b1`)
    //.then(response => response.json())
    //.then((data) => console.log(data));
    .then(weather => {
        return weather.json();
    }) .then(displayResults);
  
      //console.log(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=ebeb562bdc09967ba266dc46f612e2b1`);
    
    //
   
      
});

 


/*
//API 
const agrigentoAPI = "http://api.openweathermap.org/data/2.5/weather?q=agrigento&appid=ebeb562bdc09967ba266dc46f612e2b1";
const caltanissettaAPI = "http://api.openweathermap.org/data/2.5/weather?q=caltanissetta&appid=ebeb562bdc09967ba266dc46f612e2b1";
const cataniaAPI = "http://api.openweathermap.org/data/2.5/weather?q=catania&appid=ebeb562bdc09967ba266dc46f612e2b1";
const ennaAPI = "http://api.openweathermap.org/data/2.5/weather?q=enna&appid=ebeb562bdc09967ba266dc46f612e2b1";
const messinaAPI = "http://api.openweathermap.org/data/2.5/weather?q=messina&appid=ebeb562bdc09967ba266dc46f612e2b1";
const palermoAPI = "http://api.openweathermap.org/data/2.5/weather?q=palermo&appid=ebeb562bdc09967ba266dc46f612e2b1";
const ragusaAPI = "http://api.openweathermap.org/data/2.5/weather?q=ragusa&appid=ebeb562bdc09967ba266dc46f612e2b1";
const siracusaAPI = "http://api.openweathermap.org/data/2.5/weather?q=siracusa&appid=ebeb562bdc09967ba266dc46f612e2b1";
const trapaniAPI = "http://api.openweathermap.org/data/2.5/weather?q=trapani&appid=ebeb562bdc09967ba266dc46f612e2b1";
*/

/*
//Funzione API
function API(provinceAPI) {
fetch(provinceAPI)
    .then(response => response.json())
    .then((data) => console.log(data));
};
*/

//CARD
function displayResults (weather){
    console.log(weather);
    provincesWrapper.innerText =`
    ${weather.name}
    ${todayLocal}
    ${weather.main.temp}°C
    ${weather.weather[0].main}
    ${weather.main.temp_min}°C - ${weather.main.temp_max}°C
    ${weather.main.humidity}°C `
    //${event.target.value}
  //${weather.weather[0].icon}
}