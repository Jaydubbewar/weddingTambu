import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class WeddtambuService {

  constructor(private db: AngularFirestore) { }

  addData(name: string, data: any): any {
    return this.db.collection(name).doc().set(data);
  }

  vendor: any
  vendorID: any
  // getUser(UserID: string) {

  //   return new Promise<any>((resolve) => {
  //     this.db.collection('user', ref => ref.where('UID', '==', UserID)).valueChanges()
  //       .subscribe(supplier => {  //here supplier is just the data got from firestore
  //         this.vendor = supplier;
  //         console.log('Promise resolved with data:', this.vendor);

  //         // Get a different collection
  //         const otherCollectionRef = this.db.collection(this.vendor[0].vendor, ref => ref.where('UID', '==', UserID));

  //         // Do something with the other collection
  //         otherCollectionRef.valueChanges().subscribe(data => {
  //           console.log('Data from other collection:', data);

  //           // Resolve the promise with the combined data
  //           resolve(data);  //we can send the data of any one like resolve(supplier);
  //         });

  //       });
  //   })
  // }
  getUser(UserID: string) {
    return new Promise<any>((resolve) => {
      this.db.collection('user', ref => ref.where('UID', '==', UserID)).valueChanges()
        .subscribe(supplier => {
          this.vendor = supplier;
          console.log('Promise resolved with data:', this.vendor);
  
          // Get a different collection
          const otherCollectionRef = this.db.collection(this.vendor[0].vendor, ref => ref.where('uid', '==', UserID));
          
          // Get the ID of the first document in the collection
          otherCollectionRef.get().toPromise().then((querySnapshot) => {
            const id = querySnapshot?.docs[0].id;
            console.log('ID of first document:', id);
            this.vendorID = id
            // Do something with the other collection
            otherCollectionRef.valueChanges().subscribe(data => {
              console.log('Data from other collection:', data);
  
              // Resolve the promise with the combined data
              resolve(data);
            });
          });
  
        });
    });
  }
  
  
  

  checkUser(UserID: string) {
    console.log('check user', UserID)
    return new Promise<any>((resolve) => {
      this.db.collection('user', ref => ref.where('UID', '==', UserID)).valueChanges()
        .subscribe(supplier => resolve(supplier))
    })
  }

  getVendor() {
    return this.vendor
  }
  getVendors(name: string) {
    console.log(name)
    return new Promise<any>((resolve) => {
      this.db.collection(name, ref => ref).valueChanges().subscribe(supplier => resolve(supplier))
    })
  }


  update( data: any) {
    console.log(this.vendor[0].vendor, this.vendorID,data)

    return new Promise<any>((resolve) => {
      this.db.collection(this.vendor[0].vendor).doc(this.vendorID).update(data)
        .then(() => {
          alert('Document successfully updated!');
        })
        .catch((error) => {
          console.error('Error updating document:', error);
          alert('Error updating document please try after some time')
        });
    })
  }


  // getData(name: string,field:string,value:string) {
  //   console.log(name)
  //   return new Promise<any>((resolve)=> {
  //     this.db.collection(name,ref => ref.where(field,'==',value)).valueChanges().subscribe(supplier => resolve(supplier))
  //   })
  // }


}
