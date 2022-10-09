import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { AppointmentDto } from '../model/appointmentDto.model';
import { Doctor } from '../model/doctor.model';
import { Slot } from '../model/slot.model';
import { SlotSearch } from '../model/slotSearch.model';

@Injectable({
  providedIn: 'root',
})
export class SlotService {
  constructor(private http: HttpClient) {}

  slotSearchSubject = new BehaviorSubject<SlotSearch>({});
  pname = new BehaviorSubject<string>("");

  getSpeciality(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:7689/speciality/all');
  }

  getBySpeciality(speciality: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(
      'http://localhost:7689/doctor/' + speciality
    );
  }

  searchSlot(slotSearch:SlotSearch): Observable<Slot[]>{
    return this.http.post<Slot[]>("http://localhost:7689/slots/detail",slotSearch);
  }

  bookAppointment(appointmentDto:AppointmentDto):Observable<Appointment>{
    return this.http.post<Appointment>("http://localhost:7689/slot/book",appointmentDto);
  }

  getAllAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>("http://localhost:7689/appointment/all");
  }
}
