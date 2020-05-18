import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore:AngularFirestore) { }

  create_User_Record(record){
    
       return this.firestore.collection('Register_users').add(record);
  }
   get_record(){
        return this.firestore.collection('Register_users').valueChanges()
             
              
         }
         
         
   
   reset_password(email:string){
        var auth=firebase.auth();
        return auth.sendPasswordResetEmail(email).then(()=>console.log("email sent"))
        .catch((error)=>console.dir(error))
   }
   role(){
         // return this.firestore.collection('Register_users').snapshotChanges()
          return new Promise<any>((resolve,reject)=>{
               this.firestore.collection('/Register_users',ref=>ref.where('role','==','p')).snapshotChanges().subscribe(snapshots=>{
                    resolve(snapshots)
               })
          })
        

   }
}
