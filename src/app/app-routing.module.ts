import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InizioComponent } from './labtv-p/inizio/inizio.component';
import { HomepageComponent } from './labtv-p/homepage/homepage.component';
import { FilmComponent } from './labtv-p/film/film.component';
import { RicercaComponent } from './labtv-p/ricerca/ricerca.component';
import { ListaPreferitiComponent } from './labtv-p/lista-preferiti/lista-preferiti.component';
import { startGuard } from './guards/start.guard';
import { userGuard } from './guards/user.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Register2Component } from './components/register2/register2.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { CardsFilmComponent } from './components/cards-film/cards-film.component';

const routes: Routes = [
  {path: 'labtv', component: InizioComponent, canActivate: [startGuard]},
  {path: 'homepage', component: HomepageComponent, canActivate: [userGuard], children: [
    {path: '', component: CardsFilmComponent},
    {path: ':id', component: DettaglioComponent},]},
  {path: 'film', component: FilmComponent, canActivate: [userGuard]},
  {path: 'preferiti', component: ListaPreferitiComponent, canActivate: [userGuard]},
  {path: 'ricerca', component: RicercaComponent, canActivate: [userGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register1', component: RegisterComponent},
  {path: 'register', component: Register2Component},

  {path: '', redirectTo: 'labtv', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
