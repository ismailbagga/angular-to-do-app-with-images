import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { InputModel } from 'src/app/models/Input.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      ((control.dirty && control.touched) || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-mt-input',
  templateUrl: './mt-input.component.html',
  styleUrls: ['./mt-input.component.scss'],
})
export class MtInputComponent implements OnInit {
  @Input('model') model!: InputModel;
  matcher = new MyErrorStateMatcher();
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
