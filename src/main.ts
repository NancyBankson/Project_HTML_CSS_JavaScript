
import { fetchData, fetchCodes } from "./services/apiService.js";
import { Country, Codes } from "./models/Country.js";

const cardHolder: HTMLElement | null = document.getElementById("card-holder");
const searchBar: HTMLElement | null = document.getElementById("search-bar");
const themeToggle: HTMLElement | null = document.getElementById("theme-toggle");
const body: HTMLElement | null = document.body;
const header: HTMLElement | null = document.getElementById("header");
const inputElement: HTMLElement | null = document.getElementById("name-search");
const selectElement: HTMLElement | null = document.getElementById("region-filter");
const allCards = document.getElementsByClassName("card");
const darkThemeClass: string = "dark-mode";
const localStorageKey: string = "theme-preference";
const savedTheme = localStorage.getItem(localStorageKey);
let regionSelector = document.getElementById("region-filter") as HTMLSelectElement;
let countrySelector = document.getElementById("name-search") as HTMLInputElement;
let countryArray: Country[] = [];
let codeArray: Codes[] = [];

function applyTheme(theme: string) {
    const backButton: HTMLElement | null = document.getElementById("back-button");
    const allButtons = document.getElementsByClassName("new-country");
    if (theme === "dark") {
        body!.classList.add(darkThemeClass);
        header!.classList.add(darkThemeClass);
        inputElement!.classList.add(darkThemeClass);
        selectElement!.classList.add(darkThemeClass);
        if (backButton) {
            backButton!.classList.add(darkThemeClass);
        }
        for (let i = 0; i < allCards.length; i++) {
            const card = allCards[i] as HTMLElement;
            card.classList.add(darkThemeClass);
        }
        for (let i = 0; i < allButtons.length; i++) {
            const countryButton = allButtons[i] as HTMLElement;
            countryButton.classList.add(darkThemeClass);
        }
        themeToggle!.innerText = "☀️ Light Mode";
    } else {
        body!.classList.remove(darkThemeClass);
        header!.classList.remove(darkThemeClass);
        inputElement!.classList.remove(darkThemeClass);
        selectElement!.classList.remove(darkThemeClass);
        if (backButton) {
            backButton!.classList.remove(darkThemeClass);
        }
        for (let i = 0; i < allCards.length; i++) {
            const card = allCards[i] as HTMLElement;
            card.classList.remove(darkThemeClass);
        }
        for (let i = 0; i < allButtons.length; i++) {
            const countryButton = allButtons[i] as HTMLElement;
            countryButton.classList.remove(darkThemeClass);
        }
        themeToggle!.innerText = "🌙 Dark Mode";
    }
    localStorage.setItem(localStorageKey, theme);
}

themeToggle?.addEventListener("click", function () {
    const currentTheme = body.classList.contains(darkThemeClass) ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
})

window.addEventListener('load', () => {

    // Check for saved theme preference on page load
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Set a default theme if no preference is saved
        applyTheme("light");
    }
    fetchData()
        .then(data => {
            countryArray = data;
            for (let i = 0; i < countryArray.length; i++) {
                const country = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies
                    ? Object.values(countryArray[i]!.currencies).map((c: any) => c.name)
                    : [], countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders, countryArray[i]!.population, countryArray[i]!.tld, []);
                let flagToDisplay = country.flags.png;
                let flagAlt = country.flags.alt;
                let nameToDisplay = country.name.common;
                let populationToNumberDisplay = country.population;
                let populationToDisplay = populationToNumberDisplay.toLocaleString();
                let regionToDisplay = country.region;
                let capitalToDisplay = country.capital;
                let newCard = document.createElement("card");
                newCard.setAttribute("class", "card");
                let idString = i.toString();
                newCard.setAttribute("id", idString);
                newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body" id="${i}">
                        <h2 class="card-title">${nameToDisplay}</h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
                if (savedTheme === "dark") {
                    newCard!.classList.add(darkThemeClass);
                } else {
                    newCard!.classList.remove(darkThemeClass);
                }
                cardHolder!.appendChild(newCard);
            }
        })
        .catch(error => console.error("Fetch error:", error));
})

