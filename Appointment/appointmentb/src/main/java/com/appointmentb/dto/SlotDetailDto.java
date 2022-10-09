package com.appointmentb.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

public class SlotDetailDto {
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate date;
	private String session;
	private String status;
	
	private Long doctorId;

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}

	@Override
	public String toString() {
		return "SlotDetailDto [date=" + date + ", session=" + session + ", status=" + status + ", doctorId=" + doctorId
				+ "]";
	}
	
	
}
