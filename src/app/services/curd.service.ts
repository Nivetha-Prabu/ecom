import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewProduct(record) {
    return this.firestore.collection('Products').add(record);
  }

  read_Products() {
    return this.firestore.collection('Products').snapshotChanges();
  }
  read_Product(id) {
    return this.firestore.collection('Products').doc(id).snapshotChanges();
  }
  update_Products(recordID, record) {
    this.firestore.doc('Products/' + recordID).update(record);
  }

//   delete_Student(record_id) {
//     this.firestore.doc('Students/' + record_id).delete();
//   }
}
