import { Component, HostListener } from "@angular/core";

@Component({ template: '' })
export abstract class ClickableHoldableComponent {

  protected considerHoldingAfterMillisecond: number = 500;
  protected intervalId: number = 0;
  protected isComponentPressed: boolean = false;


  protected abstract executeByClick(): void;
  protected abstract executeWhilePressing(): void;


  @HostListener('mousedown')
  protected pressButton = () => {
    this.intervalId = setInterval(() => {
      this.isComponentPressed = true;
      this.executeWhilePressing();
    }, this.considerHoldingAfterMillisecond);
  }

  @HostListener('mouseup')
  protected releaseButton = () => {
    if (!this.isComponentPressed) {
      this.executeByClick();
    }
    this.leaveButton();
  }

  @HostListener('mouseleave', ['$event'])
  protected leaveButton = () => {
    clearInterval(this.intervalId);
    this.isComponentPressed = false;
  }

}
