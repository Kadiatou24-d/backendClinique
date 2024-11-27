import { Component, OnInit } from '@angular/core';
import { Medecindtos } from 'src/app/demo/api/medecin';
import { SpecialieDtos } from 'src/app/demo/api/specialite';
import { MedecinServiceService } from 'src/app/demo/service/medecin-service.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.scss'
})
export class MedecinComponent implements OnInit {
  listeMedecin: Medecindtos[]=[] ;
  medecin: Medecindtos= {} ; 
  nom: any
  prenom: any
  tel:any
  nationalite: any
  sexe: any
  specialite:SpecialieDtos = {}

  

  constructor(private medecinService : MedecinServiceService

  ){}

  ngOnInit(): void {

    this.findAllMedecin()
  }

findAllMedecin(){
  this.medecinService.getMedecin().subscribe((data)=>{
    this.listeMedecin= data
    console.log(this.listeMedecin);
    
  })

}
 saveMedecin(){
  

 }

//  openDialog() {
//   const dialogRef = this.dialog.open(AjouterMedecinComponent, {
//     width: '500px',
//     height:'400px',
  
//   });
//   dialogRef.afterClosed().subscribe(result => {
//     if (result) {
//       console.log('Medecin ajouté :', result);
    
    
//     }
 // });
 

//}
}






