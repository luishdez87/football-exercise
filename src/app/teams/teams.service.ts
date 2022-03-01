import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Team, TeamsParsedResponse, TeamsResponse } from "./teams.model";

@Injectable()
export class TeamsService {
  constructor(
    private http: HttpClient
  ) {}

  getCompetitionTeams(id: string): Observable<TeamsParsedResponse> {
    return this.http.get<TeamsResponse>(environment.url + `/competitions/${id}/teams`)
    .pipe(
      map(response => {
        return {
          name: response.competition.name,
          list: response.teams
        }
      })
    )
  }
}
