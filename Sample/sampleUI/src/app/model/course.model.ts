import { Department } from "./department.model";

export class Course{
	id?:number;
	name?:number;
	credits?:number;
	fee?:number;
	department?:Department;
	departmentName?:string;
	date?:string;
	time?:string;
}