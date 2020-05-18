import { Component, OnInit } from '@angular/core';
import{ToastController,NavController} from'@ionic/angular';
import{AngularFireAuth} from '@angular/fire/auth';
import{auth} from 'firebase/app'
import{FirebaseService}from'./../service/firebase.service';
import{AngularFirestore} from "@angular/fire/firestore"
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';
  Createpassword:string='';
  constructor(public navctrl:NavController,public toastctlr:ToastController,public afauth:AngularFireAuth,public firebase:FirebaseService, public db:AngularFirestore) { 
          
  }
  people:any;
  ngOnInit() {
  }
  async Login(){
        const {email,Createpassword}=this
           try{    
             await this.afauth.auth.signInWithEmailAndPassword(email,Createpassword);
             this.db.collection('Register_users',ref=>ref.where('role','==','L')).valueChanges().subscribe(val=>console.log(val))
             
            this.navctrl.navigateForward('/lab-tech')
           }
        catch(err){
              const toast=await this.toastctlr.create({
                message:"UserName or Password is wrong",
                duration:2000,
                color:"danger"
              })
              toast.present()
             console.dir(err)
        }
  }
}
 