import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: ()=> import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'trivia',
    loadChildren: ()=> import("./components/trivia-games/trivia.module").then(m => m.TriviaModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
