// Retrieve the following fields for each country: name, population, region, capital, flag image, native name, sub region, top level domian, currencies, languages, border countries
export async function fetchData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all?status=true&fields=name,population,region,capital,flags,subregion,currencies,languages,borders,tld");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
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
        if (!response2.ok) {
            throw new Error("Network response was not ok");
        }
        const data2 = await response2.json();
        return data2;
    }
    catch (error) {
        console.error("Fetch error:", error);
    }
}
//# sourceMappingURL=apiService.js.map