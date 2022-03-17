import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adoption } from '../model/adoption.model';
import { Pet } from '../model/pet.model';
import { AdoptionsService } from '../services/adoptions.service';
import { PetsService } from '../services/pets.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  petId: number = 0;
  pet: Pet = new Pet ();

  adoption: Adoption = new Adoption();


  constructor(private route: ActivatedRoute, private service: PetsService, private toastService: ToastService, private adoptionService: AdoptionsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.petId = params["id"];
      this.getOne();
    })
  }

  getOne() : void {
    this.service.getOne(this.petId).subscribe((data: Pet) => {
      this.pet = data;
    })
  }

  submitRequest() : void {
    if(this.adoption.name == "" || this.adoption.contact == "" ) {
      this.toastService.show("Please fill in the form", {classname:"bg-danger text-light", delay:5000})
      return;
    }

    this.adoption.petId = this.petId;
    this.adoption.petName = this.pet.name;

    this.adoptionService.postAdoption(this.adoption).subscribe((date: Adoption) => {
      this.toastService.show("Request sent", {classname:"bg-success text-light", delay:5000})

      this.router.navigateByUrl("/adoptions");
    }, err => {
      this.toastService.show("Error", {classname:"bg-danger text-light", delay:5000})

    })
  }

}
