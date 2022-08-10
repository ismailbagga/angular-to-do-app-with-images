import { Component, Input, OnInit } from '@angular/core';
import { InputModel } from 'src/app/models/Input.model';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss'],
})
export class LoginInputComponent implements OnInit {
  @Input('model') model!: InputModel;
  constructor() {}

  ngOnInit(): void {}
  validate() {
    return (
      this.model.controller.dirty &&
      this.model.controller.touched &&
      this.model.controller.errors
    );
  }
}
