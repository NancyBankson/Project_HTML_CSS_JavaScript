
import { fetchData } from "./services/apiService.js";
import { Country } from "./models/Country.js";

fetchData()
    .then(data => {
        // const productArray = data.products;
        const countryArray: Country[] = data;
        // for (let i = 0; i < countryArray.length; i++) {
        //     const country = new Country(countryArray[i]!.flags, countryArray[i]!.name, countryArray[i]!.currencies, countryArray[i]!.capital, countryArray[i]!.region, countryArray[i]!.subregion, countryArray[i]!.languages, countryArray[i]!.borders);
        //     console.log(country.displayDetails());            
        // }
        const country = new Country(countryArray[0]!.flags, countryArray[0]!.name, countryArray[0]!.currencies, countryArray[0]!.capital, countryArray[0]!.region, countryArray[0]!.subregion, countryArray[0]!.languages, countryArray[0]!.borders, countryArray[0]!.population);
        console.log(country.displayDetails());
        // console.log(data);
    })
    .catch(error => console.error("Fetch error:", error));