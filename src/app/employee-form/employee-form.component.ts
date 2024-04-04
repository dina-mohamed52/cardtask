import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDataServiceService } from '../form-data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataServiceService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      CompanyName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      EmployeeName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      IDNO: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      DOB: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      Object.keys(formValue).forEach((key) => {
        this.formDataService.setField(key, formValue[key]);
      });
      this.router.navigate(['/cards']);
    }
    this.isSubmitted = true;
  }
}
