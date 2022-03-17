import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adoption } from '../model/adoption.model';
import {map} from 'rxjs/operators';
import { AdoptionList } from '../model/adoption-list.model';

const baseUrl = "http://localhost:3000/api/adoptions";
@Injectable({
  providedIn: 'root'
})
export class AdoptionsService {

  constructor(private httpClient: HttpClient) { }

  postAdoption(adoption: Adoption): Observable<Adoption> {
    return this.httpClient.post(baseUrl, adoption).pipe(map((x:any) => {
      return new Adoption(x);
    }))
  }

  getAdoptions(): Observable<AdoptionList> {
    return this.httpClient.get(baseUrl).pipe(map((x:any) => {
      return new AdoptionList(x);
    }))
  }

  delete(adoption: Adoption) : Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${adoption._id}`);
  }
}
