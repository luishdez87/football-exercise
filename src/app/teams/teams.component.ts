import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
import {Location} from '@angular/common';
import { RootService } from "../root.service";
import { Team } from "./teams.model";
import { TeamsService } from "./teams.service";

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Team[] | null = null;
  title!: string;
  previousUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private rootService: RootService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id') || '';
        this.teamsService.getCompetitionTeams(id).subscribe((res) => {
          this.rootService.updateTeamsList(res.list);          
          this.title = res.name;
        });
      });
      this.rootService.teams.subscribe(list => {
        this.teams = list;
      })
  }

  back() {
    this.location.back();
  }

  openTeam(team: Team) {
    this.router.navigate(['/team', team.id])
  }
}