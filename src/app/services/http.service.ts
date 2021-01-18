import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Question, QuestionAdapter } from './models/question-adapter.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
Service for all HTTP requests
*/
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = ''
  
  constructor(private http: HttpClient, private adapter: QuestionAdapter) {}
  /*
  GET a question from openDB Trivia Database
  */

  fetchQuestion(): Observable<Question>{
    return this.http
      .get<ResponseObject>(this.url)
      .pipe(map((data: ResponseObject) => this.adapter.adapt(data)))
  }
}
