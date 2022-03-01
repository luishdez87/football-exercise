import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'teams/:id', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)},
  { path: 'team/:id', loadChildren: () => import('./team/team.module').then(m => m.TeamModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
