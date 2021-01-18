import { ChangeDetectionStrategy, Component, AfterViewInit, OnInit } from '@angular/core';
import { Question } from '../../services/models/question-adapter.model';
import { TriviaService } from '../../services/trivia.service';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css'],
  providers: [TriviaService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaComponent implements OnInit {
  currentQuestion: Question;
  answers: string[];
  correctAnswer: string;
  triviaIsSubmitted: boolean;
  triviaIsCorrect: boolean;
  triviaTotalQuestionAsked: number;
  triviaTotalCorrect: number;
  constructor(private triviaService: TriviaService) {
  }

  ngOnInit() {
    this.getTriviaQuestion()
  }

  ngAfterViewInit(){
  }

  getNextQuestion(){
    this.triviaService.resetAnswer()
    this.triviaTotalQuestionAsked = this.triviaService.questionCount
  }

  getTriviaQuestion(){
    this.triviaTotalQuestionAsked = this.triviaService.questionCount
    this.triviaTotalCorrect = this.triviaService.correctAnswerCount
    return this.triviaService.getTriviaQuestion()
    .subscribe(data => {
      this.currentQuestion = data;
      this.answers = data.all_answers;
      this.correctAnswer = data.correct_answer;
    })
  }
  checkAnswer(answer: string){
    this.triviaService.checkAnswer(answer, this.correctAnswer)
    this.triviaIsSubmitted = this.triviaService.getSubmitStatus()
    this.triviaIsCorrect = this.triviaService.getAnswersStatus()
    this.triviaTotalCorrect = this.triviaService.getCorrectAnswerCount()
    console.log(this.triviaIsSubmitted, this.triviaIsCorrect)
  }
}
