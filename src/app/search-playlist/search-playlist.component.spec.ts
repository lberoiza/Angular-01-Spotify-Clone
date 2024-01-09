import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlaylistComponent } from './search-playlist.component';

describe('SearchPlaylistComponent', () => {
  let component: SearchPlaylistComponent;
  let fixture: ComponentFixture<SearchPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPlaylistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
