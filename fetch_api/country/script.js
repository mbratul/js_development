"use strict";
const select = document.querySelector("#country");
const countryName = document.querySelector("#country_name");
const countryCapital = document.querySelector("#country_capital");
const countryPopulation = document.querySelector("#country_population");
const showDetails = document.querySelector("#showDetails");
const countryURL =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca2";
let countryData = [];
async function loadCountries() {
  const response = await fetch(countryURL);
  const data = await response.json();
  countryData = data;
  //   console.log(countryData);

  countryData.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.cca2;
    option.innerText = country.name.common;
    select.appendChild(option);
  });
}
select.addEventListener("change", function () {
  const selectedCode = this.value;
  const country = countryData.find((c) => {
    return c.cca2 === selectedCode;
  });
  //   console.log(country);
  if (country) {
    showDetails.classList.remove("hide");
    countryName.innerText = country.name.common;
    countryCapital.innerText = country.capital;
    countryPopulation.innerText = country.population.toLocaleString();
  } else {
    showDetails.classList.add("hide");
  }
});
loadCountries();
