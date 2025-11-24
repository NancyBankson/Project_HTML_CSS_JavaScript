export class Country {
    flags: flags;
    name: name;
    currencies: string[];
    capital: string[];
    region: string;
    subregion: string;
    languages: string;
    borders: string[];
    population: number;
    constructor(flags: flags, name: name, currencies: string[], capital: string[], region: string, subregion: string, languages: string, borders: string[], population: number) {
        this.flags = flags;
        this.name = name;
        this.currencies = currencies;
        this.capital = capital;
        this.region = region;
        this.subregion =subregion;
        this.languages = languages;
        this.borders = borders;
        this.population = population;
    }
    displayDetails() {
        return `
      Flag: ${this.flags.png}
      Name: ${this.name.common}
      Region: ${this.region}
      Capital: ${this.capital}`
    }
}

interface flags {
    png: string;
    svg: string;
    alt: string;
}

interface name {
    common: string;
    official: string;
    nativeName: string[];
}