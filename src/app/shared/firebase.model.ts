import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DocumentChangeAction,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { log } from '@firebase/database/dist/src/core/util/util';
export class FirebaseModelBase {
  /* Take Collection , return Array with Objects id for CRUD operations  */

  snapshot<T, U>(
    collection: AngularFirestoreCollection<T>
  ): Observable<Array<U>> {
    return collection.snapshotChanges().pipe(
      map((data: Array<DocumentChangeAction<T>>) => {
        return data.map((item: any) => {
          const id = item.payload.doc.id;
          const user = item.payload.doc.data();
          return { ...user, id };
        });
      })
    );
  }
  addUser(id) {
    console.log('Add');
    console.log(id);
  }
  editUser(id) {
    console.log('Edit');
    console.log(id);
  }
  deleteUser(id) {
    console.log('Delete');
    console.log(id);
  }
}
