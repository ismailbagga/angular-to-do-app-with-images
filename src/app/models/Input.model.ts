import { FormControl } from '@angular/forms';

export interface InputModel {
  type: string;
  placeholder: string;
  controller: FormControl;
  name?: string;
}
