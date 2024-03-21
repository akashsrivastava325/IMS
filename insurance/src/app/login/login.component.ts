import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from '../shared/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordHidden: boolean = true;
  userRole!: any;
  message: string = ''; // Variable to hold login message
  showMessage: boolean = false; // Variable to control message visibility
  hideRegisterLink: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.activatedRoute.queryParams.subscribe((params) => {
      this.hideRegisterLink = params['hideRegisterLink'] === 'true';
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility(): void {
    this.passwordHidden = !this.passwordHidden;
  }

  forgotPassword(): void {
    // Implement forgot password functionality
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          this.message = 'Login successful'; // Set success message
          this.showMessage = true; // Show the message
          setTimeout(() => {
            this.showMessage = false; // Hide the message after 5 seconds
          }, 5000);
          this.loginForm.reset();
          this.authService.storeToken(res.token);
          const tokenPayload = this.authService.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this.userRole = localStorage.getItem('role');
          if (this.userRole === 'user') this.router.navigate(['/user-landing']);
          else this.router.navigate(['/admin/landing']);
        },
        error: (err) => {
          this.message = 'Incorrect username or password'; // Set error message
          this.showMessage = true; // Show the message
          setTimeout(() => {
            this.showMessage = false; // Hide the message after 5 seconds
          }, 5000);
          console.log(err);
        },
      });
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/signup']);
  }
}
