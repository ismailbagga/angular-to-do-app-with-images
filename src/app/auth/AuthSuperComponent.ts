import { FormControl, FormGroup } from '@angular/forms';
import { InputModel } from '../models/Input.model';

export class AppFormGroup {
  public form!: FormGroup;
  constructor();
  constructor(form?: FormGroup) {
    if (form !== undefined) this.form = form;
  }
  setFormGroup(form: FormGroup) {
    console.log('filling up the form');

    this.form = form;
    console.log('counter');
  }
  getController(name: string): FormControl {
    let control = this.form.get(name);
    if (control instanceof FormControl) {
      return control;
    }
    throw new Error(`no controler from login form named as  ${name}`);
  }
  formValue<T>() {
    try {
      return this.form.value as T;
    } catch (error) {
      throw new Error('Could not cast form value');
    }
  }

}
export abstract class AuthSuperComponent extends AppFormGroup {
  errorMsg: string = '';
  loading: boolean = false;
  loadingPage: boolean = true;

  constructor(form: FormGroup) {
    super();
    this.setFormGroup(form);
  }

  setLoading(isLoading: boolean) {
    this.loading = isLoading;
  }
  onShow(arg: string): void {
    this.errorMsg = arg;
  }
  onHide() {
    this.errorMsg = '';
  }
  isFormInvalid() {
    return this.form.invalid;
  }
}
