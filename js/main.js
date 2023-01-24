let myKey = "d018c93de43b3c1c3c2d883af0c5e640";
let day0Head = document.getElementById('day0-head');
let day0Body = document.getElementById('day0-body');
let day1Head = document.getElementById('day1-head');
let day1Body = document.getElementById('day1-body');
let day2Head = document.getElementById('day2-head');
let day2Body = document.getElementById('day2-body');
let search = document.getElementById('search');
let btn = document.getElementById('btn');


// ////////////  Get API /////////// //

async function getWeather(city) {
   let apiResp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${myKey}` );

   let data = await apiResp.json()
    displayData(data)
};

// ////////////  Display Data /////////// //

function displayData(data){

    // //////////// day0 //////////// //
    day0Head.innerHTML=`
    <p>${new Date(data.list[0].dt_txt).getDate()}</p>
    <p>${new Date(data.list[0].dt_txt).toLocaleString('defult' , {month: 'long'})}</p>
    <p>${new Date(data.list[0].dt_txt).getFullYear()}</p>
    `
    
    day0Body.innerHTML=`
    <div class="text-center"><h2>${data.city.name}</h2></div>
    <div class="d-flex justify-content-center align-items-center">
        <h3 class="px-3 pb-4 fw-bold">${Math.floor(data.list[0].main.temp)} <small>&#8451</small> </h3>
        <img class="pe-5 pb-4" src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"/>
    </div>
    <p class="cloud py-3 text-center">${data.list[0].weather[0].description}</p>
    <div class="d-flex justify-content-evenly px-4 pb-2">
        <span><img src="imgs/icon-umberella.png"> ${data.list[0].main.humidity}%</span>
        <span><img src="imgs/icon-wind.png"> ${data.list[0].wind.speed} KM/hr</span>
    </div>
    `

    // //////////// day1 //////////// //
    day1Head.innerHTML=`
    <p>${new Date(data.list[3].dt_txt).getDate()}</p>
    <p>${new Date(data.list[3].dt_txt).toLocaleString('defult' , {month: 'long'})}</p>
    <p>${new Date(data.list[3].dt_txt).getFullYear()}</p>
    `
    
    day1Body.innerHTML=`
    <img class="px-5" src="http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png"/>
    <h3 class="pt-2">${Math.floor(data.list[5].main.temp_max)} <small>&#8451</small></h3>
    <h4 class="pt-2 h6">${Math.floor(data.list[3].main.temp_min)} <small>&#8451</small></h4>
    <p class="pt-4 cloud">${data.list[3].weather[0].description}</p>
    <div class="d-flex justify-content-evenly px-4 pb-2">
        <span><img src="imgs/icon-umberella.png"> ${data.list[3].main.humidity}%</span>
        <span><img src="imgs/icon-wind.png"> ${data.list[3].wind.speed} KM/hr</span>
    </div>
    `

    // //////////// day2 //////////// //
    day2Head.innerHTML=`
    <p>${new Date(data.list[11].dt_txt).getDate()}</p>
    <p>${new Date(data.list[11].dt_txt).toLocaleString('defult' , {month: 'long'})}</p>
    <p>${new Date(data.list[11].dt_txt).getFullYear()}</p>
    `
    
    day2Body.innerHTML=`
    <img class="px-5" src="http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png"/>
    <h3 class="pt-2">${Math.floor(data.list[18].main.temp_max)} <small>&#8451</small></h3>
    <h4 class="pt-2 h6">${Math.floor(data.list[11].main.temp_min)} <small>&#8451</small></h4>
    <p class="pt-4 cloud">${data.list[11].weather[0].description}</p>
    <div class="d-flex justify-content-evenly px-4 pb-2">
        <span><img src="imgs/icon-umberella.png"> ${data.list[11].main.humidity}%</span>
        <span><img src="imgs/icon-wind.png"> ${data.list[11].wind.speed} KM/hr</span>
    </div>
    `
};


// //////////// Events //////////// //

btn.addEventListener('click' , ()=>{
    let city = search.value ;
    if(city){
        getWeather(city)
    }});

search.addEventListener('keyup' , (e)=>{
        let city = search.value ;
        if(e.key == 'Enter'){
            getWeather(city)
        }
});

getWeather('cairo')
