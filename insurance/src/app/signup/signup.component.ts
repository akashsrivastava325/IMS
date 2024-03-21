import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  passwordHidden: boolean = true;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  successMessage: string = '';
  errorMessage: string = ''; // Add this property

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator()]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const formData = { ...this.registerForm.value, role: 'user' };

      this.authService.signUp(formData).subscribe(
        (response) => {
          this.successMessage = response.message;
          this.errorMessage = ''; // Clear error message
          console.log('Registration successful', response);
        },
        (error) => {
          if (error.status === 409) {
            this.successMessage = ''; // Clear success message
            this.errorMessage =
              'User already exists. Please try a different username.'; // Set error message
            console.error('Registration failed - User already exists', error);
          } else {
            this.errorMessage = 'Registration failed. Please try again later.'; // Set error message
            console.error('Registration failed', error);
          }
        }
      );
    }
  }

  togglePasswordVisibility(): void {
    this.passwordHidden = !this.passwordHidden;
  }

  passwordValidator() {
    return (control: any) => {
      const password = control.value;
      const hasCapitalLetter = /[A-Z]/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const hasNumber = /\d/.test(password);
      const isValid = hasCapitalLetter && hasSymbol && hasNumber;
      this.passwordInvalid = !isValid;
      return isValid ? null : { invalidPassword: true };
    };
  }
}
