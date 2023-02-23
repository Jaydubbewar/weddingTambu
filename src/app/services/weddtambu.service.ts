import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class WeddtambuService {

  constructor(private db: AngularFirestore) { }

  addData(name:string,coll:any): any {
    return this.db.collection(name).doc().set(coll);
  }

  getData(name: string) {
    console.log(name)
    return new Promise<any>((resolve)=> {
      this.db.collection(name).valueChanges().subscribe(supplier => resolve(supplier))
    })
  }
}
