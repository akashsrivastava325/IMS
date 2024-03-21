import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-nav-bar-2',
  templateUrl: './nav-bar-2.component.html',
  styleUrl: './nav-bar-2.component.css',
})
export class NavBar2Component {
  userName: string | undefined;
  a: any | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.a = localStorage.getItem('userName');
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  signOut(): void {
    this.authService.signOut();
  }
}
