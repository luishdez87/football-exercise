export interface TeamResponse {
  id: number;
  area: Area;
  activeCompetitions: ActiveCompetition[];
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: Squad[];
  lastUpdated: Date;
}

export interface Area {
  id: number;
  name: string;
}

export interface ActiveCompetition {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;
  lastUpdated: Date;
}


export interface Squad {
  id: number;
  name: string;
  position: string;
  dateOfBirth: Date;
  countryOfBirth: string;
  nationality: string;
  shirtNumber?: number;
  role: string;
}
