import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RootService } from "../root.service";
import { Competition } from "./home.model";
import { HomeService } from "./home.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('formCard', [
      state('centered', style({
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)'
      })),
      state('top', style({
        position: 'sticky',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1
      })),
      transition('centered => top', animate('10ms ease-in')),
      transition('top => centered', animate('10ms ease-in')),

    ])
  ]
})
export class HomeComponent implements OnInit {
  competitions: Competition[] | null = null;
  form: FormGroup;
  centered = true;

  constructor(
    private homeService: HomeService,
    private rootService: RootService,
    private router: Router
  ) {
    this.form = new FormGroup({
      season: new FormControl(0, [Validators.min(1900)])
    })
  }

  get animationState() {
    return this.centered ? 'centered' : 'top';
  }

  ngOnInit(): void {
      this.rootService.competitions.subscribe((list) => {
        this.competitions = list
        if (this.competitions) {
          this.centered = this.competitions.length === 0;
        }
      });
  }
  submit() {
    this.centered = !this.centered
    this.homeService.getCompetitions(this.form.value.season).subscribe((list: Competition[]) => {
      this.rootService.updateCompetitionsList(list);
    });
  }

  showCompetition(competition: Competition) {
    console.log(competition);
    this.router.navigate(['/teams', competition.id])
  }
}
