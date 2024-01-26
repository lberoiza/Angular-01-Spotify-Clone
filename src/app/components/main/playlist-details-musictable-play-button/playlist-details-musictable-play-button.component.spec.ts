import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailsMusictablePlayButtonComponent } from './playlist-details-musictable-play-button.component';

describe('PlaylistDetailsMusictablePlayButtonComponent', () => {
  let component: PlaylistDetailsMusictablePlayButtonComponent;
  let fixture: ComponentFixture<PlaylistDetailsMusictablePlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetailsMusictablePlayButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistDetailsMusictablePlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
