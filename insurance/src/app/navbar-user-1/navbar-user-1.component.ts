import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar-user-1',
  templateUrl: './navbar-user-1.component.html',
  styleUrl: './navbar-user-1.component.css',
})
export class NavbarUser1Component implements OnInit {
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
