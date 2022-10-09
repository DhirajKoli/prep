package com.leavebe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.leavebe.model.Employee;
import com.leavebe.repository.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:7778")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@PostMapping("/employee/post")
	public Employee postEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employee/{id}")
	public Employee getEmployeeById(@PathVariable("id") Long id) {
		Optional<Employee> optional = employeeRepository.findById(id);
	
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Employee");
		
		return optional.get();
	}
	
	@GetMapping("/employee/all")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}
}
