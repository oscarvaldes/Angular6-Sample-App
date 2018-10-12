import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: 'home', loadChildren: '../app/home/home.module#HomeModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'challenges', loadChildren: '../app/challenges/challenges.module#ChallengesModule'},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [PageNotFoundComponent]
})
export class AppRoutingModule {
}

