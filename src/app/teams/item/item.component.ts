import { Component, Input } from "@angular/core";
import { Team } from "../teams.model";

@Component({
  selector: 'teams-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class TeamsItemComponent {
  @Input()
  team!: Team;
}
