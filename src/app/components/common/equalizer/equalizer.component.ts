import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'equalizer',
  standalone: true,
  imports: [],
  templateUrl: './equalizer.component.html',
  styleUrl: './equalizer.component.css'
})
export class EqualizerComponent implements OnInit, OnDestroy {

  private intervalId!: number;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const equalizer = this.elementRef.nativeElement.querySelector('.equalizer');
    this.equalizerAnimation(equalizer, 180);
  }

  private equalizerAnimation(equalizer: HTMLElement, speed: number): void {
    this.intervalId = setInterval(() => {
      const spans = equalizer.querySelectorAll('span');
      spans[0].style.height = this.randomBetween(1, 20) + 'px';
      spans[1].style.height = this.randomBetween(5, 15) + 'px';
      spans[2].style.height = this.randomBetween(3, 30) + 'px';
      spans[3].style.height = this.randomBetween(4, 35) + 'px';
      spans[4].style.height = this.randomBetween(2, 25) + 'px';
    }, speed);
  }

  private randomBetween(min: number, max: number): number {
    if (min < 0) {
      return min + Math.random() * (Math.abs(min) + max);
    } else {
      return min + Math.random() * max;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
