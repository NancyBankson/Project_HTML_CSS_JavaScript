

export class Country {
    flags: flags;
    name: name;
    currencies: string[];
    capital: string[];
    region: string;
    subregion: string;
    languages: string[];
    borders: string[];
    population: number;
    tld: string[];
    code: string[];
    constructor(flags: flags, name: name, currencies: string[], capital: string[], region: string, subregion: string, languages: string[], borders: string[], population: number, tld: string[], code: string[]) {
        this.flags = flags;
        this.name = name;
        this.currencies = currencies;
        this.capital = capital;
        this.region = region;
        this.subregion =subregion;
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
      `
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

// export class CurrencyName {
//     name: string;
//     symbol: string;

//     constructor(name: string, symbol: string) {
//         this.name = name;
//         this.symbol = symbol;
//     }
// }

export class Codes {
    cca3: string;
    name: string[];
    constructor(cca3: string, name: string[]) {
        this.cca3 = cca3;
        this.name = name;
    }
}
