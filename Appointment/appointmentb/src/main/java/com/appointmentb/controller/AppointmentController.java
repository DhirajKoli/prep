package com.appointmentb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.appointmentb.dto.AppointmentDto;
import com.appointmentb.model.Appointment;
import com.appointmentb.model.Slot;
import com.appointmentb.repository.AppointmentRepository;
import com.appointmentb.repository.SlotRepository;

@RestController
@CrossOrigin(origins = "http://localhost:7690")
public class AppointmentController {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private SlotRepository slotRepository;

	@PostMapping("/slot/book")
	public Appointment postAppointment(@RequestBody AppointmentDto appointmentDto) {
		Appointment appointment = new Appointment();
		appointment.setPname(appointmentDto.getPname());
		
		Optional<Slot> optional = slotRepository.findById(appointmentDto.getSlotId());
		
		Slot slot = optional.get();
		
		if(slot.getStatus().equals("Free"))
		{
			slot.setStatus("Booked");
		}
		else if(slot.getStatus().equals("Booked"))
		{
			slot.setStatus("Over Booked");
		}
		
		Slot slot2 =slotRepository.save(slot);
		
		appointment.setSlot(slot2);
		
		return appointmentRepository.save(appointment);
	}
	
	@GetMapping("/appointment/all")
	public List<Appointment> getAllApppointment(){
		return appointmentRepository.findAll();
	}

}