countrySelector?.addEventListener("change", function () {
    cardHolder!.innerHTML = "";
    for (let i = 0; i < countryArray.length; i++) {
        const filterCountry = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies, countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders, countryArray[i]!.population, countryArray[i]!.tld, []);
        let flagToDisplay = filterCountry.flags.png;
        let flagAlt = filterCountry.flags.alt;
        let nameToDisplay = filterCountry.name.common;
        let populationToNumberDisplay = filterCountry.population;
        let populationToDisplay = populationToNumberDisplay.toLocaleString();
        let regionToDisplay = filterCountry.region;
        let capitalToDisplay = filterCountry.capital;
        let compareName: string = countrySelector.value;
        if (nameToDisplay.toUpperCase() === compareName.toUpperCase()) {
            let newCard = document.createElement("card");
            newCard.setAttribute("class", "card");
            let idString = i.toString();
            newCard.setAttribute("id", idString);
            newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body" id="${i}">
                        <h2 class="card-title">${nameToDisplay}</h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
            if (savedTheme === "dark") {
                newCard!.classList.add(darkThemeClass);
            } else {
                newCard!.classList.remove(darkThemeClass);
            }
            cardHolder!.appendChild(newCard);
        }
    }
    countrySelector.value = "";
})

regionSelector?.addEventListener("change", function () {
    cardHolder!.innerHTML = "";
    for (let i = 0; i < countryArray.length; i++) {
        const filterCountry = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies, countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders, countryArray[i]!.population, countryArray[i]!.tld, []);
        let flagToDisplay = filterCountry.flags.png;
        let flagAlt = filterCountry.flags.alt;
        let nameToDisplay = filterCountry.name.common;
        let populationToNumberDisplay = filterCountry.population;
        let populationToDisplay = populationToNumberDisplay.toLocaleString();
        let regionToDisplay = filterCountry.region;
        let capitalToDisplay = filterCountry.capital;
        let compareRegion: string = regionSelector.value;
        if (regionToDisplay === compareRegion) {
            let newCard = document.createElement("card");
            newCard.setAttribute("class", "card");
            let idString = i.toString();
            newCard.setAttribute("id", idString);
            newCard.innerHTML = `
                    <img src=${flagToDisplay} class="card-img-top" alt=${flagAlt}>
                    <div class= "card-body" id="${i}">
                        <h2 class="card-title">${nameToDisplay}</h2>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p>Region: <span class="text">${regionToDisplay}</span></p>
                        <p>Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>`;
            if (savedTheme === "dark") {
                newCard!.classList.add(darkThemeClass);
            } else {
                newCard!.classList.remove(darkThemeClass);
            }
            cardHolder!.appendChild(newCard);
        }
    }
    regionSelector.value = "";
})

