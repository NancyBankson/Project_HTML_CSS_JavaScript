
import { fetchData } from "./services/apiService.js";

fetchData()
    .then(data => {
        // const productArray = data.products;
        // for (let i = 0; i < data.length; i++) {
        //     const country = new Country(data[i].flags, data[i].name, data[i].currencies, data[i].capital, data[i].region, data[i].subregion, data[i].languages, data[i].border);
        //     console.log(country.displayDetails());
            
        // }
        console.log(data);
    })
    .catch(error => console.error("Fetch error:", error));