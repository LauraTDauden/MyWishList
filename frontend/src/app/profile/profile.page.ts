import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: String = "";
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn().then((res) => {
      if (!res) {
        this.router.navigateByUrl('/login');
      }
    })
  }

  ionViewWillEnter() {
    this.authService.isLoggedIn().then((res) => {
      if (!res) {
        this.router.navigateByUrl('/login');
      }
    })
    this.user = AuthService.username;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("/home");
    });
  }

}
