import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-player-control-repeat',
  standalone: true,
  imports: [],
  template: `
    <div [class]="{
    'repeat-playlist-container': true,
    'active': active
    }

">
      <svg [class]="class" role="img" viewBox="0 0 16 16" height="16" width="16" fill="currentColor">
        <path
          d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
      </svg>
      <div class="point"></div>
    </div>
  `,
  styles: `
    .repeat-playlist-container {
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .repeat-playlist-container.active .point{
      position: absolute;
      content: '';
      height: 4px;
      width: 4px;
      border-radius: 50%;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      background-color: currentColor;
      top: 20px;
    }
  `
})
export class IconPlayerControlRepeatComponent {
  @Input() class: string = '';
  @Input() active: boolean = false;
}
