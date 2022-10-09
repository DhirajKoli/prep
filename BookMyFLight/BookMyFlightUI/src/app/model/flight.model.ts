export class Flight{
    id?:number;
    source: string;
    destination: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    hours?:number;
    min?:number;
    adultFare:number;
    childFare:number;
    seats: number;
}