import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PharmacieGuard } from 'src/app/pharmacie-garde/pharmacie-garde.component';

@Injectable({
  providedIn: 'root'
})
export class PharmaciGardeServiceService {


  constructor(private http:HttpClient) { }


  post(p:PharmacieGuard ){
    return this.http.post(`http://localhost:8081/pharmacie`, p);
  }



  getAllpharmacies( ) {
    return this.http.get<PharmacieGuard[]>(`http://localhost:8081/pharmacies` );
  }


  deletepharmacies(id :number ) {
    return this.http.delete(`http://localhost:8081/pharmacies/${id}` );
  }

  getpharmacie(id :Number ) {
    return this.http.get<PharmacieGuard>(`http://localhost:8081/pharmacies/${id}`);
  }

  updatepharmacie(p:PharmacieGuard ) {
    return this.http.put<PharmacieGuard>(`http://localhost:8081/pharmacies`,p);
  }

}
