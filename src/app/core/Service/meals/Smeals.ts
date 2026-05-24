import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imeal } from '../../interfaces/meals/Imeal';

@Injectable({
  providedIn: 'root',
})
export class Smeals {
  
  constructor(private http:HttpClient){}

  getfood():Observable<Imeal[]>{

    return this.http.get<Imeal[]>('http://localhost:3000/foods')

  }


}
