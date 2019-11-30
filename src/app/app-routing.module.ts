import { NgModule, Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch:"full"},
  {path:"movies",component:MovieListComponent},
  {path: "login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path: "home", component:HomeComponent},
  {path: "logout", component:LogoutComponent},
  {path: "movie/:category", component:MovieCategoriesComponent},
  {path: "movie/title/", component:MoviedetailComponent},
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }