import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailsMusictableComponent } from './playlist-details-musictable.component';

describe('PlaylistDetailsMusictableComponent', () => {
  let component: PlaylistDetailsMusictableComponent;
  let fixture: ComponentFixture<PlaylistDetailsMusictableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetailsMusictableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistDetailsMusictableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
