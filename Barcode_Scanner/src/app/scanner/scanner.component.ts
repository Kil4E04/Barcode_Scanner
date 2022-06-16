import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {

  @ViewChild('barcodeScanner')
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  ngAfterViewInit(){
    this.barcodeScanner.start();
  }

  onValueChanges(result: any){
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started: any){
    console.log('It '+started);
  }



  

  

//192.168.43.26

}


