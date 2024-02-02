import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  firstName: string = '';
  email: string = '';
  password: string = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async onSignUp() {
    try {
      const { firstName, email, password } = this;
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userCredential.user?.updateProfile({ displayName: firstName });

      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Error signing up:', error.message);
    }
  }
}
