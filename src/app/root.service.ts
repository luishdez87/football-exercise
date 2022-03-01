import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Competition } from "./home/home.model";
import { Team } from "./teams/teams.model";

@Injectable()
export class RootService {
  private _competitions = new BehaviorSubject<Competition[] | null>(null);
  private _teams = new BehaviorSubject<Team[] | null>(null);
  competitions = this._competitions.asObservable();
  teams = this._teams.asObservable();

  updateCompetitionsList(list: Competition[]) {
    this._competitions.next(list);
  }

  updateTeamsList(list: Team[]) {
    this._teams.next(list);
  }
}
