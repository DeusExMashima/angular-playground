import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TriviaService } from '../../../services/trivia.service'
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  providers: [TriviaService]
})
export class AnswerComponent implements OnInit {
  @Input() choices: string[];
  @Input() correctChoice: string;
  @Input() hasSubmitted: boolean;

  @Output() submitAnswer = new EventEmitter<any>()

  currentAnswer: string;

  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void{
    this.hasSubmitted = this.triviaService.isSubmitted;
  }

  onSelect(event){
    this.currentAnswer = event.target.value;
  }

  onSubmit(){
    this.submitAnswer.emit(this.currentAnswer)
  }
}
