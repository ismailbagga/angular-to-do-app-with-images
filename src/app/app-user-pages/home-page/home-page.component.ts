import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUserService } from '../../services/app-user/app-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  showModel = false;
  formGroup = new FormGroup({
    term: new FormControl(null, Validators.required),
    state: new FormControl('all'),
  });

  constructor(
    private authService: AppUserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  search() {
    let values = this.formGroup.value;
    let existingParams: any = { ...this.route.snapshot.queryParams }; // return as obj to delete key value pair
    if (values['term'] == null || values['term'] == '') {
      values = { state: values['state'] };

      if ('term' in existingParams) {
        delete existingParams['term'];
      }
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...existingParams, ...values },
    });
  }

  sortByNavigation(newest: boolean) {
    let values = { order: newest ? 'newest' : 'oldest' };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: values,
      queryParamsHandling: 'merge',
      // dont trigger navigation
      // skipLocationChange: true,
    });
  }
  show() {
    this.showModel = true;
  }
  logout() {
    this.showModel = false;
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
  close() {
    this.showModel = false;
  }
  // checkState() {
  //   console.log('page re rendred');

  //   return true;
  // }
}
