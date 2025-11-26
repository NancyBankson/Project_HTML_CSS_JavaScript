export declare class Country {
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
    constructor(flags: flags, name: name, currencies: string[], capital: string[], region: string, subregion: string, languages: string[], borders: string[], population: number, tld: string[], code: string[]);
    displayDetails(): string;
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
export declare class CurrencyName {
    name: string;
    symbol: string;
    constructor(name: string, symbol: string);
}
export declare class Codes {
    cca3: string;
    name: string[];
    constructor(cca3: string, name: string[]);
}
export {};
//# sourceMappingURL=Country.d.ts.map