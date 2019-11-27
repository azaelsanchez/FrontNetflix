import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch:"full"},
  {path:"movies",component:MovieListComponent},
  {path: "login", component: LoginComponent},
  {path:"register", component: RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }