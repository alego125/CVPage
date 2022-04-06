import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [
    UploadImagesComponent
  ],
  imports: [
    CommonModule,
    AlifeFileToBase64Module
  ],
  exports: [
    UploadImagesComponent
  ]
})
export class FormulariosModule { }
