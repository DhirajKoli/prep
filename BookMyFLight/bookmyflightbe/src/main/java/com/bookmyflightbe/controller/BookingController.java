package com.bookmyflightbe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyflightbe.dto.BookingDto;
import com.bookmyflightbe.model.Booking;
import com.bookmyflightbe.model.Flight;
import com.bookmyflightbe.repository.BookingRepository;
import com.bookmyflightbe.repository.FlightRepository;

@RestController
@CrossOrigin(origins = "http://localhost:6792/")
public class BookingController {

	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private FlightRepository flightRepository;

	@PostMapping("/book")
	public Booking bookFlight(@RequestBody BookingDto bookingDto) {
		Optional<Flight> optional = flightRepository.findById(bookingDto.getFlightId());

		if (!optional.isPresent())
			throw new RuntimeException("Flight Id Invalid");

		Booking booking = new Booking();

		booking.setFlight(optional.get());
		booking.setAdult(bookingDto.getAdult());
		booking.setChild(bookingDto.getChild());

		
		booking.setPrice(bookingDto.getAdult() * booking.getFlight().getAdultFare()
					+ bookingDto.getChild() * booking.getFlight().getChildFare());

		return bookingRepository.save(booking);
	}
	
	@GetMapping("/bookings")
	public List<Booking> getAllBookings(){
		return bookingRepository.findAll();
	}
}
