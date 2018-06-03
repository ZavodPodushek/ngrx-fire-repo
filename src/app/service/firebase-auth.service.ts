import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  constructor(private _fireAuth: AngularFireAuth) { }
  public subToChanges() {
    this._fireAuth.auth.useDeviceLanguage();
    this._fireAuth.auth.onAuthStateChanged((user: User) => {
      const userData = user && user.providerData;
      console.log(userData);
    });
  }

  private errorHandler(error) {
    console.log(error);
  }
  get authState(): Observable<User | null> {

    return this._fireAuth.authState;
  }

  public googleRegister(): Promise<any> {
    const provider = new auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this._fireAuth.auth
      .signInWithPopup(provider)
      .catch(this.errorHandler);
  }

  public regularRegister(value): Promise<any> {
    const { email, password } = value;
    return this._fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(this.errorHandler);
  }
  public regularSignIn(value): Promise<any> {
    const { email, password } = value;
    return this._fireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .catch(this.errorHandler);
  }

  public anonymouslyRegister(): Promise<any> {
    return this._fireAuth.auth.signInAnonymously().catch(this.errorHandler);
  }
  public facebookRegister(): Promise<any> {
    const provider = new auth.FacebookAuthProvider();
    return this._fireAuth.auth
      .signInWithPopup(provider)
      .catch(this.errorHandler);
  }
  public twitterRegister(): Promise<any> {
    const provider = new auth.TwitterAuthProvider();
    return this._fireAuth.auth
      .signInWithPopup(provider)
      .catch(this.errorHandler);
  }
  public githubRegister(): Promise<any> {
    const provider = new auth.GithubAuthProvider();
    return this._fireAuth.auth
      .signInWithPopup(provider)
      .catch(this.errorHandler);
  }
  public logOut(): Promise<any> {
    return this._fireAuth.auth.signOut().catch(this.errorHandler); // navigate to root
  }
}
