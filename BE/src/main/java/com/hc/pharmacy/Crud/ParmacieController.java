package com.hc.pharmacy.Crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pharmacie") // 🔥 Mapping global propre
public class ParmacieController {

	@Autowired
	PharmacieService pharmacieservice;

	// ✅ GET ALL
	@GetMapping
	public ResponseEntity<List<Pharmacie>> getAllPharmacies() {
		return ResponseEntity.ok(pharmacieservice.getAllPharmacies());
	}

	// ✅ GET BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Pharmacie> getPharmacie(@PathVariable int id) {
		Pharmacie p = pharmacieservice.getPharmacie(id);
		return ResponseEntity.ok(p);
	}

	// ✅ CREATE
	@PostMapping
	public ResponseEntity<Pharmacie> addPharmacie(@RequestBody Pharmacie p) {
		Pharmacie saved = pharmacieservice.addPharmacie(p);
		return ResponseEntity.status(HttpStatus.CREATED).body(saved);
	}

	// ✅ UPDATE
	@PutMapping("/{id}")
	public ResponseEntity<Pharmacie> updatePharmacie(@PathVariable int id, @RequestBody Pharmacie p) {
		p.setId(id);
		Pharmacie updated = pharmacieservice.updatePharmacie(p);
		return ResponseEntity.ok(updated);
	}

	// ✅ DELETE
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePharmacie(@PathVariable int id) {
		pharmacieservice.deletePharmacie(id);
		return ResponseEntity.noContent().build();
	}
}
