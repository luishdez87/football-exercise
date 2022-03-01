import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { RootService } from "../root.service";
import { TeamsItemComponent } from "./item/item.component";
import { TeamsComponent } from "./teams.component";
import { TeamsRoutingModule } from "./teams.routing-module";
import { TeamsService } from "./teams.service";

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule
  ],
  providers: [
    TeamsService,
    RootService
  ],
  declarations: [
    TeamsComponent,
    TeamsItemComponent
  ],
  exports: [
    TeamsComponent,
    TeamsItemComponent
  ]
})
export class TeamsModule {}
