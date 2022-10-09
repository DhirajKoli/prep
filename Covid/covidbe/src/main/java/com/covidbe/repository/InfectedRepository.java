package com.covidbe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.covidbe.model.Infected;

public interface InfectedRepository extends JpaRepository<Infected, Long>{

	@Query("select i from Infected i where i.employee.city=?1 AND i.employee.project=?2 AND i.employee.gender=?3")
	List<Infected> findByFilter(String city, String project, String gender);

}
