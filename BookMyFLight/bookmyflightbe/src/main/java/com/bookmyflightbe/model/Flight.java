package com.bookmyflightbe.model;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Flight {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String source;
	private String destination;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate departureDate;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "H:mm")
	private LocalTime departureTime;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate arrivalDate;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "H:mm")
	private LocalTime arrivalTime;
	private Long hours;
	private Long mins;
	
	private Double adultFare;
	private Double childFare;
	
	private int seats;

	public Flight() {
		super();
	}

	

	public Flight(Long id, String source, String destination, LocalDate departureDate, LocalTime departureTime,
			LocalDate arrivalDate, LocalTime arrivalTime, Long hours, Long mins, Double adultFare, Double childFare,
			int seats) {
		super();
		this.id = id;
		this.source = source;
		this.destination = destination;
		this.departureDate = departureDate;
		this.departureTime = departureTime;
		this.arrivalDate = arrivalDate;
		this.arrivalTime = arrivalTime;
		this.hours = hours;
		this.mins = mins;
		this.adultFare = adultFare;
		this.childFare = childFare;
		this.seats = seats;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
	

	public LocalTime getDepartureTime() {
		return departureTime;
	}



	public void setDepartureTime(LocalTime departureTime) {
		this.departureTime = departureTime;
	}



	public LocalTime getArrivalTime() {
		return arrivalTime;
	}



	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}



	public LocalDate getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(LocalDate departureDate) {
		this.departureDate = departureDate;
	}

	public LocalDate getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDate arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public Long getHours() {
		return hours;
	}

	public void setHours(Long hours) {
		this.hours = hours;
	}

	public Long getMins() {
		return mins;
	}

	public void setMins(Long mins) {
		this.mins = mins;
	}

	public Double getAdultFare() {
		return adultFare;
	}

	public void setAdultFare(Double adultFare) {
		this.adultFare = adultFare;
	}

	public Double getChildFare() {
		return childFare;
	}

	public void setChildFare(Double childFare) {
		this.childFare = childFare;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	@Override
	public String toString() {
		return "Flight [id=" + id + ", source=" + source + ", destination=" + destination + ", departureDate="
				+ departureDate + ", arrivalDate=" + arrivalDate + ", hours=" + hours + ", mins=" + mins
				+ ", adultFare=" + adultFare + ", childFare=" + childFare + ", seats=" + seats + "]";
	}
	
	
	
}
