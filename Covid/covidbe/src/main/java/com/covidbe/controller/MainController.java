package com.covidbe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covidbe.model.Employee;
import com.covidbe.model.Infected;
import com.covidbe.repository.EmployeeRepository;
import com.covidbe.repository.InfectedRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8600")
public class MainController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private InfectedRepository infectedRepository;

	@PostMapping("/employee/insert")
	public Employee insertEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	@GetMapping("/employee/get/all")
	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}
	@GetMapping("/employee/{id}")
	public Employee getEmployeeById(@PathVariable("id") Long id) {
		Optional<Employee> optional = employeeRepository.findById(id);
		if(!optional.isPresent())
			throw new RuntimeException("Invalid ID");
		Employee e = optional.get();
		System.out.println(e);
		return e;
	}
	@PostMapping("/infected/insert/{id}")
	public Infected insertVictim(@PathVariable("id") Long id,@RequestBody Infected infected) {
		Optional<Employee> optional = employeeRepository.findById(id);
		if(!optional.isPresent())
			throw new RuntimeException("Invalid ID");
		Employee e = optional.get();		
		infected.setEmployee(e);
		return infectedRepository.save(infected);
	}
	@GetMapping("/infected/all")
	public List<Infected> getAllVictims() {
		return infectedRepository.findAll();
	}
	
	@GetMapping("/infected/{city}/{project}/{gender}")
	public List<Infected> getVictimsByFilter(@PathVariable("city") String city,@PathVariable("project") String project,@PathVariable("gender") String gender) {
		return infectedRepository.findByFilter(city,project,gender);
	}
	
	@GetMapping("/cities")
	public List<String> getCities(){
		return employeeRepository.findAllCity();
	}
	
	@GetMapping("/projects")
	public List<String> getProjects(){
		return employeeRepository.findAllProjects();
	}
}
