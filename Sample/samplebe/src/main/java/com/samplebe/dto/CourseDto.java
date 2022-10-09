package com.samplebe.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class CourseDto {
	private String name;
	private Integer credits;
	private Double fee;
	private String departmentName;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate date;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "H:mm")
	private LocalTime time;

	
	public CourseDto(String name, Integer credits, Double fee, String departmentName, LocalDate date, LocalTime time) {
		super();
		this.name = name;
		this.credits = credits;
		this.fee = fee;
		this.departmentName = departmentName;
		this.date = date;
		this.time = time;
	}

	public CourseDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getCredits() {
		return credits;
	}

	public void setCredits(Integer credits) {
		this.credits = credits;
	}

	public Double getFee() {
		return fee;
	}

	public void setFee(Double fee) {
		this.fee = fee;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "CourseDto [name=" + name + ", credits=" + credits + ", fee=" + fee + ", departmentName="
				+ departmentName + "]";
	}

}
