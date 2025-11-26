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
    constructor(flags, name, currencies, capital, region, subregion, languages, borders, population, tld) {
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
export class CurrencyName {
    name;
    symbol;
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}
//# sourceMappingURL=Country.js.map