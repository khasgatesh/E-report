import { Component, OnInit } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore"
import{FirebaseService}from './../service/firebase.service';
import { Observable,BehaviorSubject } from 'rxjs';
import { AngularFireAction,AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.page.html',
  styleUrls: ['./patient-detail.page.scss'],
})
export class PatientDetailPage implements OnInit {
  item:Array<any>
  constructor(public db:AngularFirestore,public fb:FirebaseService,public fd:AngularFireDatabase) {
    this.fb.role().then(result=>{
      this.item=result

     
      })
      
  }
  ngOnInit() {
                // this.fb.role().subscribe(data=>{
                //   this.pateints=data.map(e=>{
                //     return{
                //       id:e.payload.doc.id,
                //       isEdit:false,
                //       Mobileno:e.payload.doc.data()['Mobileno'],
                //       Name:e.payload.doc.data()['Name'],
                //       timeStamp:e.payload.doc.data()['timeStamp']
                //     };

                //   })
                //   console.log(this.pateints)
                // })
                // this.fb.role().then(result=>{
                // this.item=result
               // }) 
  }

}