cardHolder?.addEventListener("click", function () {
    const targetElement = event!.target as HTMLElement;
    let divId = "";
    let buttonId = "";
    if (targetElement) {
        const closestDiv = targetElement.closest("card");
        if (closestDiv) {
            divId = closestDiv.id;
        } else {
            console.log("not found")
        }
        const closestButton = targetElement.closest("button");
        if (closestButton) {
            buttonId = closestButton.id;
        }
    }
    let id = -1;
    if (divId != "") {
        id = parseInt(divId);
    } else if (buttonId === "") {
        return;
    }
    cardHolder!.innerHTML = "";
    searchBar!.innerHTML = "";

    fetchCodes()
        .then(data2 => {
            codeArray = data2;
            if ((divId === "") && (buttonId != "")) {
                for (let j = 0; j < codeArray.length; j++) {
                    let codeToCompare = codeArray[j]!.cca3;
                    if (buttonId === codeToCompare) {
                        id = j;
                    }
                }
            }

            const displayCountry = new Country(countryArray[id]!.flags, countryArray[id]!.name, countryArray[id]!.currencies
                ? Object.values(countryArray[id]!.currencies).map((c: any) => c.name)
                : [], countryArray[id]!.capital, countryArray[id]!.region, countryArray[id]!.subregion, Object.values(countryArray[id]!.languages), countryArray[id]!.borders, countryArray[id]!.population, countryArray[id]!.tld, []);

            let flagToDisplay = displayCountry.flags.png;
            let flagAlt = displayCountry.flags.alt;
            let nameToDisplay = displayCountry.name.common;
            let nativeNameToDisplayObject = displayCountry.name.nativeName;
            let nativeNameToDisplayArray = nativeNameToDisplayObject
                ? Object.values(nativeNameToDisplayObject).map((c: any) => c.official)
                : [];
            let nativeNameToDisplay = nativeNameToDisplayArray[0];
            let currenciesToDisplay = displayCountry.currencies[0];
            for (let i = 1; i < displayCountry.currencies.length; i++) {
                currenciesToDisplay = currenciesToDisplay + ", " + displayCountry.currencies[i];
            }
            let populationToNumberDisplay = displayCountry.population;
            let populationToDisplay = populationToNumberDisplay.toLocaleString();
            let regionToDisplay = displayCountry.region;
            let subregionToDisplay = displayCountry.subregion;
            let capitalToDisplay = displayCountry.capital;
            let topLevelDomainToDisplay = displayCountry.tld[0];
            for (let i = 1; i < displayCountry.tld.length; i++) {
                topLevelDomainToDisplay = topLevelDomainToDisplay + ", " + displayCountry.tld[i];
            }
            let languagesToDisplay = displayCountry.languages[0];
            for (let i = 1; i < displayCountry.languages.length; i++) {
                languagesToDisplay = languagesToDisplay + ", " + displayCountry.languages[i];
            }
            let borderCodesArray = displayCountry.borders;
            let borderNamesArray = [];
            for (let i = 0; i < borderCodesArray.length; i++) {
                let codeFromTarget = borderCodesArray[i];
                for (let j = 0; j < countryArray.length; j++) {
                    let codeToCompare = codeArray[j]!.cca3;
                    if (codeFromTarget === codeToCompare) {
                        borderNamesArray.push(countryArray[j]?.name.common);
                    }
                }
            }

            let newButton = document.createElement("button");
            newButton.setAttribute("id", "back-button");
            newButton.setAttribute("class", "back");
            newButton.innerText = "←  Back";
            if (savedTheme === "dark") {
                newButton!.classList.add(darkThemeClass);
            } else {
                newButton!.classList.remove(darkThemeClass);
            }
            searchBar?.appendChild(newButton);

            const backButton: HTMLElement | null = document.getElementById("back-button");
            backButton?.addEventListener("click", function () {
                window.location.reload();
            })

            let newDisplay = document.createElement("div");
            newDisplay.setAttribute("class", "big-display");
            newDisplay.innerHTML = `
            <img src=${flagToDisplay} alt=${flagAlt}>
            <div id="display-body">            
                <h2 class="card-title">${nameToDisplay}</h2>
                <div id="text-row">
                    <div>
                        <p class="card-text">Native Name: <span class="text">${nativeNameToDisplay}</span></p>
                        <p class="card-text">Population: <span class="text">${populationToDisplay}</span></p>
                        <p class="card-text">Region: <span class="text">${regionToDisplay}</span></p>
                        <p class="card-text">Sub Region: <span class="text">${subregionToDisplay}</span></p>
                        <p class="card-text">Capital: <span class="text">${capitalToDisplay}</span></p>
                    </div>
                    <div id="second-col">
                        <p class="card-text">Top Level Domain: <span class="text">${topLevelDomainToDisplay}</span></p>
                        <p class="card-text">Currencies: <span class="text">${currenciesToDisplay}</span></p>
                        <p class="card-text">Languages: <span class="text">${languagesToDisplay}</span></p>
                    </div>          
                </div> 
                <div id="borders">
                    <p class="button-text">Border Countries: </p>     
                </div>
            </div>`;
            cardHolder.appendChild(newDisplay);
            const cardBody: HTMLElement | null = document.getElementById("borders");
            if (borderNamesArray.length > 0) {
                for (let i = 0; i < borderNamesArray.length; i++) {
                    let newBorderButton = document.createElement("button");
                    newBorderButton.textContent = borderNamesArray[i]!;
                    newBorderButton.setAttribute("class", "new-country");
                    newBorderButton.setAttribute("id", borderCodesArray[i]!);
                    if (savedTheme === "dark") {
                        newBorderButton!.classList.add(darkThemeClass);
                    } else {
                        newBorderButton!.classList.remove(darkThemeClass);
                    }
                    cardBody?.appendChild(newBorderButton);
                }
            }

        })

        .catch(error => console.error("Fetch error:", error));
})