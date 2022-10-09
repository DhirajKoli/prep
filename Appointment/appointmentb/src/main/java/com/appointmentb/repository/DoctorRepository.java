package com.appointmentb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.appointmentb.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long>{

	@Query("select distinct d.speciality from Doctor d")
	List<String> findAllSpecial();

	@Query("select d from Doctor d where d.speciality=?1")
	List<Doctor> findBySpecial(String special);

}
