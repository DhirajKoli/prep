package com.bookmyflightbe.dto;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public class FlightDto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String source;
	private String destination;
	
	
	private String departureDate;
	private String departureTime;
	private String arrivalDate;
	private String arrivalTime;
	private int hours;
	private int mins;
	
	private Double adultFare;
	private Double childFare;
	
	private int seats;

	

	

	public FlightDto(Long id, String source, String destination, String departureDate, String departureTime,
			String arrivalDate, String arrivalTime, int hours, int mins, Double adultFare, Double childFare,
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
	
	

	public String getDepartureTime() {
		return departureTime;
	}



	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}



	public String getArrivalTime() {
		return arrivalTime;
	}



	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}



	public String getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}

	public String getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public int getHours() {
		return hours;
	}

	public void setHours(int hours) {
		this.hours = hours;
	}

	public int getMins() {
		return mins;
	}

	public void setMins(int mins) {
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
