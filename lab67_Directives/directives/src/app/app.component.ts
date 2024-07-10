import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HighlightDirective,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  highlightColor = 'yellow';

  changeColor() {
    const colors = ['yellow', 'red', 'blue', 'green'];
    this.highlightColor = colors[Math.floor(Math.random() * colors.length)];
  }
  showElement = true;
  items = ['Item 1', 'Item 2', 'Item 3'];

  toggleElement() {
    this.showElement = !this.showElement;
  }
}