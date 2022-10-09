import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { Slot } from 'src/app/model/slot.model';
import { SlotSearch } from 'src/app/model/slotSearch.model';
import { SlotService } from 'src/app/service/slot.service';

@Component({
  selector: 'app-search-slots',
  templateUrl: './search-slots.component.html',
  styleUrls: ['./search-slots.component.css'],
})
export class SearchSlotsComponent implements OnInit {
  constructor(private slotService: SlotService, private router: Router) {}
  specialities: string[];
  doctors: Doctor[];
  dateV = new Date();
  slotSearch: SlotSearch;
  slots: Slot[];

  ngOnInit(): void {
    this.slotService.getSpeciality().subscribe((data) => {
      this.specialities = data;
    });
  }

  onSlotDetailSubmit(slotDetailForm: NgForm) {
    console.log(slotDetailForm.value.date);
    console.log(slotDetailForm.value.session);
    console.log(slotDetailForm.value.speciality);
    console.log(slotDetailForm.value.doctorId);
    this.slotSearch = {
      date: slotDetailForm.value.date,
      session: slotDetailForm.value.session,
      status: slotDetailForm.value.status,
      doctorId: slotDetailForm.value.doctorId,
    };
    this.slotService.pname.next(slotDetailForm.value.pname);
    this.slotService.slotSearchSubject.next(this.slotSearch);
    this.router.navigateByUrl('/slots');
  }

  specialitySelect(slotDetailForm: NgForm) {
    this.slotService
      .getBySpeciality(slotDetailForm.value.speciality)
      .subscribe((data) => {
        this.doctors = data;
      });
  }
}
