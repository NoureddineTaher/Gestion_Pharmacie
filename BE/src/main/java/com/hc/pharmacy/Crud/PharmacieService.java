package com.hc.pharmacy.Crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PharmacieService {

	@Autowired
	PharmacieRepository pharmacierepository;

	// ✅ GET ALL
	public List<Pharmacie> getAllPharmacies() {
		return pharmacierepository.findAll();
	}

	// ✅ CREATE
	public Pharmacie addPharmacie(Pharmacie p) {
		return pharmacierepository.save(p);
	}

	// ✅ GET BY ID (sécurisé)
	public Pharmacie getPharmacie(int id) {
		return pharmacierepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Pharmacie not found with id " + id));
	}

	// ✅ UPDATE
	public Pharmacie updatePharmacie(Pharmacie p) {

		if (!pharmacierepository.existsById(p.getId())) {
			throw new RuntimeException("Pharmacie not found with id " + p.getId());
		}

		return pharmacierepository.save(p);
	}

	// ✅ DELETE
	public void deletePharmacie(int id) {
		if (!pharmacierepository.existsById(id)) {
			throw new PharmacieAlreadyDeletedException(id);
		}
		pharmacierepository.deleteById(id);
	}

}
