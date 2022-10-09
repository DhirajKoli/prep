package com.covidbe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.covidbe.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	@Query("select distinct e.city from Employee e")
	List<String> findAllCity();

	@Query("select distinct e.project from Employee e")
	List<String> findAllProjects();

}
