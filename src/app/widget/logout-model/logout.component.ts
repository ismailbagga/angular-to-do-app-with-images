import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from 'src/app/services/app-user/app-user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit, OnDestroy {
  show = true;
  @Output('onClose') closeLogoutModel = new EventEmitter();

  constructor(private authService: AppUserService, private router: Router) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    console.log('logout modal is shown');

    // console.log(this.el.nativeElement);
    // this.authService.logout();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
