import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TeamResponse } from "./team.model";

@Injectable()
export class TeamService {
  constructor(
    private http: HttpClient
  ) {}

  getTeam(id: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(environment.url + `/teams/${id}`);
  }
}
