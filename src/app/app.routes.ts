     import { NgModule } from '@angular/core';
     import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Company } from './company/company';
import { Contact } from './contact/contact';
import { Courses } from './courses/courses';

    

    export const routes: Routes = [
       { path: '', redirectTo: '/home', pathMatch: 'full' },
       { path: 'home', component: Home },
       { path: 'Company', component: Company },
       { path: 'contact', component: Contact},
       { path: 'courses', component: Courses},
       
     
     ];

     @NgModule({
       imports: [RouterModule.forRoot(routes)],
       exports: [RouterModule]
     })
     export class AppRoutingModule { }
     