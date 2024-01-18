import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVolumeButtonComponent } from './player-volume-button.component';

describe('PlayerVolumeButtonComponent', () => {
  let component: PlayerVolumeButtonComponent;
  let fixture: ComponentFixture<PlayerVolumeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerVolumeButtonComponent]
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
