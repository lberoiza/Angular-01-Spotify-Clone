import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrackControlComponent } from './player-track-control.component';

describe('PlayerTrackControlComponent', () => {
  let component: PlayerTrackControlComponent;
  let fixture: ComponentFixture<PlayerTrackControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerTrackControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerTrackControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
