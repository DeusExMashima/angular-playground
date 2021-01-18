import { Injectable } from '@angular/core';

export class Question {
    
    constructor(
      public category: string,
      public type: string,
      public difficulty_stars: string[],
      public question_text: string,
      public all_answers: string[],
      public correct_answer: string,
      ){
    }
}

@Injectable({
    providedIn: 'root'
  })
  export class QuestionAdapter implements Adapter<Question> {

    constructor() {}

    adapt(response: ResponseObject): Question {
      const questionObject = response.results[0]
      const { difficulty, correct_answer, incorrect_answers, question } = questionObject
      const all_answers = incorrect_answers.concat(correct_answer)
      const question_text = question
      //get the difficulty stars
      let difficulty_stars = []
      let difficulty_num: 1|2|3 = difficulty === 'easy'? 1: difficulty === 'medium'? 2 : 3

      for (let i=0; i< difficulty_num; i++){
        difficulty_stars.push("star")
      }

      return new Question(
        questionObject.category,
        questionObject.type,
        difficulty_stars,
        question_text,
        all_answers,
        questionObject.correct_answer,
      )
    }
      
  }