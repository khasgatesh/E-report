import { Component, OnInit } from '@angular/core';
import{ToastController,NavController} from '@ionic/angular';
import{FirebaseService} from './../service/firebase.service';
import{AngularFireAuth} from '@angular/fire/auth';
import{auth} from 'firebase/app'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  detail:any;
role:any;
Name:any;
Email:any;
Mobileno:any;
Createpassword:any;
date:Date =new Date()
  constructor(public toastctrl:ToastController,public navctrl:NavController,public firebase:FirebaseService,public afauth:AngularFireAuth) { }

  ngOnInit() {
   
  }
  async success(){

      let record={};
      record['role']=this.role;
      record['Name']=this.Name;
    
      record['Mobileno']=this.Mobileno;   
     
      record['timeStamp']=this.date;
      this.firebase.create_User_Record(record).then(resp=>{
        this.role="";
        this.Name="";
       
        this.Mobileno="";
      
        this.date=undefined;
        this.navctrl.navigateBack('/login')
      }).catch(error=>{
        console.log(error)
      })

        try{
          const results=await this.afauth.auth.createUserWithEmailAndPassword(this.Email,this.Createpassword)
          console.log(results)
          this.navctrl.navigateBack("/login")
        }catch(error){
          console.dir(error)
        }
      










          // const toast=await this.toastctrl.create({
          //   message:'You have been succesfully registered!!',
          //   duration:2000,
          //   color:'success'
          // })
          // toast.present();
  


          // this.navctrl.navigateBack('/login')
  }
  
}
