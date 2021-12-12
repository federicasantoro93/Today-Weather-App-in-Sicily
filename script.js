const currentDate = document.querySelector('.current_date');
const today = new Date();
const todayLocal= today.toLocaleString();
const selectProvince = document.querySelector('#select_province');
const provincesWrapper = document.querySelector('.provinces_wrapper');

selectProvince.addEventListener('change', (event) => {

  if (event.target.value !== "all") {
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&units=metric&appid=ebeb562bdc09967ba266dc46f612e2b1`)
      .then(weather => {
      return weather.json();
    }) .then(displayResults);
  
  } else {
       
    fetcAllCard();
       
  }    
});

function displayResults (weather){
  render(provincesWrapper,
    `<ul>
      <li> 
        <h3>${weather.name}</h3>
        <p class="date">${todayLocal}</p>
        <img class="icon" src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png">
        <p class="main">${weather.weather[0].main}</p> 
        <p class="temp">${weather.main.temp}°</p>
        <p class="temp_m_m">${weather.main.temp_min}° - ${weather.main.temp_max}° <br> min - max temp</p>
        <p class="humidity">${weather.main.humidity}° <br> humidity</p>
      </li> 
    </ul>`
  );
}

function displayallcard (weather){

    const elements = weather.list.map ( item => `
      <li> 
        <h3>${item.name}</h3>
        <p class="date">${todayLocal}</p>
        <img class="icon" src="https://openweathermap.org/img/w/${item.weather[0].icon}.png">
        <p class="main">${item.weather[0].main}</p>
        <p class="temp">${item.main.temp}°</p>
        <p class="temp_m_m">${item.main.temp_min}° - ${item.main.temp_max}° <br> min - max temp </p>
        <p class="humidity">${item.main.humidity}° <br> humidity</p>
      </li>
    `)
    .join('');

render(provincesWrapper,`<ul class="cards">${elements}</ul>`);
       
}

const render = (container, content) => (container.innerHTML = content);

function fetcAllCard() {
  fetch(`https://api.openweathermap.org/data/2.5/group?id=2525763,2525447,2525068,2524819,2523918,2524170,2523649,2523082,2522875&units=metric&appid=ebeb562bdc09967ba266dc46f612e2b1`)
  .then(weather => {
    return weather.json();
  })
  .then(displayallcard)
}

 fetcAllCard();
