import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CocktailService {

private  service:  HttpClient;

  constructor(param_service:  HttpClient) {
  this.service  =  param_service;
}




private cocktails:Cocktail[] = []

public getCocktails(): Observable<Cocktail[]> {
  const  obs1:Observable<any> = this.service.get("assets/cocktail.json");
  const  treatment  = ( param_data:any) => {
      return  param_data.cocktails  as  Cocktail[];
  };

  return  obs1.pipe( map( treatment) );
}

public addcocktail(cocktail:Cocktail){
  this.cocktails.push(cocktail)
}





}

