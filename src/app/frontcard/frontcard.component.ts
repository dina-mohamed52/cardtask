import { Component, OnInit } from '@angular/core';
import { FormDataServiceService } from '../form-data-service.service';

@Component({
  selector: 'app-frontcard',
  standalone: true,
  imports: [],
  templateUrl: './frontcard.component.html',
  styleUrl: './frontcard.component.css',
})
export class FrontcardComponent implements OnInit {
  employeeName!: string;
  idNo!: number;
  DOB!: number;
  Email!: string;
  constructor(private formDataService: FormDataServiceService) {}
  ngOnInit(): void {
     this.employeeName = this.formDataService.getField('EmployeeName');
     this.idNo = this.formDataService.getField('IDNO');
     this.DOB = this.formDataService.getField('DOB');
     this.Email = this.formDataService.getField('Email');

  
  }
}
