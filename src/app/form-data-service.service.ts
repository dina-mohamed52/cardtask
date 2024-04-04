import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataServiceService {
  private formData: any = {};

  setField(fieldName: string, value: any): void {
    this.formData[fieldName] = value;
  }

  getField(fieldName: string): any {
    return this.formData[fieldName];
  }

  getAllFields(): any {
    return this.formData;
  }
}
 
