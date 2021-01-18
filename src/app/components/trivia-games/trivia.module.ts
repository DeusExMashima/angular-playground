import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaComponent } from './trivia.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TriviaService } from '../../services/trivia.service';

@NgModule({
  declarations: [
    TriviaComponent,
    QuestionComponent,
    AnswerComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TriviaService],
  exports: [
    TriviaComponent,
    QuestionComponent,
    AnswerComponent,
    FeedbackComponent
  ]
})
export class TriviaModule { }
