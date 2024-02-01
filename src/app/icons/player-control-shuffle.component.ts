import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-player-control-shuffle',
  standalone: true,
  imports: [],
  template: `
    <div [class]="{
    'shuffle-container': true,
    'active': active
    }">
    <svg [class]="class" role="img" viewBox="0 0 16 16" height="16" width="16" fill="currentColor">
      <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
      <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
    </svg>
    <div class="point"></div>
    </div>
  `,
  styles: `
    .shuffle-container {
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .shuffle-container.active .point{
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
export class IconPlayerControlShuffleComponent {
  @Input() class: string = '';
  @Input() active: boolean = false;
}
