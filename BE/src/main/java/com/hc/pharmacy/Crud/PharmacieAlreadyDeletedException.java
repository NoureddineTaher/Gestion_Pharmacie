package com.hc.pharmacy.Crud;


public class PharmacieAlreadyDeletedException extends RuntimeException {

    private final String code;

    public PharmacieAlreadyDeletedException(int id) {
        super("Pharmacie de garde already deleted with id " + id);
        this.code = "pharmacie.NotFound";
    }

    public String getCode() {
        return code;
    }
}