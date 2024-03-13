import { Router } from '@angular/router';
import { Component } from '@angular/core';

export class RouteHelper {
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToTest(): void {
    this.router.navigate(['/test-2']);
  }
}
