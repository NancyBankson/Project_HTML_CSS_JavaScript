import { fetchData, fetchCodes } from "./services/apiService.js";
import { Country, Codes } from "./models/Country.js";
// import { CurrencyName } from "./models/Country.js";
const cardHolder = document.getElementById("card-holder");
const searchBar = document.getElementById("search-bar");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const main = document.getElementById("main");
const inputElement = document.getElementById("name-search");
const selectElement = document.getElementById("region-filter");
const allCards = document.getElementsByClassName("card");
const darkThemeClass = "dark-mode";
const localStorageKey = "theme-preference";
const savedTheme = localStorage.getItem(localStorageKey);
let regionSelector = document.getElementById("region-filter");
let countrySelector = document.getElementById("name-search");
let countryArray = [];
let codeArray = [];
function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add(darkThemeClass);
        main.classList.add(darkThemeClass);
        inputElement.classList.add(darkThemeClass);
        selectElement.classList.add(darkThemeClass);
        for (let i = 0; i < allCards.length; i++) {
            const card = allCards[i]; // Type assertion to HTMLElement
            card.classList.add(darkThemeClass);
        }
        themeToggle.innerText = "☀️ Light Mode";
    }
    else {
        body.classList.remove(darkThemeClass);
        main.classList.remove(darkThemeClass);
        inputElement.classList.remove(darkThemeClass);
        selectElement.classList.remove(darkThemeClass);
        for (let i = 0; i < allCards.length; i++) {
            const card = allCards[i]; // Type assertion to HTMLElement
            card.classList.remove(darkThemeClass);
        }
        themeToggle.innerText = "🌙 Dark Mode";
    }
    localStorage.setItem(localStorageKey, theme);
}
themeToggle?.addEventListener("click", function () {
    const currentTheme = body.classList.contains(darkThemeClass) ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});
