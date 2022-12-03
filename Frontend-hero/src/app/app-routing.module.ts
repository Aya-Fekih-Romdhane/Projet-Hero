import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path :'', redirectTo: '/ajout',pathMatch:'full'},
  {path:'ajout',component:AjoutComponent},
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},





  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
