import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({template: ''})
export abstract class ClickableHoldableComponent implements AfterViewInit {

  @ViewChild('touchButtonDiv')
  touchButtonDiv: ElementRef<HTMLDivElement> | undefined;

  protected considerHoldingAfterMillisecond: number = 500;
  protected intervalId: number = 0;
  protected isHoldingComponent: boolean = false;


  protected abstract executeByClick(): void;

  protected abstract executeWhilePressing(): void;

  ngAfterViewInit(): void {
    if (this.touchButtonDiv) {
      this.touchButtonDiv.nativeElement
        .addEventListener('touchstart', (event: TouchEvent) => this.componentTouched(event), {passive: false});
    }
  }

  private isTouchEnabled() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  }

  private isTouchDisable() {
    return !this.isTouchEnabled();
  }

  protected click(): void {
    this.intervalId = setInterval((): void => {
      this.isHoldingComponent = true;
      this.executeWhilePressing();
    }, this.considerHoldingAfterMillisecond);
  }

  protected releaseClick(): void {
    if (!this.isHoldingComponent) {
      this.executeByClick();
    }
    this.componentMouseLeave();
  }

  protected releaseHolding(): void {
    clearInterval(this.intervalId);
  }

  @HostListener('mousedown', ['$event'])
  protected componentClicked(event: MouseEvent): void {
    event.preventDefault();
    if (this.isTouchDisable()) {
      this.click();
    }
  }

  @HostListener('mouseup', ['$event'])
  protected componentClickReleased(event: MouseEvent): void {
    event.preventDefault();
    if (this.isTouchDisable()) {
      this.releaseClick();
    }
  }

  protected componentTouched(event: TouchEvent): void {
    event.preventDefault();
    if (this.isTouchEnabled()) {
      this.click();
    }
  }

  @HostListener('touchend', ['$event'])
  protected componentTouchReleased(event: TouchEvent): void {
    event.preventDefault();
    if (this.isTouchEnabled()) {
      this.releaseClick();
    }
  }

  @HostListener('mouseleave')
  protected componentMouseLeave(): void {
    this.releaseHolding();
    this.isHoldingComponent = false;
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

}
