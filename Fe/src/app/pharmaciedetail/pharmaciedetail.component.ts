import { Component, OnInit } from '@angular/core';
import { PharmaciGardeServiceService } from '../service/data/pharmaci-garde-service.service';
import { PharmacieGuard } from '../pharmacie-garde/pharmacie-garde.component';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pharmaciedetail',
  templateUrl: './pharmaciedetail.component.html',
  styleUrls: ['./pharmaciedetail.component.css']
})
export class PharmaciedetailComponent implements OnInit {
  pharmacie: PharmacieGuard=new PharmacieGuard(0,new Date(),new Date(),"","","",12345678);
  id:number;
  constructor(private pharmacigardeservice: PharmaciGardeServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getpharacie()
  }



  getpharacie(){
    this.id = this.route.snapshot.params['id'];
    this.pharmacigardeservice.getpharmacie(this.id)
    .subscribe (
      data => {console.log(data); this.pharmacie=data},
      error => console.log(error)
    )
  }


}
