import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  public isSubmitted: boolean = false;
  public isCorrect: boolean = false;
  public questionCount: number = 1;
  public correctAnswerCount: number = 0;
  constructor(private _httpService: HttpService) {
    
  }

  resetAnswer(){
    this.isSubmitted = false;
    this.isCorrect = false;
  }

  checkAnswer(picked: string, correct: string){
    this.isSubmitted = true
    console.log("picked answer", `'${picked}'`)
    console.log("correct answer", `'${correct}'`)
    if (picked === correct){
      this.isCorrect = true;
      this.correctAnswerCount += 1;
      console.log("check answer", this.isCorrect)
    } else {
      this.isCorrect = false
    }
  }

  getSubmitStatus(){
    return this.isSubmitted
  }

  getQuestiounCount(){
    return this.questionCount;
  }

  getCorrectAnswerCount(){
    return this.correctAnswerCount;
  }

  getAnswersStatus(){
    console.log(this.isCorrect)
    return this.isCorrect
  }

  getTriviaQuestion(){
    return this._httpService.fetchQuestion()
  }
  
}
