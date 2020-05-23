import { Component, OnInit } from '@angular/core';
import{NavController} from '@ionic/angular';
import{AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore"
import{FirebaseService}from './../service/firebase.service';
import { Observable,BehaviorSubject } from 'rxjs';
import { AngularFireAction,AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-lab-tech',
  templateUrl: './lab-tech.page.html',
  styleUrls: ['./lab-tech.page.scss'],
})
export class LabTechPage implements OnInit {
item:Number
  constructor(public db:AngularFirestore,public fb:FirebaseService,public fd:AngularFireDatabase) {
    this.fb.count().then(result=>{
      this.item=result

      console.log(this.item)
    })
   }

  ngOnInit() {
  }
    

}
