import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { AddChefFormComponent } from './add-chef-form/add-chef-form.component';

const routes: Routes = [
  { path: '', component: ProfileListComponent },
  { path: 'add-chef', component: AddChefFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
