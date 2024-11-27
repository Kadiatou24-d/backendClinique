import { NgModule } from "@angular/core";
import { PatientComponent } from "./patient.component";
import { PatientRoutingModule } from "./patient-routing.module";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { FileUploadModule } from "primeng/fileupload";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { RadioButtonModule } from "primeng/radiobutton";
import { TagModule } from "primeng/tag";
import { InputNumberModule } from "primeng/inputnumber";


@NgModule({
    declarations: [
        PatientComponent
    ],
    imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule,
         ConfirmDialogModule, InputTextModule, InputTextModule, CommonModule, FileUploadModule, DropdownModule, 
        TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, 
        InputNumberModule,
    PatientRoutingModule],

   
})
export class PatientModule {}