import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './components/logout/logout.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import { PopularsComponent } from './components/populars/populars.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    RegisterComponent,
    LoginComponent,
    MovieCategoriesComponent,
    HomeComponent,
    LogoutComponent,
    MoviedetailComponent,
    ProfileComponent,
    PopularsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
