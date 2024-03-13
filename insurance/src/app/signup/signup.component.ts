import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      this.authService.signUp(this.registerForm.value).subscribe(
        (response) => {
          alert(response.message);
          console.log('Registration successful', response);
          // Redirect to login page or display success message
        },
        (error) => {
          alert(error.message);
          console.error('Registration failed', error);
          // Display error message to the user
        }
      );
    }
  }
}
