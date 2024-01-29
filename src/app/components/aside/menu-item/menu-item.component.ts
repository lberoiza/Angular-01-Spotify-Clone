import {Component, Input} from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() label: string = '';
  @Input() href: string = '';
}
