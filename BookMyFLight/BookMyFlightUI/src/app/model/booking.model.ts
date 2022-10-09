import { Flight } from "./flight.model";

export class Booking{
    flight:Flight;
    adult:number;
    child:number;
    price?:number;
}