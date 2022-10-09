import { Employee } from "./employee.model";

export class Infected{
	id?:number;
	employee?:Employee;
	affectedDate?:string;
	dosages?:number;
	sickLeaves?:number;
	funds?:number;
	status?:string;
}