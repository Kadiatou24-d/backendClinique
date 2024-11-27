import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patientdtos } from '../api/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  getloginPatient(_email: string, _password: string) {
    throw new Error('Method not implemented.');
  }
   private api_host= `{environment.apiUrl}patient`

   private httpOption={
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
     

    })
   
   }

  constructor(private http:HttpClient) { }

  loginPatient(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login`, { email, password });
  }


  getPatient(){
    return this.http.get<Patientdtos[]>(environment.apiUrl+'patient',this.httpOption)
  }

  savePatient(patient: Patientdtos){
    return this.http.post<any>(environment.apiUrl+'patient',patient);
  }
}
