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

  getData(name: string,field:string,value:string) {
    console.log(name)
    return new Promise<any>((resolve)=> {
      this.db.collection(name,ref => ref.where(field,'==',value)).valueChanges().subscribe(supplier => resolve(supplier))
    })
  }

  getUser(UserID: string) {
    console.log(UserID)
    return new Promise<any>((resolve)=> {
      this.db.collection('user',ref => ref.where('UID','==',UserID)).valueChanges().subscribe(supplier => resolve(supplier))
    })
  }

}
