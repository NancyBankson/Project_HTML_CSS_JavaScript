
import { fetchData } from "./services/apiService.js";
import { Country } from "./models/Country.js";

const cardHolder: HTMLElement | null = document.getElementById("card-holder");

window.addEventListener('load', () => {
    fetchData()
        .then(data => {
            // const productArray = data.products;
            const countryArray: Country[] = data;
            // for (let i = 0; i < countryArray.length; i++) {
            //     const country = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies, countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders);
            //     console.log(country.displayDetails());            
            // }
            const country = new Country(countryArray[0]!.flags, countryArray[0]!.name, countryArray[0]!.currencies, countryArray[0]!.capital, countryArray[0]!.region, countryArray[0]!.subregion, countryArray[0]!.languages, countryArray[0]!.borders, countryArray[0]!.population);
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
            </div>`
            cardHolder!.appendChild(newCard);
            // console.log(country.displayDetails());
            // console.log(data);
        })
        .catch(error => console.error("Fetch error:", error));
})


