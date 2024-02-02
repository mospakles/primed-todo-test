import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async onLogin() {
    try {
      const { email, password } = this;
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/kanban']);
    } catch (error: any) {
      console.error('Error logging in:', error.message);
    }
  }
}
