import { NgModule } from "@angular/core";
import { MedecinRoutingModule } from "./medecin-routing.module";
import { MedecinComponent } from "./medecin.component";


@NgModule({
    declarations: [
        MedecinComponent
    ],
    imports: [
        MedecinRoutingModule,
        
    ],
   
})
export class MedecinModule {}