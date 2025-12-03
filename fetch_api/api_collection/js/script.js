"use strict";
// API Lists
// 1. https://random.dog/woof.json
// 2. https://cataas.com/cat
// 3. https://thispersondoesnotexist.com/
// 4. https://goweather.herokuapp.com/weather/toronto
// 5. http://universities.hipolabs.com/search?name=university&country=bangladesh
// 6. https://api.kanye.rest/

const btnDog = document.querySelector("#btnDog");
const dogImage = document.querySelector("#dogImage");
const dogVideo = document.querySelector("#dogVideo");

/**
 * display random dog image
 */
async function dogRandomImage() {
  const url = "https://random.dog/woof.json";
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  const isVideo = data.url.endsWith(".mp4");
  if (isVideo) {
    dogVideo.classList.remove("hide");
    dogVideo.src = data.url;
    dogImage.src = "";
    dogImage.classList.add("hide");
    dogImage.classList.remove("d-block");
  } else {
    dogImage.classList.remove("hide");
    dogImage.classList.add("d-block");
    dogImage.src = data.url;
    dogVideo.src = "";
    dogVideo.classList.add("hide");
  }
}
const btnCat = document.querySelector("#btnCat");
const catImage = document.querySelector("#catImage");
async function catRandomImage() {
  const url = "https://cataas.com/cat?" + Math.floor(Math.random() * 100);
  catImage.src = url;
}
const btnPerson = document.querySelector("#btnPerson");
const personImage = document.querySelector("#personImage");
async function personRandomImage() {
  const url =
    "https://thispersondoesnotexist.com/?" + Math.floor(Math.random() * 100);

  personImage.src = url;
}

async function qupteGenerateRandome() {
  const qupteID = document.querySelector("#qupteID");
  const url = "https://api.kanye.rest/";
  const response = await fetch(url);
  const data = await response.json();
  qupteID.innerText = data.quote;
}

const btnCountry = document.querySelector("#btn_country");
/**
 * get university list by country wise
 */
async function fetchUniversityList() {
  const countryName = document.querySelector("#country_name");
  const country = countryName.value;
  const url = `http://universities.hipolabs.com/search?name=university&country=${country}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`University not found ${response.status}`);
    }
    const data = await response.json();
    document.querySelector(
      "#university_count"
    ).innerText = `Total University in ${country} are ${data.length}`;
    document.querySelector("#universityList").innerHTML = data
      .map((university) => {
        const html = `<li class="list-group-item my-1">
              <a class="text-secondary" href="${university.web_pages[0]}" target="_blank" rel="noopener noreferrer">${university.name}</a>
            </li>`;

        return html;
      })
      .join("");
    countryName.value = "";
  } catch (error) {
    document.getElementById("universityList").innerHTML = `
        <div class="alert alert-danger">
        <h2>Error fetching unioversity data</h2>
        <p>Please try again later</p>
        <p>${err.message}</p>
    </div>
        `;
  }
}

const btnWeather = document.querySelector("#btnWeather");
const locationInp = document.querySelector("#locationInp");
/**
 * get weather data of the location
 */
async function fetchWeather() {
  console.log(locationInp.value);
  const localtionValue = locationInp.value;
  const url = `https://goweather.herokuapp.com/weather/${localtionValue}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch Weather Data");
    }
    const data = await response.json();
    console.log(data);
    if (data.temperature) {
      document.querySelector("#weatherData").innerHTML = `
      <div class="alert alert-success">
        <h2>Weather in ${localtionValue}</h2>
        <p>Temperature <strong>${data.temperature}</strong></p>
        <p>Description <strong>${data.description}</strong></p>
      </div>
      `;
    }
    locationInp.value = "";
  } catch (error) {
    document.querySelector("#weatherData").innerHTML = `
      <div class="alert alert-success">
        <div class="alert alert-danger">
        <h2>No Weather data found in ${localtionValue}</h2>
      </div>
      `;
  }
}
// setInterval(dogRandomImage, 5000);
// setInterval(catRandomImage, 5000);
// setInterval(personRandomImage, 5000);
setInterval(qupteGenerateRandome, 5000);
window.onload = function () {
  dogRandomImage();
  catRandomImage();
  personRandomImage();
  qupteGenerateRandome();
};
btnDog.addEventListener("click", dogRandomImage);
btnCat.addEventListener("click", catRandomImage);
btnPerson.addEventListener("click", personRandomImage);
btnCountry.addEventListener("click", fetchUniversityList);
btnWeather.addEventListener("click", fetchWeather);
