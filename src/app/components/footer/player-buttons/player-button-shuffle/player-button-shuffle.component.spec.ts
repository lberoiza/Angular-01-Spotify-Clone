import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonShuffleComponent } from './player-button-shuffle.component';

describe('PlayerButtonShuffleComponent', () => {
  let component: PlayerButtonShuffleComponent;
  let fixture: ComponentFixture<PlayerButtonShuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonShuffleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerButtonShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});