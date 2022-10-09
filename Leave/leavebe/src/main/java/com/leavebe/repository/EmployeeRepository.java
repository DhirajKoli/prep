package com.leavebe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leavebe.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
