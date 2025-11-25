import { fetchData } from "./services/apiService.js";
import { Country } from "./models/Country.js";
const cardHolder = document.getElementById("card-holder");
let regionSelector = document.getElementById("region-filter");
let countryArray = [];
window.addEventListener('load', () => {
    fetchData()
        .then(data => {
        countryArray = data;
        for (let i = 0; i < countryArray.length; i++) {
            const country = new Country(countryArray[i].flags, countryArray[i].name, countryArray[i].currencies, countryArray[i].capital, countryArray[i].region, countryArray[i].subregion, countryArray[i].languages, countryArray[i].borders, countryArray[i].population);
            let flagToDisplay = country.flags.png;
            let flagAlt = country.flags.alt;
            let nameToDisplay = country.name.common;
            let populationToDisplay = country.population;
            let regionToDisplay = country.region;
            let capitalToDisplay = country.capital;
            let newCard = document.createElement("div");
            newCard.setAttribute("class", "card");
            newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body">
                        <h2 class="card-title">${nameToDisplay}<h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
            cardHolder.appendChild(newCard);
            // console.log(country.displayDetails());
            // console.log(data);
            // console.log(country.displayDetails());            
        }
        // const country = new Country(countryArray[0].flags, countryArray[0].name, countryArray[0].currencies, countryArray[0].capital, countryArray[0].region, countryArray[0].subregion, countryArray[0].languages, countryArray[0].borders, countryArray[0].population);
    })
        .catch(error => console.error("Fetch error:", error));
});
regionSelector?.addEventListener("change", function () {
    cardHolder.innerHTML = "";
    for (let i = 0; i < countryArray.length; i++) {
        const filterCountry = new Country(countryArray[i].flags, countryArray[i].name, countryArray[i].currencies, countryArray[i].capital, countryArray[i].region, countryArray[i].subregion, countryArray[i].languages, countryArray[i].borders, countryArray[i].population);
        let flagToDisplay = filterCountry.flags.png;
        let flagAlt = filterCountry.flags.alt;
        let nameToDisplay = filterCountry.name.common;
        let populationToDisplay = filterCountry.population;
        let regionToDisplay = filterCountry.region;
        let capitalToDisplay = filterCountry.capital;
        let compareRegion = regionSelector.value;
        if (regionToDisplay === compareRegion) {
            let newCard = document.createElement("div");
            newCard.setAttribute("class", "card");
            newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body">
                        <h2 class="card-title">${nameToDisplay}<h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
            cardHolder.appendChild(newCard);
        }
    }
});
//# sourceMappingURL=main.js.map