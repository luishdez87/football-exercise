export interface CompetitionsResponse {
  count: number;
  filters: Filters;
  competitions: Competition[];
}

export interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  emblemUrl: string;
  plan: string;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
}

export interface Filters {
}

export interface Area {
    id: number;
    name: string;
    countryCode: string;
    ensignUrl: string;
}

export interface Winner {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
}

export interface CurrentSeason {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday?: number;
    winner: Winner;
}