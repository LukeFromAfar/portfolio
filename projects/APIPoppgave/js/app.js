const cityForm = document.querySelector('form');

const forecastCont = document.getElementById('forecastContainer');
const results = document.getElementById('results');

const time = document.querySelector('.timeImg');
const icon = document.querySelector('.weatherIcon img');

const updateUI = (data) => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    const { cityDets, weather } = data;

    // update details template

    results.innerHTML = `
        <h4>${cityDets.EnglishName}</h4>
        <h5>${weather.WeatherText}</h5>
        <div class="majorMonoFont">
            <div class="temperature">${weather.Temperature.Metric.Value}</div>
            <div class="temperature">&deg;c</div>
        </div>
    `

    // check if d-none class is present
    if(results.classList.contains('d-none')){
        results.classList.remove('d-none');
    }

    if(time.classList.contains('d-none')){
        time.classList.remove('d-none');
    }

    // update weather icons
    const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //update time image

    // let timeSrc = weather.IsDayTime ? '../img/day.svg' : '../img/night.svg';


    let timeSrc = null;
    if(weather.IsDayTime) {
        timeSrc = '../img/day.svg';
        forecastCont.style.backgroundColor = "rgb(230 236 247)";
        document.querySelector("body"). style.color = "var(--blackText)";
    } else {
        timeSrc = '../img/night.svg';
        forecastCont.style.backgroundColor = "rgb(36 48 70)";
        document.querySelector("body"). style.color = "var(--whiteText)";
    }
    time.setAttribute('src', timeSrc);

}

const updateCity = async (city) => {
    
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // }

    return { cityDets, weather };

}

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get inputted city name from user
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update ui with information
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

})