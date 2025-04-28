import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InizioComponent } from './labtv-p/inizio/inizio.component';
import { HomepageComponent } from './labtv-p/homepage/homepage.component';
import { FilmComponent } from './labtv-p/film/film.component';
import { ListaPreferitiComponent } from './labtv-p/lista-preferiti/lista-preferiti.component';
import { RicercaComponent } from './labtv-p/ricerca/ricerca.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Register2Component } from './components/register2/register2.component';
import { SliderPrincipaleComponent } from './components/slider-principale/slider-principale.component';
import { NotFoundComponent } from './labtv-p/not-found/not-found.component';
import { CardsFilmComponent } from './components/cards-film/cards-film.component';
import { GeneriFilmComponent } from './components/generi-film/generi-film.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmRicercaComponent } from './components/film-ricerca/film-ricerca.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import {MatSelectModule} from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { VideoComponent } from './components/video/video.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    InizioComponent,
    HomepageComponent,
    FilmComponent,
    ListaPreferitiComponent,
    RicercaComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    Register2Component,
    SliderPrincipaleComponent,
    NotFoundComponent,
    CardsFilmComponent,
    GeneriFilmComponent,
    FooterComponent,
    FilmRicercaComponent,
    DettaglioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
