import { FormBuilder, FormGroup } from '@angular/forms';

export class FormBuilderBase {
  form: FormGroup;
  constructor(fb: FormBuilder, config: Object) {
    this.form = fb.group(config);
  }
}
