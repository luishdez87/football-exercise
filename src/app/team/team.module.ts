import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { TeamComponent } from "./team.component";
import { TeamRoutingModule } from "./team.routing-module";
import { TeamService } from "./team.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamComponent
  ],
  exports: [
    TeamComponent
  ],
  providers: [
    TeamService
  ]
})
export class TeamModule {}
