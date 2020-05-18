import { Component, OnInit } from '@angular/core';

import { NavController,Platform } from '@ionic/angular';
import{FirebaseService}from './../service/firebase.service';
import{File} from '@ionic-native/file/ngx';
import{FileOpener} from '@ionic-native/file-opener/ngx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-widal',
  templateUrl: './widal.page.html',
  styleUrls: ['./widal.page.scss'],
})
export class WidalPage implements OnInit {
   item:any;
  testobj={
         TO:'',
         AH:'',
         TH:'',
         BH:'',
         HAG:'',
         VDRL:'',
         HIV:'',
         CRP:''
  }
  pdfObj=null;
  constructor(public navctrl:NavController,public plt:Platform,public file:File,public fileOpener:FileOpener,public fb:FirebaseService) { 
      this.fb.role().then(result=>{
          this.item=result
      })

  }
  ngOnInit() {}
  
   createPdf(){
     var docDefinition={
                    content:
                    [
                      { text: ' SHREE PARAMANANDA', style: 'header'},
                      {text:" CLINICAL LABORATORY  SRI AMBHA CLINIC",style:"anotherStyle"},
                      {text:"                                                                 "},
                      {text:"Patient Name :"},
                      {text:"Ref By: "},  
                      {text:" MP AND WIDAL EXAMINATION REPORT",style:"header1"},
                      {
                        layout: 'noBorders', // optional
                        table: {
                         
                          headerRows: 1,
                          widths: [20,20,50,20,50 ],
                  
                          body: [
                            [ '','', '','','' ],
                           ['','TO:'+this.testobj.TO,'','AH:'+this.testobj.AH,''],
                           [ '', '','','','' ],
                           ['','TH:'+this.testobj.TH,'','BH:'+this.testobj.BH,'']
                        
                          ]
                        }
                      }, 
                      
                    ],
                    
                    styles: {
                      anotherStyle:{
                              fontsize:18,
                                alignment:'center',
                                  color:'red',
                    },
                    header: {
                            fontSize: 20,
                            bold: true,
                            alignment:'center',
                            color:'red'
                          },
                          subheader: {
                            fontSize: 14,
                            bold: true,
                            margin: [0, 15, 0, 0],
                             alignemnt:'center'
                          },header1:{
                            fontSize: 14,
                            bold: true,
                            color:'black',
                            alignment:'center'
                          },
                          header2:{
                            fontSize: 14,
                            bold: true,
                            color:'black',
                            alignment:'left'
                          },
                          foot:{
                               color:'red',
                               margin:[0,0,30,0]
                          },reference:{
                            margin:[20,0,0,0]
                          }
                        }
     }
     this.pdfObj=pdfMake.createPdf(docDefinition)
   }
   downloadPdf(){
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var utf8 = new Uint8Array(buffer);
        var binaryArray=utf8.buffer;
         
        var blob =new Blob([binaryArray],{type:'application/pdf'});
         

 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
     
}
 