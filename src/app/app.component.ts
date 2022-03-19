import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'ngImageCrop';

  constructor(private sendGetRequest:ApiCallService){
    
  }

  imageChangedEvent: any = '';
    croppedImage: any = '';
  
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
  
        this.croppedImage = event.base64;
     //   this.base64ToImage(event.base64);
    }
    imageLoaded() {
        /* show cropper */
    }
    cropperReady() {
        /* cropper ready */
    }
    loadImageFailed() {
        /* show message */
    }

    dataURItoBlob(dataURI:any) {
      const byteString = window.atob(dataURI);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: 'image/png' });    
      return blob;
   }


   base64ToImage(base64str:any){
     debugger
    const base64 = base64str.replace('data:image/png;base64,', "");;
    const imageName = 'name.png';
    const imageBlob = this.dataURItoBlob(base64);
    const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
    this.sendGetRequest.sendGetRequest(imageFile).subscribe(data=>{
      console.log(data);
    });
   }

   onClickPost(){
    this.base64ToImage(this.croppedImage);

   }

  }

  
