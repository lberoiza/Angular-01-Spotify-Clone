import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVolumeControlComponent } from './player-volume-control.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlayerVolumeControlComponent', () => {
  let component: PlayerVolumeControlComponent;
  let fixture: ComponentFixture<PlayerVolumeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerVolumeControlComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerVolumeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
