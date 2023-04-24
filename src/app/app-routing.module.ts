import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
{path:'register',component:RegistrationComponent},
{path:'list',component:PersonsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
