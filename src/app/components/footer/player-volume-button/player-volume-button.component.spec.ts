import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVolumeButtonComponent } from './player-volume-button.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlayerVolumeButtonComponent', () => {
  let component: PlayerVolumeButtonComponent;
  let fixture: ComponentFixture<PlayerVolumeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerVolumeButtonComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerVolumeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
