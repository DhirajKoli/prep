package com.samplebe.model;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Sample1 {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id; 
	private String name;  //findByName(String name)
	private Integer credits; //findByCredits(int credits)
	private Double price;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate date;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "H:mm")
	private LocalTime time;
	
	@ManyToOne
	private Sample2 sample2;
	
}
