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
    dogImage.src = data.url;
    dogVideo.src = "";
    dogVideo.classList.add("hide");
  }
}
// setInterval(dogRandomImage, 5000);
window.onload = function () {
  dogRandomImage();
};
btnDog.addEventListener("click", dogRandomImage);
// dogRandomImage();
