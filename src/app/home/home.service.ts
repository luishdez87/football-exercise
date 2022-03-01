import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Competition, CompetitionsResponse } from "./home.model";

@Injectable()
export class HomeService {
  constructor(
    private http: HttpClient
  ) {}

  getCompetitions(season: number): Observable<Competition[]> {
    return this.http.get<CompetitionsResponse>(environment.url + '/competitions')
    .pipe(
      map(result => result.competitions.filter(
        competition => this.parseDate(competition.currentSeason?.endDate) >= season
      ))
    )
  }

  private parseDate(date: string): number {
    if (date) {
      const parsed = parseInt(date.substring(4, 0))
      return parsed
    }
    return 0;
  }
}
