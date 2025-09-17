package com.hc.pharmacy.Crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ParmacieController {
	@Autowired
	PharmacieService pharmacieservice;
	
	//get ALL
	@GetMapping( "/pharmacies")
	public  List<Pharmacie> getAllPharmacies() {
		return pharmacieservice.getAllPharmacies();
	}
	
	//get Pharmacie
	@RequestMapping("/pharmacies/{id}")
	public Pharmacie getPharmacie(@PathVariable int id) {
		return pharmacieservice.getPharmacie(id);
	}
	
	//ADD 
	@RequestMapping(method = RequestMethod.POST, path="/pharmacie")
	public void addPharmacie(@RequestBody Pharmacie p) {
		pharmacieservice.addPharmacie(p);
	}
	
	//update 
	@RequestMapping(method = RequestMethod.PUT,value="/pharmacies")
	public void updatePharmacie(@RequestBody Pharmacie p) {
		pharmacieservice.updatePharmacie(p);	
	}
	
	//delete 
	@RequestMapping(method = RequestMethod.DELETE,value="/pharmacies/{id}")
	public void deletePharmacie(@PathVariable int id) {
		pharmacieservice.deletePharmacie(id);
	}

}
