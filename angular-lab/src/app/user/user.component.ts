import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = 'John Doe';
  imageUrl: string = 'https://via.placeholder.com/150';
  userRole: string = 'admin';

  changeRole(role: string) {
    this.userRole = role;
  }
}


