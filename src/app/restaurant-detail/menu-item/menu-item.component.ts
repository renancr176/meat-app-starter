import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();
 
  constructor() { }

  ngOnInit() { }

  emitAddEvent(): void
  {
    this.add.emit(this.menuItem);
  }
}
