import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment.model';
import { SlotService } from 'src/app/service/slot.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  constructor(private slotService:SlotService) { }
  appointments:Appointment[];
  ngOnInit(): void {
    this.slotService.getAllAppointments().subscribe(
      data=>{
        this.appointments=data;
      }
    )
  }

}
