package com.appointmentb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appointmentb.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long>{

}
