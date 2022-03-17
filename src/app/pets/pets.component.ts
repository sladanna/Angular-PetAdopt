import { Component, OnInit } from '@angular/core';
import { getPreEmitDiagnostics } from 'typescript';
import { PetList } from '../model/pet-list.model';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  petList: PetList = new PetList();
  queryParams = {
    filter: {
      sex: "",
      category: ""
    },
    sort: ""
  }

  constructor(private service: PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }


  getPets(): void {
    this.service.getPets(this.queryParams).subscribe((data: PetList) => {
      this.petList = data;
    })
  }

}
