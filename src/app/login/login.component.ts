import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username?: ElementRef;
  @ViewChild('password') password?: ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = queries.get('logout');

      if (logout) {
        this.authService.logout();
        alert('You are logged out. isLogged = ' + this.authService.isLogged)
      }
    })
  }
  onLogin() {
    const username = this.username?.nativeElement.value;
    const password = this.password?.nativeElement.value;
    const user = this.authService.login(username, password);

    if (!username || !password) {
      alert('Please enter username and password.');
      return;
    }

    if (!user) {
      alert('Sorry, Incorrect Credentials. Please try again.')
    } else {
      alert('Welcome: ' + user?.name + ' You are successfully logged in.');
      this.router.navigate(['\courses']);
    }
  }
}
