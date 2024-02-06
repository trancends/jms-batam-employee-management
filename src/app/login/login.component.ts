import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {}

  submit() {
    if (this.loginForm.valid) {
      // this.submitEM.emit(this.loginForm.value);
      if (
        this.loginForm.value.username == 'admin' &&
        this.loginForm.value.password == 'admin123'
      ) {
        this.postLogin(
          this.loginForm.value.username,
          this.loginForm.value.password,
        );
        this.router.navigateByUrl('/employee');
      } else {
        alert('Wrong Credentials');
      }
    }
  }

  // @Output() submitEM = new EventEmitter();
  postLogin(username: string | null, password: string | null) {
    console.log(`username: ${username}, password: ${password}`);
  }
}
