package com.bookmyflightbe.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bookmyflightbe.model.Flight;

public interface FlightRepository extends JpaRepository<Flight, Long>{

	@Query("select f from Flight f where f.source=?1 AND f.destination=?2 AND f.departureDate=?3")
	List<Flight> findByDetails(String source,String destination,LocalDate date);
}
