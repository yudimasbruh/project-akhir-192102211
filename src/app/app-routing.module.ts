import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionTambahComponent } from './division/division-tambah/division-tambah.component';
import { DivisionEditComponent } from './division/division-edit/division-edit.component';
import { DivisionComponent } from './division/division.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  
  {path:"dashboard",component:DashboardComponent},

  {
    path: 'divisi',
    children: [
      {
        path: '',
        component: DivisionComponent,
      },
      {
        path: 'tambah',
        component: DivisionTambahComponent,
      },
      {
        path: ':id/edit',
        component: DivisionEditComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}