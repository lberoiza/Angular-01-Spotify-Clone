import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailsMusictableIndexComponent } from './playlist-details-musictable-index.component';

describe('PlaylistDetailsMusictableIndexComponent', () => {
  let component: PlaylistDetailsMusictableIndexComponent;
  let fixture: ComponentFixture<PlaylistDetailsMusictableIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetailsMusictableIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistDetailsMusictableIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
