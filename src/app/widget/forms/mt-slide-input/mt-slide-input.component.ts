import { Component, Input, OnInit } from '@angular/core';
import { InputModel } from 'src/app/models/Input.model';
import { MyErrorStateMatcher } from '../mt-input/mt-input.component';

@Component({
  selector: 'app-mt-slide-input',
  templateUrl: './mt-slide-input.component.html',
  styleUrls: ['./mt-slide-input.component.scss'],
})
export class MtSlideInputComponent implements OnInit {
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
  compareWith(o1: any, o2: boolean) {
    return o1 === o2;
  }
}
