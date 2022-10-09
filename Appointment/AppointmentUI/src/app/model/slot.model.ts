import { Doctor } from "./doctor.model";

export class Slot{
	id?:number;
	date:string;
	time:string;
	session:string;
	status:string;
	doctor:Doctor;
}