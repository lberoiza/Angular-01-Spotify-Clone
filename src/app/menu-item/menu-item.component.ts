import {Component, Input} from '@angular/core';


@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() label: string = '';
  @Input() href: string = '';
}
