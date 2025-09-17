import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacieGardeComponent } from './pharmacie-garde/pharmacie-garde.component';
import { PharmacieGardeListComponent } from './pharmacie-garde-list/pharmacie-garde-list.component';
import { PharmaciedetailComponent } from './pharmaciedetail/pharmaciedetail.component';
import { PharmacieUpdateComponent } from './pharmacie-update/pharmacie-update.component';

const routes: Routes = [
    {path:"", component:PharmacieGardeListComponent},
    {path:"create/:id", component:PharmacieGardeComponent},
    {path:"detail/:id", component:PharmaciedetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
