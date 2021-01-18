import { Component, Input} from '@angular/core';
import { Question } from '../../../services/models/question-adapter.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent{
  @Input() set questionInfo(questionObject: Question) {
    this._questionInfo = questionObject
  }
  private _questionInfo: Question
  @Input() questionNumber: number;
  @Input() totalCorrect: number;

  constructor() {
  }

  ngOnInit(): void{
    
  }

  get questionInfo(): Question{
    return this._questionInfo
  }
}

