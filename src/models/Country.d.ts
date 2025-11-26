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
    constructor(flags: flags, name: name, currencies: string[], capital: string[], region: string, subregion: string, languages: string[], borders: string[], population: number);
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
export {};
//# sourceMappingURL=Country.d.ts.map