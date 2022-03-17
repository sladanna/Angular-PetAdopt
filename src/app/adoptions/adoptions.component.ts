import { Component, OnInit } from '@angular/core';
import { AdoptionList } from '../model/adoption-list.model';
import { Adoption } from '../model/adoption.model';
import { AdoptionsService } from '../services/adoptions.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {

  adoptionList: AdoptionList = new AdoptionList();

  constructor(private service: AdoptionsService) { }

  ngOnInit(): void {
    this.getAdoptions();
  }

  getAdoptions(): void {
    this.service.getAdoptions().subscribe((data:AdoptionList) => {
      this.adoptionList = data;
    })
  }

  delete(adoption: Adoption) {
    this.service.delete(adoption).subscribe((data:any) => {
      this.getAdoptions();
    })
  }

}
