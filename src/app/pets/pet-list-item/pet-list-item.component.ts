import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet.model';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.css']
})
export class PetListItemComponent implements OnInit {

  @Input()
  pet: Pet = new Pet();
  constructor() { }

  ngOnInit(): void {
  }

}
