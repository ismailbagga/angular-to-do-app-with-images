import { FormControl, FormGroup } from '@angular/forms';

export abstract class AuthSuperComponent {
  errorMsg: string = '';
  loading: boolean = false;

  constructor(public form: FormGroup) {}

  getController(name: string): FormControl {
    let control = this.form.get(name);
    if (control instanceof FormControl) {
      return control;
    }
    throw new Error(`no controler from login form named as  ${name}`);
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
  formValue<T>() {
    try {
      return this.form.value as T;
    } catch (error) {
      throw new Error('Could not cast form value');
    }
  }
}
