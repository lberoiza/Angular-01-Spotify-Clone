import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonPlayComponent } from './player-button-play.component';

describe('PlayerButtonPlayComponent', () => {
  let component: PlayerButtonPlayComponent;
  let fixture: ComponentFixture<PlayerButtonPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerButtonPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
