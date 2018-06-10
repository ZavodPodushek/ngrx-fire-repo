import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { IUser, UserModel } from '../../model/user.model';
import { Observable } from 'rxjs';
import { FirebaseModelBase } from '../../shared/firebase.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends FirebaseModelBase implements OnInit {
  collection: AngularFirestoreCollection<IUser>;
  title = 'app';
  users$: Observable<Array<UserModel>>;
  constructor(private db: AngularFirestore) {
    super();
    this.collection = db.collection<IUser>('users');
    this.users$ = super.snapshot<IUser, UserModel>(this.collection);
  }
  ngOnInit() {
  }
  addUser() { }

}
