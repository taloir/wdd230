const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const day1high = document.querySelector('#day1high');
const day2high = document.querySelector('#day2high');
const day3high = document.querySelector('#day3high');
const day1low = document.querySelector('#day1low');
const day2low = document.querySelector('#day2low');
const day3low = document.querySelector('#day3low');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.39&lon=-104.52&units=imperial&appid=d629a871051a7e971a6a9bc52d109f8a';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.39&lon=-104.52&units=imperial&appid=d629a871051a7e971a6a9bc52d109f8a'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayResults(data){
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

async function forecastFetch() {
  try {
    const response = await fetch(forecasturl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayForecastResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayForecastResults(data){
  day1high.textContent = `${data.list[0].main.temp_max}`;
  day2high.textContent = `${data.list[1].main.temp_max}`;
  day3high.textContent = `${data.list[2].main.temp_max}`;
  day1low.textContent = `${data.list[0].main.temp_min}`;
  day2low.textContent = `${data.list[1].main.temp_min}`;
  day3low.textContent = `${data.list[2].main.temp_min}`;
}
  
  apiFetch();
  forecastFetch();