import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaGamesComponent } from './trivia-games.component';

describe('TriviaGamesComponent', () => {
  let component: TriviaGamesComponent;
  let fixture: ComponentFixture<TriviaGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviaGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
