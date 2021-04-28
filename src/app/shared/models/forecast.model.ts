export class Forecast {
    constructor(
        public city: City,
        public cod: string,
        public cnt: number,
        public message: number,
        public list: Array<List>
    ) { }
}


export class City {
    constructor(
        public id: number,
        public coord: Coord,
        public name: string,
        public sunset: number,
        public sunrise: number,
        public country: string,
        public timezone: number,
        public population: number,
    ) { }
}


export class Coord {
    constructor(
        public lat: number,
        public lon: number
    ) { }
}


export class Weather {
    constructor(
        public id: number,
        public icon: string,
        public main: string,
        public description: string,
    ) { }
}


export class Cloud {
    constructor(
        public all: number
    ) { }
}


export class Wind {
    constructor(
        public deg: number,
        public gust: number,
        public speed: number,
    ) { }
}


// export class Rain {
//     constructor(
//         public 3h: number
//     ) { }
// }


export class Sys {
    constructor(
        public pod: string
    ) { }
}


export class Main {
    constructor(
        public temp: number,
        public temp_kf: number,
        public humidity: number,
        public temp_min: number,
        public temp_max: number,
        public pressure: number,
        public sea_level: number,
        public grnd_level: number,
        public feels_like: number,
    ) { }
}


export class List {
    constructor(
        public sys: Sys,
        public dt: number,
        public wind: Wind,
        public main: Main,
        // public rain: Rain,
        public pop: number,
        public clouds: Cloud,
        public dt_txt: string,
        public visibility: number,
        public weather: Array<Weather>,
    ) { }
}