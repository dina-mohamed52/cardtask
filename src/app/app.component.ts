import { CardComponent } from './card/card.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeFormComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'formtask';
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (!this.router.navigated) {
      this.router.navigate(['/home']);
    }
  }
}
