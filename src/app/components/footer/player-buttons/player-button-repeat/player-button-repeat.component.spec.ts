import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonRepeatComponent } from './player-button-repeat.component';

describe('PlayerButtonRepeatComponent', () => {
  let component: PlayerButtonRepeatComponent;
  let fixture: ComponentFixture<PlayerButtonRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonRepeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerButtonRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
