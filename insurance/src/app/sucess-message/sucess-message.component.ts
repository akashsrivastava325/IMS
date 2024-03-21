import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess-message',
  templateUrl: './sucess-message.component.html',
  styleUrl: './sucess-message.component.css',
})
export class SucessMessageComponent {
  constructor(private router: Router) {}

  goToMainMenu() {
    this.router.navigate(['/user-landing']);
  }
}
