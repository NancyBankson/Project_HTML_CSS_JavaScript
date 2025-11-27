export class Country {
    flags;
    name;
    currencies;
    capital;
    region;
    subregion;
    languages;
    borders;
    population;
    tld;
    code;
    constructor(flags, name, currencies, capital, region, subregion, languages, borders, population, tld, code) {
        this.flags = flags;
        this.name = name;
        this.currencies = currencies;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.borders = borders;
        this.population = population;
        this.tld = tld;
        this.code = code;
    }
    displayDetails() {
        return `
      Flag: ${this.flags.png}
      Name: ${this.name.common}
      Region: ${this.region}
      Capital: ${this.capital}
      Currencies: ${this.currencies}
      Native Name: ${this.name.nativeName}
      Sub Region: ${this.subregion}
      Languages: ${this.languages}
      Border Countries: ${this.borders}
      `;
    }
}
// export class CurrencyName {
//     name: string;
//     symbol: string;
//     constructor(name: string, symbol: string) {
//         this.name = name;
//         this.symbol = symbol;
//     }
// }
export class Codes {
    cca3;
    name;
    constructor(cca3, name) {
        this.cca3 = cca3;
        this.name = name;
    }
}
//# sourceMappingURL=Country.js.map