package com.bookmyflightbe.dto;

public class BookingDto {
	private Long flightId;
	private int adult;
	private int child;
	public BookingDto(Long flightId, int adult, int child) {
		super();
		this.flightId = flightId;
		this.adult = adult;
		this.child = child;
	}
	public BookingDto() {
		super();
	}
	public Long getFlightId() {
		return flightId;
	}
	public void setFlightId(Long flightId) {
		this.flightId = flightId;
	}
	public int getAdult() {
		return adult;
	}
	public void setAdult(int adult) {
		this.adult = adult;
	}
	public int getChild() {
		return child;
	}
	public void setChild(int child) {
		this.child = child;
	}
	
	@Override
	public String toString() {
		return "BookingDto [flightId=" + flightId + ", adult=" + adult + ", child=" + child + "]";
	}

	
}
