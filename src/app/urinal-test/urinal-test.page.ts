import { Component, OnInit } from '@angular/core';
import { NavController,Platform } from '@ionic/angular';
import{File} from '@ionic-native/file/ngx';
import{FileOpener} from '@ionic-native/file-opener/ngx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-urinal-test',
  templateUrl: './urinal-test.page.html',
  styleUrls: ['./urinal-test.page.scss'],
})
export class UrinalTestPage implements OnInit {

  constructor(public navctrl:NavController,public plt:Platform,public file:File,public fileOpener:FileOpener) { }
   testobj={
          ALB:'',
          URN:'',
          MCR:''
   }
    pdfObj=null;
  ngOnInit() {
  }
   createPdf()
   {
          var docDefintion={
            content:
            [
              { text: ' SHREE PARAMANANDA', style: 'header'},
              {text:" CLINICAL LABORATORY  SRI AMBHA CLINIC",style:"anotherStyle"},
              {text:"                                                                 "},
              {text:"Patient Name :"},
              {text:"Ref By: "},  
              {text:"BLOOD EXAMINATION REPORT",style:"header1"},
              {text:"Complete Blood Count",style:"header2"},
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
          }; 
           this.pdfObj=pdfMake.createPdf(docDefintion);
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
