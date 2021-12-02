const currentDate = document.querySelector('.current_date');
const today = new Date();
const todayLocal= today.toLocaleString();
//currentDate.innerText =`${todayLocal}`;


const selectProvince = document.querySelector('#select_province');
const provincesWrapper = document.querySelector('.provinces_wrapper');


selectProvince.addEventListener('change', (event) => {

if (event.target.value !== "all") {
    //provincesWrapper.textContent = `You chose ${event.target.value}`;
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

} else {
        //alert('Chose a province');
    //allprovinces = provinces.map ( province => 
    //    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${province}&units=metric&appid=ebeb562bdc09967ba266dc46f612e2b1`)
    fetcAllCard();
    
    /*
    fetch(`http://api.openweathermap.org/data/2.5/group?id=2525763,2525447,2525068,2524819,2523918,2524170,2523649,2523082,2522875&units=metric&appid=ebeb562bdc09967ba266dc46f612e2b1`)
    .then(weather => {
        return weather.json();
    })
     .then(displayallcard)
    */
    
    }    
});




 
const provinces = ['Agrigento', 'Caltanissetta', 'Catania', 'Enna', 'Messina', 'Palermo', 'Ragusa', 'Siracusa', 'Trapani' ]

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
    /*
    provincesWrapper.innerText =`
    ${weather.name}
    ${todayLocal}
    ${weather.main.temp}°C
    ${weather.weather[0].main}
    ${weather.main.temp_min}°C - ${weather.main.temp_max}°C
    ${weather.main.humidity}°C 
    
    `
    */

       
    render(provincesWrapper,
      `<ul><li> 
      <h3>${weather.name}</h3>
      <p class="date">${todayLocal}</p>
      <img class="icon" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">
      <p class="temp">${weather.main.temp}°C</p>
      <p class="main">${weather.weather[0].main}</p>
      <p class="temp_m_m">min: ${weather.main.temp_min}°C - max: ${weather.main.temp_max}°C</p>
      <p class="humidity">Humidity: ${weather.main.humidity}°C</p>
      </li> 
      </ul>`
        );

       
    //${event.target.value}
  //${weather.weather[0].icon}
}

//CARD
function displayallcard (weather){
    console.log(weather.list);
    //const provincesArr = weather.list;
    const elements = weather.list.map ( item => `<li> 
    <h3>${item.name}</h3>
    <p class="date">${todayLocal}</p>
    <img class="icon" src="http://openweathermap.org/img/w/${item.weather[0].icon}.png">
    <p class="temp">${item.main.temp}°C</p>
    <p class="main">${item.weather[0].main}</p>
    <p class="temp_m_m">min: ${item.main.temp_min}°C - max:${item.main.temp_max}°C</p>
    <p class="humidity">Humidity: ${item.main.humidity}°C</p>
    </li>
    `)
    .join('');
    console.log(elements);
    //const provincesWrapper = document.querySelector('.provinces_wrapper');
    render(provincesWrapper,
        `<ul class="cards">${elements}</ul>`
          );
       
        //console.log(item);
    
     /*   
    provincesWrapper.innerText =`
    ${item.name}
    ${todayLocal}
    ${item.temp}°C
    ${item.weather[0].main}
    ${item.main.temp_min}°C - ${item.main.temp_max}°C
    ${item.main.humidity}°C 
    
    `
    */
    //${event.target.value}
  //${weather.weather[0].icon}
   // }

}

const render = (container, content) => (container.innerHTML = content);


function fetcAllCard() {
  fetch(`http://api.openweathermap.org/data/2.5/group?id=2525763,2525447,2525068,2524819,2523918,2524170,2523649,2523082,2522875&units=metric&appid=ebeb562bdc09967ba266dc46f612e2b1`)
.then(weather => {
    return weather.json();
})
 .then(displayallcard)
}

 fetcAllCard();