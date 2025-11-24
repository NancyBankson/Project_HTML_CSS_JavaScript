export declare class Country {
    flags: flags;
    name: name;
    currencies: string[];
    capital: string[];
    region: string;
    subregion: string;
    languages: string;
    borders: string;
    constructor(flags: flags, name: name, currencies: string[], capital: string[], region: string, subregion: string, languages: string, borders: string);
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
export {};
//# sourceMappingURL=Country.d.ts.map