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
    constructor(flags, name, currencies, capital, region, subregion, languages, borders, population) {
        this.flags = flags;
        this.name = name;
        this.currencies = currencies;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.borders = borders;
        this.population = population;
    }
    displayDetails() {
        return `
      Flag: ${this.flags.png}
      Name: ${this.name.common}
      Region: ${this.region}
      Capital: ${this.capital}`;
    }
}
//# sourceMappingURL=Country.js.map