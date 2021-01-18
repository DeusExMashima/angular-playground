import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaGamesComponent } from './trivia-games.component';

const routes: Routes = [
  {
  path: '',
  component: TriviaGamesComponent
  }
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriviaGamesRoutingModule { }
