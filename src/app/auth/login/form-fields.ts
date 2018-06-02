import { Validators } from '@angular/forms';
// Must create parent class for inheritence
export const config = {
  name: ['', [Validators.required, Validators.minLength(3)]],
  password1: ['', [Validators.required, Validators.minLength(8)]]
};
