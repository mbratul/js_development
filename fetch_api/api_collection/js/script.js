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
const qupteID = document.querySelector("#qupteID");

async function qupteGenerateRandome() {
  const url = "https://api.kanye.rest/";
  const response = await fetch(url);
  const data = await response.json();
  qupteID.innerText = data.quote;
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
