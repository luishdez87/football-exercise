import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Squad } from "./team.model";
import { TeamService } from "./team.service";

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  title!: string;
  image!: string;
  dataSource!: Squad[];
  displayedColumns: string[] = ['name', 'position', 'nationality'];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id') || '';
        this.teamService.getTeam(id).subscribe(res => {
          this.title = res.name;
          this.image = res.crestUrl;
          this.dataSource = res.squad;
        })
      })
  }

  back() {
    this.location.back();
  }
}
