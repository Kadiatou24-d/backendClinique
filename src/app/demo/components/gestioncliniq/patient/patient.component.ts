import { Component, OnInit } from '@angular/core';
import { Patientdtos } from 'src/app/demo/api/patient';
import { PatientServiceService } from 'src/app/demo/service/patient-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit{
  productDialog: boolean = false;

  listePatient: Patientdtos[]=[] ;
  patient: Patientdtos= {} ; 

  submitted: boolean = false;


  patientDialog: boolean;
  patientdtos: boolean;
  patientService: any;
  selectedProducts:any;

  constructor( private patientServiceService: PatientServiceService ) {}
    ngOnInit(): void {
        this.findAllPatient
    }

 

  openNew() {
      this.patient = {};
      this.submitted = false;
      
  }

  deleteSelectedPatient() {
    // this.confirmationService.confirm({
    //   message: 'Êtes-vous sûr de vouloir supprimer les patients sélectionnés ?',
    //   header: 'Confirmer',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
        
    //     this.patient = this.patient.filter((val) => !this.selectedPatient.includes(val));
    //     this.selectedPatient = null;
  
        
    //     this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Les patients sélectionnés ont été supprimés.' });
    //   },
    //   });
  }

  editPatient(patient: Patientdtos) {
      this.patient= { ...patient };
      this.patientdtos = true;
  }

 
     
  

  hideDialog() {
      this.patientDialog = false;
      this.submitted = false;
  }

  savePatient() {
      this.submitted = true;

      if (this.patient.nom?.trim()) {
          if (this.patient.id) {
            //   this.patient[this.findIndexById(this.patient.id)] = this.patient;
              this.patientService.add({ severity: 'success', summary: 'Successful', detail: 'Patient Updated', life: 3000 });
    //       } else {
    //           this.patient.id = this.createId();
    //           this.patient.push(this.patient);
    //           this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Patient Created', life: 3000 });
    //       }

    //       this.patient = [...this.patient];
    //       this.patientDialog = false;
    //       this.patient = {};
    //   }
  }
 }
}


    findAllPatient(){
        console.log('isok');
        
        this.patientServiceService.getPatient().subscribe((data)=>{
          this.listePatient=data
          console.log(this.listePatient);
          
        })
       }
    }

