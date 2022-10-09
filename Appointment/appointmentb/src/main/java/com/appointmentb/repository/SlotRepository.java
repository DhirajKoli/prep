package com.appointmentb.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.appointmentb.model.Slot;

public interface SlotRepository extends JpaRepository<Slot, Long> {

	@Query("select s from Slot s where s.date=?1 AND s.session=?2 AND s.status=?3 AND s.doctor.id=?4")
	List<Slot> findByDetail(LocalDate date, String session, String status, Long doctorId);

}
