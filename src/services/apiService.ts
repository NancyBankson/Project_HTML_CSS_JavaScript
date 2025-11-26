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