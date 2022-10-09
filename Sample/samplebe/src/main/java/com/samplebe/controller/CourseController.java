package com.samplebe.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.samplebe.dto.CourseDto;
import com.samplebe.model.Course;
import com.samplebe.model.Department;
import com.samplebe.repository.CourseRepository;
import com.samplebe.repository.DepartmentRepository;

@EnableScheduling
@RestController
@CrossOrigin(origins = {"http://localhost:4260"})
public class CourseController {
	
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private DepartmentRepository departmentRepository;

	@Scheduled(cron = "0 0 12,0 * * *",zone = "IST")
    @GetMapping("/hello")
    public void greeting() {
        System.out.println("Hello!!!");
    }
	
	@PostMapping("/department/insert")
	public Department insertDepartment(@RequestBody Department department) {
		return departmentRepository.save(department);
	}
	
	@PostMapping("/course/insert")
	public Course insertCourse(@RequestBody Course course) {
		/* check if department name already exists*/
		Department department = departmentRepository.findByName(course.getDepartment().getName());
		
		if(department == null) {
			/* save department in DB */
			department = departmentRepository.save(course.getDepartment());
		}
		
		/* Attach department to course */
		course.setDepartment(department);
		
		/* save course */
		return courseRepository.save(course);
	}
	
	@PostMapping("/course/post")
	public Course postCourse(@RequestBody CourseDto courseDto) {
		/*Extract info from dto and save it in course & department object */
		Course course = new Course(); 
		course.setName(courseDto.getName());
		course.setCredits(courseDto.getCredits());
		course.setFee(courseDto.getFee());
		course.setDate(courseDto.getDate());
		course.setTime(courseDto.getTime());
		
//		LocalDateTime dt1 = LocalDateTime.of(flight.getDepartureDate(), flight.getDepartureTime()); 
//		LocalDateTime dt2 = LocalDateTime.of(flight.getArrivalDate(), flight.getArrivalTime()); 
//		Duration d = Duration.between(dt1, dt2);
//		
//		flight.setHours(d.toHours());
//		flight.setMins(d.toMinutes()%60);
		
		Department department = new Department(); 
		department.setName(courseDto.getDepartmentName());
	
		/* check if department name already exists*/
		Department departmentDB = departmentRepository.findByName(department.getName());
		
		if(departmentDB == null) {
			/* save department in DB */
			department = departmentRepository.save(department);	
		}
		else {
			department = departmentDB; 
		}	 
		/* Attach department to course */
		course.setDepartment(department);
		
		/* save course */
		return courseRepository.save(course);
	}
	
	@GetMapping("/course/{cid}")
	public Course getCourseById(@PathVariable("cid") Long id) {
		Optional<Course> optional= courseRepository.findById(id);
		
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Course Id");
		
		return optional.get();
	}
	
	@GetMapping("/course/all")
	public List<Course> getAllCourses(){
		return courseRepository.findAll();
	}
	
	@GetMapping("/department/all")
	public List<Department> getAllDepartment(){
		return departmentRepository.findAll();
	}
	
	@GetMapping("/course/maxdate")
	public LocalDate getMaxDate() {
		return courseRepository.getMaxDate();
	}
	
	/* 
	 * display all courseson the basis of department name.
	 */
	@GetMapping("/course/department/{dname}")
	public List<Course> getCourseByDepartmentName(@PathVariable("dname") String dname){
		List<Course> list = courseRepository.getCourseByDepartmentName(dname);
		return list; 
	}
	
	/* 
	 * Display department on the basis of course name
	 */
	@GetMapping("/department/course/{cname}")
	public Department getDepartmentByCourseName(@PathVariable("cname") String cname) {
		Department department = courseRepository.getDepartmentByCourseName(cname);
		return department;
	}
	
	/*
	 * Display department on the basis of course ID. 
	 */
	
	/*
	 * Display courses on the basis of department ID.
	 */
	
	
	//search operation
	@GetMapping("/course/details")
	public List<Course> getCourseByDetails(@RequestParam("date") String date,@RequestParam("name") String name){
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");  
		
		LocalDate temp = LocalDate.parse(date, formatter);
		
		return courseRepository.findByDetails(temp,name);
	}
}