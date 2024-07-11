import { Component,OnInit,     } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]

})
export class AppComponent implements OnInit {
  data: Array<{ id: number, name: string }> = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getMockData();
  }
}
