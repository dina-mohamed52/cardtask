import { Component, OnInit } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { FormDataServiceService } from '../form-data-service.service';

@Component({
  selector: 'app-backcard',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './backcard.component.html',
  styleUrl: './backcard.component.css',
})
export class BackcardComponent implements OnInit {
  companyName!: string;
  constructor(private formDataService: FormDataServiceService) {}
  ngOnInit(): void {
    this.companyName = this.formDataService.getField('CompanyName');

  }
}
