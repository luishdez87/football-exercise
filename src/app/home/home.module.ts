import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { RootService } from "../root.service";
import { AvatarComponent } from "./avatar/avatar.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing-module";
import { HomeService } from "./home.service";
import { CompetitionItemComponent } from "./Item/item.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    CompetitionItemComponent,
    AvatarComponent
  ],
  providers: [
    HomeService,
    RootService
  ],
  exports: [
    HomeComponent,
    CompetitionItemComponent,
    AvatarComponent
  ]
})
export class HomeModule {}
