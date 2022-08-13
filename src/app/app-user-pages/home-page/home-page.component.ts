import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../../services/app-user/app-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  showModel = false;

  constructor(private authService: AppUserService, private router: Router) {}

  ngOnInit(): void {}
  show() {
    this.showModel = true;
  }
  logout() {
    console.log('logout');

    this.showModel = false;
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
  close() {
    this.showModel = false;
  }
}
