export class Country {
    flags: flags;
    name: name;
    currencies: string[];
    capital: string[];
    region: string;
    subregion: string;
    languages: string;
    borders: string;
    constructor(flags: flags, name: name, currencies: string[], capital: string[], region: string, subregion: string, languages: string, borders: string) {
        this.flags = flags;
        this.name = name;
        this.currencies = currencies;
        this.capital = capital;
        this.region = region;
        this.subregion =subregion;
        this.languages = languages;
        this.borders = borders;
    }
    displayDetails() {
        return `
      Flag: ${this.flags.png}
      Name: ${this.name}
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