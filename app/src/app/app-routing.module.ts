import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'', component:GridComponent},
  {path:'\login', component:LoginComponent},
  {path:'\grid', component:GridComponent},
  {path:'\details', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
