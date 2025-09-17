import { Component, OnInit } from '@angular/core';
import { PharmaciGardeServiceService } from '../service/data/pharmaci-garde-service.service';
import { PharmacieGuard } from '../pharmacie-garde/pharmacie-garde.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pharmacie-garde-list',
  templateUrl: './pharmacie-garde-list.component.html',
  styleUrls: ['./pharmacie-garde-list.component.css']
})
export class PharmacieGardeListComponent implements OnInit {
  pharmacie: PharmacieGuard[];

  constructor(private pharmacigardeservice: PharmaciGardeServiceService,private router:Router) { }

  ngOnInit() {
    this.getpharacies();
  }


  getpharacies(){
    this.pharmacigardeservice.getAllpharmacies()
    .subscribe (
      data => {console.log(data); this.pharmacie=data},
      error => console.log(error)
    )

  }


  rederige(id:number){
    this.router.navigate(['detail', id])
  }


  delete(id) {

    this.pharmacigardeservice.deletepharmacies(id).subscribe (
        response =>{ this.getpharacies(); console.log(id)}
    );
  }
  edit(id:number){
    this.router.navigate(['create', id])
  }


}
