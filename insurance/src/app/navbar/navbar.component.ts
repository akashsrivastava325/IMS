import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';// Update path as per your project structure

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  signOut(): void {
    this.authService.signOut();
  }
}
