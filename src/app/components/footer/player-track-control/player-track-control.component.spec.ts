import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrackControlComponent } from './player-track-control.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PlayerTrackControlComponent', () => {
  let component: PlayerTrackControlComponent;
  let fixture: ComponentFixture<PlayerTrackControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerTrackControlComponent],
      providers: [provideMockStore()]
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

