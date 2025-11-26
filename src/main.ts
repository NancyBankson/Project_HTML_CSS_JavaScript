
import { fetchData } from "./services/apiService.js";
import { Country } from "./models/Country.js";
import { CurrencyName } from "./models/Country.js";

const cardHolder: HTMLElement | null = document.getElementById("card-holder");
const searchBar: HTMLElement | null = document.getElementById("search-bar");
let regionSelector = document.getElementById("region-filter") as HTMLSelectElement;
let countrySelector = document.getElementById("name-search") as HTMLInputElement;
let countryArray: Country[] = [];

window.addEventListener('load', () => {
    fetchData()
        .then(data => {
            countryArray = data;
            // console.log(countryArray);
            for (let i = 0; i < countryArray.length; i++) {
                const country = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies
                    ? Object.values(countryArray[i]!.currencies).map((c: any) => c.name)
                    : [], countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders, countryArray[i]!.population, countryArray[i]!.tld);
                // console.log(country);
                let flagToDisplay = country.flags.png;
                let flagAlt = country.flags.alt;
                let nameToDisplay = country.name.common;
                let nativeNameToDisplay = country.name.nativeName;
                console.log(nativeNameToDisplay);
                let populationToDisplay = country.population;
                let regionToDisplay = country.region;
                let capitalToDisplay = country.capital;
                let newCard = document.createElement("div");
                newCard.setAttribute("class", "card");
                let idString = i.toString();
                newCard.setAttribute("id", idString);
                newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body" id="${i}"
                        <h2 class="card-title">${nameToDisplay}<h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
                cardHolder!.appendChild(newCard);
                // console.log(data);
                // console.log(country.displayDetails());            
            }
            // const country = new Country(countryArray[0].flags, countryArray[0].name, countryArray[0].currencies, countryArray[0].capital, countryArray[0].region, countryArray[0].subregion, countryArray[0].languages, countryArray[0].borders, countryArray[0].population);

        })
        .catch(error => console.error("Fetch error:", error));
})

countrySelector?.addEventListener("change", function () {
    cardHolder!.innerHTML = "";
    for (let i = 0; i < countryArray.length; i++) {
        const filterCountry = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies, countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders, countryArray[i]!.population, countryArray[i]!.tld);
        let flagToDisplay = filterCountry.flags.png;
        let flagAlt = filterCountry.flags.alt;
        let nameToDisplay = filterCountry.name.common;
        let populationToDisplay = filterCountry.population;
        let regionToDisplay = filterCountry.region;
        let capitalToDisplay = filterCountry.capital;
        let compareName: string = countrySelector.value;
        if (nameToDisplay.toUpperCase() === compareName.toUpperCase()) {
            let newCard = document.createElement("div");
            newCard.setAttribute("class", "card");
            let idString = i.toString();
            newCard.setAttribute("id", idString);
            newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body" id="${i}"
                        <h2 class="card-title">${nameToDisplay}<h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
            cardHolder!.appendChild(newCard);
        }
    }
})

regionSelector?.addEventListener("change", function () {
    cardHolder!.innerHTML = "";
    for (let i = 0; i < countryArray.length; i++) {
        const filterCountry = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies, countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders, countryArray[i]!.population, countryArray[i]!.tld);
        let flagToDisplay = filterCountry.flags.png;
        let flagAlt = filterCountry.flags.alt;
        let nameToDisplay = filterCountry.name.common;
        let populationToDisplay = filterCountry.population;
        let regionToDisplay = filterCountry.region;
        let capitalToDisplay = filterCountry.capital;
        let compareRegion: string = regionSelector.value;
        if (regionToDisplay === compareRegion) {
            let newCard = document.createElement("div");
            newCard.setAttribute("class", "card");
            let idString = i.toString();
            newCard.setAttribute("id", idString);
            newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body" id="${i}">
                        <h2 class="card-title">${nameToDisplay}<h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
            cardHolder!.appendChild(newCard);
        }

    }
})

cardHolder?.addEventListener("click", function () {
    // if ((event!.target as HTMLElement)?.classList.contains("card")) {
    //     console.log("true");
        const targetElement = event!.target as HTMLElement;
        let divId = "0";
        if (targetElement) {
            const closestDiv = targetElement.closest("div");
            if (closestDiv) {
                divId = closestDiv.id;
                // Use divId here
                // console.log(divId);
            } else {
                // Handle the case where no ancestor div was found
                console.log("not found")
            }
        }
        let id = parseInt(divId);
        cardHolder!.innerHTML = "";
        searchBar!.innerHTML = "";

        const displayCountry = new Country(countryArray[id]!.flags, countryArray[id]!.name, countryArray[id]!.currencies
            ? Object.values(countryArray[id]!.currencies).map((c: any) => c.name)
            : [], countryArray[id]!.capital, countryArray[id]!.region, countryArray[id]!.subregion, Object.values(countryArray[id]!.languages), countryArray[id]!.borders, countryArray[id]!.population, countryArray[id]!.tld);
   
        let flagToDisplay = displayCountry.flags.png;
        let flagAlt = displayCountry.flags.alt;
        let nameToDisplay = displayCountry.name.common;
        let nativeNameToDisplayObject = displayCountry.name.nativeName;
        let nativeNameToDisplayArray = nativeNameToDisplayObject
            ? Object.values(nativeNameToDisplayObject).map((c: any) => c.official)
            : [];
        let nativeNameToDisplay = nativeNameToDisplayArray[0];        
        let currenciesToDisplay = displayCountry.currencies;
        let populationToDisplay = displayCountry.population;
        let regionToDisplay = displayCountry.region;
        let subregionToDisplay = displayCountry.subregion;
        let capitalToDisplay = displayCountry.capital;
        let topLevelDomainToDisplay = displayCountry.tld;
        let languagesToDisplay = displayCountry.languages;

        let newButton = document.createElement("button");
        newButton.innerText = "Back <--"
        searchBar?.appendChild(newButton);
        let newDisplay = document.createElement("div");
        newDisplay.setAttribute("class", "big-display");
        newDisplay.innerHTML = `
            <img src=${flagToDisplay} alt=${flagAlt}>
            <div class= "display-body">
                <h2 class="card-title">${nameToDisplay}<h2>
                <p class="card-text">Native Name: <span class="text">${nativeNameToDisplay}</span></p>
                <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                <p>Region: <span class="text">${regionToDisplay}</span></p>
                <p>Sub Region: <span class="text">${subregionToDisplay}</span></p>
                <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                <p>Top Level Domain: <span class="text">${topLevelDomainToDisplay}</span></p>
                <p>Currencies: <span class="text">${currenciesToDisplay}</span></p>
                <p>Languages: <span class="text">${languagesToDisplay}</span></p>
            </div>`;
        cardHolder.appendChild(newDisplay);
    // }
})

