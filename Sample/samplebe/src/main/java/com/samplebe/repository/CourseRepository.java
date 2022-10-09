package com.samplebe.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.samplebe.model.Course;
import com.samplebe.model.Department;


public interface CourseRepository extends JpaRepository<Course, Long>{

	@Query("select c from Course c where c.department.name=?1")
	List<Course> getCourseByDepartmentName(String dname);

	@Query("select c.department from Course c where c.name=?1")
	Department getDepartmentByCourseName(String cname);
	

	@Query("select c from Course c where c.date=?1 AND c.name=?2")
	List<Course> findByDetails(LocalDate date,String name);

	@Query("select MAX(c.date) from Course c")
	LocalDate getMaxDate();

}
