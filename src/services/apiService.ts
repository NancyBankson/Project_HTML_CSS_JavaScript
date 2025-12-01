import { NetworkError } from "../utils/errorHandler.js";

function checkNetwork(newresponse: any) {
    if (!newresponse.ok) {
        throw new NetworkError("Network is not responding");
    }
}

// Retrieve the following fields for each country: name, population, region, capital, flag image, native name, sub region, top level domian, currencies, languages, border countries
export async function fetchData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all?status=true&fields=name,population,region,capital,flags,subregion,currencies,languages,borders,tld");
        checkNetwork(response);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Fetch error:", error);
    }
}

export async function fetchCodes() {
    try {
        const response2 = await fetch("https://restcountries.com/v3.1/all?status=true&fields=name,cca3");
       checkNetwork(response2);
        const data2 = await response2.json();
        return data2;
    }
    catch (error) {
        console.error("Fetch error:", error);
    }
}