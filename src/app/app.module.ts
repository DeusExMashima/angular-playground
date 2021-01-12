import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { TriviaComponent } from './components/trivia-games/trivia/trivia.component';
import { QuestionComponent } from './components/trivia-games/question/question.component';
import { FeedbackComponent } from './components/trivia-games/feedback/feedback.component';
import { AnswerComponent } from './components/trivia-games/answer/answer.component';
import { TriviaPageComponent } from './pages/trivia-page/trivia-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRountingModule } from './app-rounting.module';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TriviaComponent,
    QuestionComponent,
    FeedbackComponent,
    AnswerComponent,
    TriviaPageComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
