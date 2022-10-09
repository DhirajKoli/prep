package com.bookmyflightbe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmyflightbe.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long>{

}
