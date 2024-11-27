import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medecindtos } from '../api/medecin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedecinServiceService {

  getSpecialite() {
    throw new Error('Method not implemented.');
  }
  
   private api_host= `{environment.apiUrl}medecin`

   private httpOption={
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      

    })
   
   }

  constructor(private http:HttpClient) { }


  getMedecin(){
    return this.http.get<Medecindtos[]>(environment.apiUrl+"medecin",this.httpOption)
  }

  saveMedecin(medecin: Medecindtos){
    return this.http.post<any>(environment.apiUrl+'medecin',medecin);
  }
}




