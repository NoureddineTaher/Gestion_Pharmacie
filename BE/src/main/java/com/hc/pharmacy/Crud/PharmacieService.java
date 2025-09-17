package com.hc.pharmacy.Crud;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class PharmacieService {
	@Autowired
	PharmacieRepository pharmacierepository;
	
	
	
	public List<Pharmacie> getAllPharmacies(){		
		List<Pharmacie> pharmacies = new ArrayList<Pharmacie>();
		pharmacierepository.findAll().forEach(pharmacies::add);
		return pharmacies;
	}
	
	public void addPharmacie(Pharmacie p) {
		pharmacierepository.save(p);
	}
	
	
	public Pharmacie getPharmacie(int id){
		return pharmacierepository.findById(id).get();
	}
	
	
	public void updatePharmacie(Pharmacie p) {
		if(pharmacierepository.existsById(p.getId())) {
			
			 pharmacierepository.save(p);
		}
		
	}
	
	public void deletePharmacie(int id) {
		pharmacierepository.deleteById(id);
		
	}
	
}
