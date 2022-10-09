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
import com.leavebe.model.Leave;
import com.leavebe.repository.EmployeeRepository;
import com.leavebe.repository.LeaveRepository;

@RestController
@CrossOrigin(origins = "http://localhost:7778")
public class LeaveController {
	@Autowired
	private LeaveRepository leaveRepository;
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@PostMapping("/leave/post/{id}")
	public Leave postLeave(@RequestBody Leave leave, @PathVariable("id") Long id) {
		Optional<Employee> optional = employeeRepository.findById(id);
		
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Employee");
		Employee employee = optional.get();
		
		if(employee.getLeaveRem()-leave.getLeaveDays()<0)
			throw new RuntimeException("Leave exceed than limit");
		
		
		employee.setLeaveRem(employee.getLeaveRem()-leave.getLeaveDays());
		Employee employee2 = employeeRepository.save(employee);
		 leave.setEmployee(employee2);
		 leave.setStatus("Pending");
		 return leaveRepository.save(leave);
	}
	
	@GetMapping("/leave/{id}")
	public Leave getLeaveByLeaveId(@PathVariable("id") Long id) {
		return leaveRepository.findById(id).get();
	}
	
	@GetMapping("/leave/approve/{lid}/{comment}")
	public Leave approveLeave(@PathVariable("lid") Long lid,@PathVariable("comment") String comment) {
		Optional<Leave> optional = leaveRepository.findById(lid);
		
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Leave");
		
		 Leave leave = optional.get();
		 leave.setStatus("Approved");
		 leave.setComment(comment);
		 return leaveRepository.save(leave);
	}
	
	@GetMapping("/leave/deny/{lid}/{comment}")
	public Leave denyLeave(@PathVariable("lid") Long lid,@PathVariable("comment") String comment) {
		Optional<Leave> optional = leaveRepository.findById(lid);
		
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Leave");
		
		 Leave leave = optional.get();
		 
		 if(leave.getStatus().equals("Denied"))
			 throw new RuntimeException("Leave Already denied");
		 
		 leave.setStatus("Denied");
		 leave.setComment(comment);
		 Employee employee = leave.getEmployee();
		 
		 employee.setLeaveRem(employee.getLeaveRem()+leave.getLeaveDays());
		 Employee employee2 = employeeRepository.save(employee);
		 
		 leave.setEmployee(employee2);
		 
		 
		 return leaveRepository.save(leave);
	}
	
	@GetMapping("/leave/manager/all")
	public List<Leave> getAllLeaveManager() {
		 return leaveRepository.findAllPending("Pending");
	}
	
	@GetMapping("/leave/manager/all/all")
	public List<Leave> getAllLeaveManagerAll() {
		 return leaveRepository.findAll();
	}
	
	@GetMapping("/leave/all/{id}")
	public List<Leave> getAllLeaveEmployee(@PathVariable("id") Long id) {
		 return leaveRepository.findAllById(id);
	}
}
