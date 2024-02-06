import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonPauseComponent } from './player-button-pause.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlayerButtonPauseComponent', () => {
  let component: PlayerButtonPauseComponent;
  let fixture: ComponentFixture<PlayerButtonPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonPauseComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerButtonPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