window.addEventListener('load', () => {
    // Check for saved theme preference on page load
    if (savedTheme) {
        applyTheme(savedTheme);
    }
    else {
        // Optional: Set a default theme if no preference is saved
        applyTheme("light");
    }
    fetchData()
        .then(data => {
        countryArray = data;
        for (let i = 0; i < countryArray.length; i++) {
            const country = new Country(countryArray[i].flags, countryArray[i].name, countryArray[i].currencies
                ? Object.values(countryArray[i].currencies).map((c) => c.name)
                : [], countryArray[i].capital, countryArray[i].region, countryArray[i].subregion, countryArray[i].languages, countryArray[i].borders, countryArray[i].population, countryArray[i].tld, []);
            let flagToDisplay = country.flags.png;
            let flagAlt = country.flags.alt;
            let nameToDisplay = country.name.common;
            let populationToDisplay = country.population;
            let regionToDisplay = country.region;
            let capitalToDisplay = country.capital;
            let newCard = document.createElement("card");
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
            if (savedTheme === "dark") {
                newCard.classList.add(darkThemeClass);
            }
            else {
                newCard.classList.remove(darkThemeClass);
            }
            cardHolder.appendChild(newCard);
        }
    })
        .catch(error => console.error("Fetch error:", error));
});
countrySelector?.addEventListener("change", function () {
    cardHolder.innerHTML = "";
    for (let i = 0; i < countryArray.length; i++) {
        const filterCountry = new Country(countryArray[i].flags, countryArray[i].name, countryArray[i].currencies, countryArray[i].capital, countryArray[i].region, countryArray[i].subregion, countryArray[i].languages, countryArray[i].borders, countryArray[i].population, countryArray[i].tld, []);
        let flagToDisplay = filterCountry.flags.png;
        let flagAlt = filterCountry.flags.alt;
        let nameToDisplay = filterCountry.name.common;
        let populationToDisplay = filterCountry.population;
        let regionToDisplay = filterCountry.region;
        let capitalToDisplay = filterCountry.capital;
        let compareName = countrySelector.value;
        if (nameToDisplay.toUpperCase() === compareName.toUpperCase()) {
            let newCard = document.createElement("card");
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
            if (savedTheme === "dark") {
                newCard.classList.add(darkThemeClass);
            }
            else {
                newCard.classList.remove(darkThemeClass);
            }
            cardHolder.appendChild(newCard);
        }
    }
});
regionSelector?.addEventListener("change", function () {
    cardHolder.innerHTML = "";
    for (let i = 0; i < countryArray.length; i++) {
        const filterCountry = new Country(countryArray[i].flags, countryArray[i].name, countryArray[i].currencies, countryArray[i].capital, countryArray[i].region, countryArray[i].subregion, countryArray[i].languages, countryArray[i].borders, countryArray[i].population, countryArray[i].tld, []);
        let flagToDisplay = filterCountry.flags.png;
        let flagAlt = filterCountry.flags.alt;
        let nameToDisplay = filterCountry.name.common;
        let populationToDisplay = filterCountry.population;
        let regionToDisplay = filterCountry.region;
        let capitalToDisplay = filterCountry.capital;
        let compareRegion = regionSelector.value;
        if (regionToDisplay === compareRegion) {
            let newCard = document.createElement("card");
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
            if (savedTheme === "dark") {
                newCard.classList.add(darkThemeClass);
            }
            else {
                newCard.classList.remove(darkThemeClass);
            }
            cardHolder.appendChild(newCard);
        }
    }
});
cardHolder?.addEventListener("click", function () {
    const targetElement = event.target;
    let divId = "";
    let buttonId = "";
    if (targetElement) {
        const closestDiv = targetElement.closest("card");
        if (closestDiv) {
            divId = closestDiv.id;
        }
        else {
            console.log("not found");
        }
        const closestButton = targetElement.closest("button");
        if (closestButton) {
            buttonId = closestButton.id;
        }
    }
    let id = -1;
    if (divId != "") {
        id = parseInt(divId);
    }
    cardHolder.innerHTML = "";
    searchBar.innerHTML = "";
    fetchCodes()
        .then(data2 => {
        codeArray = data2;
        if ((divId === "") && (buttonId != "")) {
            for (let j = 0; j < codeArray.length; j++) {
                let codeToCompare = codeArray[j].cca3;
                if (buttonId === codeToCompare) {
                    id = j;
                }
            }
        }
        const displayCountry = new Country(countryArray[id].flags, countryArray[id].name, countryArray[id].currencies
            ? Object.values(countryArray[id].currencies).map((c) => c.name)
            : [], countryArray[id].capital, countryArray[id].region, countryArray[id].subregion, Object.values(countryArray[id].languages), countryArray[id].borders, countryArray[id].population, countryArray[id].tld, []);
        let flagToDisplay = displayCountry.flags.png;
        let flagAlt = displayCountry.flags.alt;
        let nameToDisplay = displayCountry.name.common;
        let nativeNameToDisplayObject = displayCountry.name.nativeName;
        let nativeNameToDisplayArray = nativeNameToDisplayObject
            ? Object.values(nativeNameToDisplayObject).map((c) => c.official)
            : [];
        let nativeNameToDisplay = nativeNameToDisplayArray[0];
        let currenciesToDisplay = displayCountry.currencies;
        let populationToDisplay = displayCountry.population;
        let regionToDisplay = displayCountry.region;
        let subregionToDisplay = displayCountry.subregion;
        let capitalToDisplay = displayCountry.capital;
        let topLevelDomainToDisplay = displayCountry.tld;
        let languagesToDisplay = displayCountry.languages;
        let borderCodesArray = displayCountry.borders;
        console.log(borderCodesArray);
        let borderNamesArray = [];
        for (let i = 0; i < borderCodesArray.length; i++) {
            let codeFromTarget = borderCodesArray[i];
            for (let j = 0; j < countryArray.length; j++) {
                let codeToCompare = codeArray[j].cca3;
                if (codeFromTarget === codeToCompare) {
                    borderNamesArray.push(countryArray[j]?.name.common);
                    console.log(countryArray[j]?.name.common);
                }
            }
        }
        let newButton = document.createElement("button");
        newButton.setAttribute("id", "back-button");
        newButton.innerText = "Back <--";
        searchBar?.appendChild(newButton);
        const backButton = document.getElementById("back-button");
        backButton?.addEventListener("click", function () {
            window.location.reload();
        });
        let newDisplay = document.createElement("div");
        newDisplay.setAttribute("class", "big-display");
        newDisplay.innerHTML = `
            <img src=${flagToDisplay} alt=${flagAlt}>
            <div id="display-body">
                <h2 class="card-title">${nameToDisplay}</h2>
                <p class="card-text">Native Name: <span class="text">${nativeNameToDisplay}</span></p>
                <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                <p class="card-text">Region: <span class="text">${regionToDisplay}</span></p>
                <p class="card-text">Sub Region: <span class="text">${subregionToDisplay}</span></p>
                <p class="card-text">Capital: <span class="text">${capitalToDisplay}</span></p>
                <p class="card-text">Top Level Domain: <span class="text">${topLevelDomainToDisplay}</span></p>
                <p class="card-text">Currencies: <span class="text">${currenciesToDisplay}</span></p>
                <p class="card-text">Languages: <span class="text">${languagesToDisplay}</span></p>
            </div>`;
        cardHolder.appendChild(newDisplay);
        const cardBody = document.getElementById("display-body");
        console.log(borderCodesArray.length);
        if (borderNamesArray.length > 0) {
            for (let i = 0; i < borderNamesArray.length; i++) {
                let newBorderButton = document.createElement("button");
                newBorderButton.textContent = borderNamesArray[i];
                newBorderButton.setAttribute("class", "new-country");
                newBorderButton.setAttribute("id", borderCodesArray[i]);
                cardBody?.appendChild(newBorderButton);
            }
        }
    })
        .catch(error => console.error("Fetch error:", error));
});
//# sourceMappingURL=main.js.map