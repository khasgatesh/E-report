import { Component, OnInit } from '@angular/core';
import{NavController} from '@ionic/angular';
@Component({
  selector: 'app-lab-tech',
  templateUrl: './lab-tech.page.html',
  styleUrls: ['./lab-tech.page.scss'],
})
export class LabTechPage implements OnInit {
 public brag:boolean =true;
 names:any=true
  constructor(public navctrl:NavController) {
     this.names=['khasgatesh','CBN']
   }

  ngOnInit() {
  }
    

}
