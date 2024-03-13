import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { UserStoreService } from '../shared/user-store.service';

@Component({
  selector: 'app-testing-2',
  templateUrl: './testing-2.component.html',
  styleUrls: ['./testing-2.component.css'],
})
export class Testing2Component implements OnInit {
  myForm!: FormGroup;
  public role!: string;
  public userId!: number;

  public fullName: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService, // Inject UserDataAccess here
    private userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.fullName = localStorage.getItem('userName')!;
    this.role = localStorage.getItem('role')!;
    this.userId = Number(localStorage.getItem('userId')!);
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Here you can submit the form data to your backend or handle it as required
    }
  }

  logout() {
    this.auth.signOut();
  }
}
