import { Employee } from "./employee.model";

export class Leave{
	id?: number;
    employee?:Employee;
    start?:string;
    end?: string;
    leaveDays?: number;
    type?: string;
    reason?: string;
    comment?: string;
    status?: string;
}