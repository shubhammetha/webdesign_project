import { Component, OnInit ,TemplateRef,ViewChild} from '@angular/core';
import { PackageService } from '../service/package.service';
import { NgForOf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-package-even',
  templateUrl: './package-even.component.html',
  styleUrls: ['./package-even.component.css']
})
export class PackageEvenComponent implements OnInit {

  @ViewChild('content') public templateref: TemplateRef<any>;
 
  errorMsg: string = 'Unable to connect to server';
  packageObject: any = [];
  
  constructor(private PackageService: PackageService) {
   
    // this.packageObject = this.PackageService.getPackageList();
    // alert(this.packageObject.title);
    // this.packageObject = this.PackageService.getsavedPackage();
  
    //console.log(this.packageObject[3].img.data.data);
   }
  
   
  ngOnInit() {
    this.PackageService.getPackageList()
    .subscribe(data => {
     console.log(data);
      this.packageObject=data;
     
    //  this.PackageService.savePackage(data);
    
    }, error => {
      this.errorMsg = error.error.message;
     
    });
  }

  getImgData(img){
    var binary = '';
    var bytes = new Uint8Array( img.data.data );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return 'data:image/jpg;base64,' + window.btoa( binary );
  }

}
