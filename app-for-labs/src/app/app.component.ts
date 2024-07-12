import { Component,OnInit     } from '@angular/core';
import { RouterOutlet,RouterLink  } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { AnimationsComponent } from "./animations/animations.component";
import { LoginComponent } from "./login/login.component";
import { ProtectedComponent } from "./protected/protected.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsComponent, RouterLink, AnimationsComponent, LoginComponent, ProtectedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]

})
export class AppComponent  {
  data: Array<{ id: number, name: string }> = [];

  // constructor(private dataService: DataService) {}

  // ngOnInit() {
  //   this.data = this.dataService.getMockData();
  // }

}
