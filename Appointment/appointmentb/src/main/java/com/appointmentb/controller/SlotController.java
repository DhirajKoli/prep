package com.appointmentb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.appointmentb.dto.SlotDetailDto;
import com.appointmentb.dto.SlotDto;
import com.appointmentb.model.Doctor;
import com.appointmentb.model.Slot;
import com.appointmentb.repository.DoctorRepository;
import com.appointmentb.repository.SlotRepository;

@RestController
@CrossOrigin(origins = "http://localhost:7690")
public class SlotController {

	@Autowired
	private SlotRepository slotRepository;

	@Autowired
	private DoctorRepository doctorRepository;
	
	
	@PostMapping("/doctor/post")
	public Doctor postDoctor(@RequestBody Doctor doctor) {
		return doctorRepository.save(doctor);
	}
	
	@GetMapping("/doctor/all")
	public List<Doctor> getAllDoctors(){
		return doctorRepository.findAll();
	}
	
	@GetMapping("/speciality/all")
	public List<String> getAllSpeciality(){
		return doctorRepository.findAllSpecial();
	}
	
	@GetMapping("/doctor/{special}")
	public List<Doctor> getDoctorBySpecial(@PathVariable("special") String special){
		return doctorRepository.findBySpecial(special);
	}
	
	@PostMapping("/slot/post")
	public Slot postSlot(@RequestBody SlotDto slotDto) {
		Slot slot = new Slot();
		
		slot.setDate(slotDto.getDate());
		slot.setTime(slotDto.getTime());
		slot.setSession(slotDto.getSession());
		slot.setStatus(slotDto.getStatus());
		
		Optional<Doctor> optional = doctorRepository.findById(slotDto.getDoctorId());
		
		slot.setDoctor(optional.get());
		
		return slotRepository.save(slot);
	}
	
	@PostMapping("/slots/detail")
	public List<Slot> getSlotsByDateAndDoctor(@RequestBody SlotDetailDto detailDto){
		return slotRepository.findByDetail(detailDto.getDate(),detailDto.getSession(),detailDto.getStatus(),detailDto.getDoctorId());
	}
	
	@GetMapping("/slot/all")
	public List<Slot> getAllSlots(){
		return slotRepository.findAll();
	}
}
