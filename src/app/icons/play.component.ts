import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-play',
  standalone: true,
  imports: [],
  template: `
    <svg [class]="class" viewBox="0 0 16 16" role="img" height="16" width="16" >
      <path
        d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
  `,
  styles: ``
})
export class PlayComponent {
  @Input() class: string = '';
}
