import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailsMusictableSongtitleComponent } from './playlist-details-musictable-songtitle.component';

describe('PlaylistDetailsMusictableSongtitleComponent', () => {
  let component: PlaylistDetailsMusictableSongtitleComponent;
  let fixture: ComponentFixture<PlaylistDetailsMusictableSongtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetailsMusictableSongtitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistDetailsMusictableSongtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
