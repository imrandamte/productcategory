import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { CategorycreateComponent } from './categorycreate/categorycreate.component';
import { CategoryreadComponent } from './categoryread/categoryread.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'categorycreate',component:CategorycreateComponent},
  {path:'categoryread',component:CategoryreadComponent},
  {path:'categorycreate/:id',component:CategorycreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
