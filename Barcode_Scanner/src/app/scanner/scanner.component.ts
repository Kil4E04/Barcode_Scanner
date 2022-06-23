import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';


@Component({
  selector: 'app-scanner',
  template: `
    <barcode-scanner-livestream
      maxHeight="200px"
      maxWidth="350px"
      type="code_128"
      (valueChanges)="onValueChanges($event)"
      (started)="(onStarted)"
    ></barcode-scanner-livestream>
    <div [hidden]="!barcodeValue">
      {{ barcodeValue }}
    </div>
  `,
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  

  ngAfterViewInit(){
    this.barcodeScanner.start();
    console.log('Started')
    console.log(this.barcodeScanner.isStarted)
  }

  onValueChanges(result: any){
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started: any){
    console.log('It '+started);
  }



  

  

//192.168.43.26

}


