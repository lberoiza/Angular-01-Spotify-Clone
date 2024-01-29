import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPlaylistItemComponent } from './loading-playlist-item.component';

describe('LoadingPlaylistItemComponent', () => {
  let component: LoadingPlaylistItemComponent;
  let fixture: ComponentFixture<LoadingPlaylistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingPlaylistItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingPlaylistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
