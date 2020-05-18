import { Component, OnInit } from '@angular/core';
import{ToastController,NavController} from'@ionic/angular';
import{FirebaseService} from './../service/firebase.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(public toastctrl:ToastController,public navctrl:NavController,public firebase:FirebaseService) { }
  email:''
  ngOnInit() {
  }
async Sent_email(){
          try{
         this.firebase.reset_password(this.email)
          



       const toast=await this.toastctrl.create({
          message:"Reset Link has been sent to Your Email",
          duration:3000,
          color:'success'
       })
       toast.present();
      this.navctrl.navigateBack('/login');
          }catch(err){
            const toaster=await this.toastctrl.create({
              message:"Problem in Sending a email",
              duration:2000,
              color:"red"

            })
            toaster.present()
          }
}
}
