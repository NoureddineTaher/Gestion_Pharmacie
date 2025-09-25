package com.hc.pharmacy.Crud;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Pharmacie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	//@DateTimeFormat(pattern = "dd/mm/yyyy")
	public String dateFrom;
	//@DateTimeFormat(pattern = "dd/mm/yyyy")
	public String dateTo;
	public String lieu;
	public String pharmacieName;
	public String adress2;
	public String  tel;

	
	public Pharmacie() {
		
		
	}


	public Pharmacie(int id, String dateFrom, String dateTo, String lieu, String pharmacieName, String adress2,
					 String tel) {
		super();
		this.id = id;
		this.dateFrom = dateFrom;
		this.dateTo = dateTo;
		this.lieu = lieu;
		this.pharmacieName = pharmacieName;
		this.adress2 = adress2;
		this.tel = tel;
	}

	

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDateFrom() {
		return dateFrom;
	}


	public void setDateFrom(String dateFrom) {
		this.dateFrom = dateFrom;
	}


	public String getDateTo() {
		return dateTo;
	}


	public void setDateTo(String dateTo) {
		this.dateTo = dateTo;
	}


	public String getLieu() {
		return lieu;
	}


	public void setLieu(String lieu) {
		this.lieu = lieu;
	}


	public String getPharmacieName() {
		return pharmacieName;
	}


	public void setPharmacieName(String pharmacieName) {
		this.pharmacieName = pharmacieName;
	}


	public String getAdress2() {
		return adress2;
	}


	public void setAdress2(String adress2) {
		this.adress2 = adress2;
	}


	public String  getTel() {
		return tel;
	}


	public void setTel(String  tel) {
		this.tel = tel;
	}


	@Override
	public String toString() {
		return "Pharmacie [id=" + id + ", dateFrom=" + dateFrom + ", dateTo=" + dateTo + ", lieu=" + lieu
				+ ", pharmacieName=" + pharmacieName + ", adress2=" + adress2 + ", tel=" + tel + "]";
	}
	
	
	
}
