import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user-component', component: UserComponent },
  { path: 'home-component', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
