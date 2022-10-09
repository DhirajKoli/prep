package com.appointmentb.dto;

public class AppointmentDto {
	private String pname;
	private Long slotId;
	
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public Long getSlotId() {
		return slotId;
	}
	public void setSlotId(Long slotId) {
		this.slotId = slotId;
	}
	@Override
	public String toString() {
		return "AppointmentDto [pname=" + pname + ", slotId=" + slotId
				+ "]";
	}
	
}
