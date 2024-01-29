import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistButtonPlayComponent } from './playlist-button-play.component';

describe('PlaylistButtonPlayComponent', () => {
  let component: PlaylistButtonPlayComponent;
  let fixture: ComponentFixture<PlaylistButtonPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistButtonPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistButtonPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
