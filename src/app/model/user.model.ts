export interface IUser {
  name: string;
  surname: string;
  age: string;
  country: string;
}
export class UserModel {
  constructor(
    public name = 'Alexey',
    public surname = 'Petrow',
    public age = null,
    public country = null,
    public id = null
  ) {}
  get User() {
    return JSON.parse(JSON.stringify(this));
  }
}
