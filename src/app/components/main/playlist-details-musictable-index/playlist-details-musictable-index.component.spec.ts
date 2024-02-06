import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailsMusictableIndexComponent } from './playlist-details-musictable-index.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlaylistDetailsMusictableIndexComponent', () => {
  let component: PlaylistDetailsMusictableIndexComponent;
  let fixture: ComponentFixture<PlaylistDetailsMusictableIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetailsMusictableIndexComponent],
      providers: [provideMockStore()]
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
