import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { HomeComponent } from './core/home/home.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"pets", component: PetsComponent},
  {path:"adoptions", component: AdoptionsComponent},
  {path:"pets/:id", component:PetDetailsComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
