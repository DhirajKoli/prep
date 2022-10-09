package com.leavebe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.leavebe.model.Leave;

public interface LeaveRepository extends JpaRepository<Leave, Long>{

	@Query("select l from Leave l where l.employee.id=?1")
	List<Leave> findAllById(Long id);

	@Query("select l from Leave l where l.status=?1")
	List<Leave> findAllPending(String string);

}
