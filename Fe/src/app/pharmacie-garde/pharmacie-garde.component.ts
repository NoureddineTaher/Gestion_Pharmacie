import { Component, OnInit } from '@angular/core';
import { PharmaciGardeServiceService } from '../service/data/pharmaci-garde-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pharmacie-garde',
  templateUrl: './pharmacie-garde.component.html',
  styleUrls: ['./pharmacie-garde.component.css']
})
export class PharmacieGardeComponent implements OnInit {

  pharmacie:PharmacieGuard=new PharmacieGuard(-1,new Date(), new Date(), "","","",0);


  constructor(
    private pharmacigardeservice: PharmaciGardeServiceService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.pharmacie.id= this.route.snapshot.params['id'];
    if(this.pharmacie.id!=-1)
    this.pharmacigardeservice.getpharmacie(this.pharmacie.id).subscribe(
      resp=> this.pharmacie=resp
    );
  }

  save(){
    if(this.pharmacie.id==-1){
      this.pharmacigardeservice.post(this.pharmacie).subscribe(
        resp => {console.log(resp); this.router.navigate(['']);},
        error => console.log(error)
        );
    }
    else {
      this.pharmacigardeservice.updatepharmacie(this.pharmacie).subscribe(
        resp=>{ console.log("updated");this.router.navigate(['']);},
        error=>{ console.log("updated")}
      );
     }
  }


}


export class PharmacieGuard{
  constructor(
 	public  id:Number,
	public  dateFrom:Date,
	public  dateTo:Date,
	public  lieu:String,
	public  pharmacieName:String,
	public  adress2:String,
	public  tel:Number
    )
  {
  }
}
