import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [DataService]
})
export class AppComponent implements OnInit {
  data: Array<{ id: number, name: string }> = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getMockData();
  }
}
