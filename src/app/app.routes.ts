import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  { path: 'cards', component: CardComponent },
  { path: 'home', component: EmployeeFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home when no path is provided
];
