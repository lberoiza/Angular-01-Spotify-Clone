import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-play',
  standalone: true,
  imports: [],
  template: `
    <svg [class]="class" viewBox="0 0 24 24" fill="currentColor"
    ><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg
    >
  `,
  styles: ``
})
export class PlayComponent {
  @Input() class: string = '';
}
