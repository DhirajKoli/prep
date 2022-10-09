package com.samplebe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samplebe.model.Department;


public interface DepartmentRepository extends JpaRepository<Department, Long>{

	Department findByName(String name);

 
}
