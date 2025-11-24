export class Country {
    flags;
    name;
    currencies;
    capital;
    region;
    subregion;
    languages;
    borders;
    constructor(flags, name, currencies, capital, region, subregion, languages, borders) {
        this.flags = flags;
        this.name = name;
        this.currencies = currencies;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.borders = borders;
    }
    displayDetails() {
        return `
      Flag: ${this.flags.png}
      Name: ${this.name}
      Region: ${this.region}
      Capital: ${this.capital}`;
    }
}
//# sourceMappingURL=Country.js.map