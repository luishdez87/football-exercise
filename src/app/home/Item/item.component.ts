import { Component, Input } from "@angular/core";
import { Competition } from "../home.model";

@Component({
  selector: 'competition-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class CompetitionItemComponent {
  @Input() competition: Competition | undefined;

}