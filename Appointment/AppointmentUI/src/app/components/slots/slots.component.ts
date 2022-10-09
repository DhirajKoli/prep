import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentDto } from 'src/app/model/appointmentDto.model';
import { Slot } from 'src/app/model/slot.model';
import { SlotSearch } from 'src/app/model/slotSearch.model';
import { SlotService } from 'src/app/service/slot.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css'],
})
export class SlotsComponent implements OnInit {
  constructor(private slotService: SlotService, private router:Router) {}
  slotSearch: SlotSearch;
  slots: Slot[];
  pname: string;
  appointment: AppointmentDto;

  ngOnInit(): void {
    this.slotService.slotSearchSubject.subscribe((data) => {
      this.slotSearch = data;
    });
    this.slotService.pname.subscribe((data) => {
      this.pname = data;
    });

    this.slotService.searchSlot(this.slotSearch).subscribe((data) => {
      this.slots = data;
    });
  }

  bookSlot(sId: number) {
    this.appointment = {
      pname: this.pname,
      slotId: sId,
    };
    this.slotService.bookAppointment(this.appointment).subscribe();
    this.router.navigateByUrl("/all-appointments");
  }


}
