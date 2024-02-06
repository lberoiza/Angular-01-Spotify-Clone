import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonNextComponent } from './player-button-next.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('PlayerButtonNextComponent', () => {
  let component: PlayerButtonNextComponent;
  let fixture: ComponentFixture<PlayerButtonNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonNextComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerButtonNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
