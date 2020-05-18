import { Component, OnInit } from '@angular/core';

import { NavController,Platform } from '@ionic/angular';
import{File} from '@ionic-native/file/ngx';
import{FileOpener} from '@ionic-native/file-opener/ngx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs; 
@Component({
  selector: 'app-total-blood-count',
  templateUrl: './total-blood-count.page.html',
  styleUrls: ['./total-blood-count.page.scss'],
})
export class TotalBloodCountPage implements OnInit {
testobj={
  HB:'' ,
  TC:'', 
  NTP:'',
  LMP:'',
  ESP:'',
  MNS:'',
  BSP:'',
  RBC:'',
  PLT:''
}
 pdfObj=null;
  constructor(public navctrl:NavController,public plt:Platform,public file:File,public fileOpener:FileOpener) { }

  ngOnInit() {
  }
  createPdf(){
    var docDefinition = {
      content: 
       
      [
        { text: ' SHREE PARAMANANDA', style: 'header'},
            {text:" CLINICAL LABORATORY  SRI AMBHA CLINIC",style:"anotherStyle"},
            {text:"                                                                 "},
            {text:"Patient Name :"},
            {text:"Ref By: "},  
            {text:"BLOOD EXAMINATION REPORT",style:"header1"},
            {text:"Complete Blood Count",style:"header2"},
        {
          layout: 'noBorders', // optional
          table: {
          
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ 'Test', 'Results','', 'Normal Range' ],
              [ 'HaemoGlobin', this.testobj.HB, '', '(Male:13-17 Female:11-13)' ],
              ['Total Count',this.testobj.TC,'',('4,000 to 10,000 cells/cm³')]
            ]
          }
        },
             {text:'                                                                                '}
        , {text:"Differential Count",},
        {
          layout: 'noBorders', // optional
          table: {
           
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ '', '','', '' ],
              [ 'Neutrophils', this.testobj.NTP+'%', '', '(40% to 50%)' ],
              ['Lymphocytes',this.testobj.LMP+'%','','(20% to 40%)'],
              ['Eosinophils',this.testobj.ESP+'%','','(01% to 06%'],
              ['Monocytes',this.testobj.MNS+'%','','(01% to 04%'],
              ['Basophils',this.testobj.BSP+'%','','(0% to 1%'],
              ['RBC',this.testobj.RBC+'Cum/m','','(4.50 to 6.0)'],
              ['Platelet Count',this.testobj.PLT+'Cum/m','','(1.5 to 4.5)']
            ]
          }
        }, 
        
          
      ],
      footer: {
        columns: [
           {text:'Thanks For reference',alignment:'left',style:"reference"},
          { text: 'Lab Tech', alignment: 'right' ,style:'foot'}
        ]
      },
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
    
    
  
    this.pdfObj = pdfMake.createPdf(docDefinition);
      
      
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

