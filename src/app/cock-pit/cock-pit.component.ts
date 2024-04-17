import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cock-pit',
  templateUrl: './cock-pit.component.html',
  styleUrls: ['./cock-pit.component.css']
})
export class CockPitComponent {
  newServerName = '';
  newServerContent = '';
  @Output() serverDetail = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintDetails = new EventEmitter<{ name: string, content: string }>();

  onAddServer() {
    this.serverDetail.emit({ name: this.newServerName, content: this.newServerContent });
  }
  onAddBlueprint() {
    this.blueprintDetails.emit({ name: this.newServerName, content: this.newServerContent });
  }
}
