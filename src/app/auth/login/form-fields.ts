import { Validators } from '@angular/forms';
// Must create parent class for inheritence
export const config = {
  email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]]
};
