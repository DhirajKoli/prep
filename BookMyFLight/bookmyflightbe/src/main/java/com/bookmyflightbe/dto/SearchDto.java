package com.bookmyflightbe.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

public class SearchDto {
	private String source;
	private String destination;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private LocalDate date;
	public SearchDto() {
		super();
	}
	public SearchDto(String source, String destination, LocalDate date) {
		super();
		this.source = source;
		this.destination = destination;
		this.date = date;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	} 
	
	
}
