import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { TriviaPageComponent } from './pages/trivia-page/trivia-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRountingModule } from './app-rounting.module';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { TriviaModule } from './components/trivia-games/trivia.module';
import { TriviaService } from './services/trivia.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TriviaPageComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    MaterialModule,
    TriviaModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
