import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetList } from '../model/pet-list.model';
import {map} from 'rxjs/operators';
import { partitionArray } from '@angular/compiler/src/util';
import { Pet } from '../model/pet.model';

const baseUrl = "http://localhost:3000/api/pets";
@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private httpClient: HttpClient) { }

  getPets(params?: any) : Observable<PetList> {

    let queryParams = {};
    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("filter", params.filter && JSON.stringify(params.filter) || "")
        .set("sort", params.sort || "")
      }
    }

    return this.httpClient.get(baseUrl, queryParams).pipe(map((x:any) => {
      return new PetList(x);
    }))
  }

  getOne(petId: number) : Observable<Pet> {
    return this.httpClient.get(`${baseUrl}/${petId}`).pipe(map((x:any) => {
      return new Pet(x);
    }))
  }
}
