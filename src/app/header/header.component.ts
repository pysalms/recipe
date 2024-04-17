import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() headerSelected = new EventEmitter<string>();
  onSelect(comp: string) {
    console.log('comp ', comp)
    this.headerSelected.emit(comp)
  }
}
