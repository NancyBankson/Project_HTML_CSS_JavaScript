
import { fetchData } from "./services/apiService.js";

fetchData()
    .then(data => {
        // const productArray = data.products;
        // for (let i = 0; i < productArray.length; i++) {
        //     const newProduct = new Product(productArray[i].id, productArray[i].title, productArray[i].description, productArray[i].category, productArray[i].price, productArray[i].discountPercentage, productArray[i].rating);
        //     console.log(newProduct.displayDetails());
        //     console.log(`
        //   Total price with tax and discount: $ ${newProduct.getPriceWithDiscount()}`);
        // }
        console.log(data);
    })
    .catch(error => console.error("Fetch error:", error));