package com.bookmyflightbe.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	private Flight flight;
	private int adult;
	private int child;
	private Double price;
	public Booking(Long id, Flight flight, int adult, int child, Double price) {
		super();
		this.id = id;
		this.flight = flight;
		this.adult = adult;
		this.child = child;
		this.price = price;
	}
	public Booking() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Flight getFlight() {
		return flight;
	}
	public void setFlight(Flight flight) {
		this.flight = flight;
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
	
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Booking [id=" + id + ", flight=" + flight + ", adult=" + adult + ", child=" + child + ", price=" + price + "]";
	}
	
	
}
