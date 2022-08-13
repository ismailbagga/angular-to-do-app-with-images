import { Component, OnInit } from '@angular/core';
import { AppUserService } from './services/app-user/app-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tasks-manager';

  constructor(private authService: AppUserService) {}
  ngOnInit(): void {
    this.authService.authenticate();
  }
}
