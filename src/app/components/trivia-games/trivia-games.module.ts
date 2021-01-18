import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriviaGamesRoutingModule } from './trivia-games-routing.module';
import { TriviaComponent } from './trivia/trivia.component'
import { QuestionComponent } from './question/question.component'
import { FeedbackComponent } from './feedback/feedback.component';
import { AnswerComponent } from './answer/answer.component';
import { TriviaService } from 'src/app/services/trivia.service';
import { MaterialModule } from '../../material.module';
import { TriviaGamesComponent } from './trivia-games.component';

@NgModule({
  declarations: [
    TriviaGamesComponent,
    TriviaComponent,
    QuestionComponent,
    FeedbackComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    TriviaGamesRoutingModule,
    MaterialModule
  ],
  providers: [TriviaService]
})
export class TriviaGamesModule { }
