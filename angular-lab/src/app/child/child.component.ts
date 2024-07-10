import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  template: '<ng-content></ng-content>',
  styleUrls: ['./child.component.css']
})


export class ChildComponent {
  @Input() message: string;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Message from child");
  }
}
