import { Component } from '@angular/core';
import{NavController,LoadingController} from '@ionic/angular'
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navctrl:NavController,public loadctrl:LoadingController) {
     
          setTimeout(()=>{
            this.navctrl.navigateForward('/login')
          },3000)
          
  }

}
