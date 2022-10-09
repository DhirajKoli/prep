package com.bookmyflightbe.controller;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyflightbe.dto.SearchDto;
import com.bookmyflightbe.model.Flight;
import com.bookmyflightbe.repository.FlightRepository;

@RestController
@CrossOrigin(origins = "http://localhost:6792/")
public class FlightController {

	@Autowired
	private FlightRepository flightRepository;

	@PostMapping("/flight/post")
	public Flight postFlight(@RequestBody Flight flight) {
		
		LocalDateTime dt1 = LocalDateTime.of(flight.getDepartureDate(), flight.getDepartureTime()); 
		LocalDateTime dt2 = LocalDateTime.of(flight.getArrivalDate(), flight.getArrivalTime()); 
		Duration d = Duration.between(dt1, dt2);
		
		flight.setHours(d.toHours());
		flight.setMins(d.toMinutes()%60);
		
		return flightRepository.save(flight);
		}
	
	@DeleteMapping("/flight/delete/{fid}")
	public void deleteFlight(@PathVariable("fid") Long fid) {
		flightRepository.deleteById(fid);
	}
	
	@GetMapping("/flight/all")
	public List<Flight> getAllFlights(){
		
		return flightRepository.findAll();
	}

	@GetMapping("/flight/{id}")
	public Flight getFlightById(@PathVariable("id")Long id) {
		Optional<Flight> optional= flightRepository.findById(id);
		
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Id");
		
		return optional.get();
	}
	
	@GetMapping("/flight/details")
	public List<Flight> getFlightsByDetails(@RequestParam("source") String source,@RequestParam("destination") String destination,@RequestParam("date") String date){
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");  
		
		LocalDate temp = LocalDate.parse(date, formatter);
		
		return flightRepository.findByDetails(source, destination, temp);
	}
}
