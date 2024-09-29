import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogicComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LogicComponent,
  },

  {
    path: 'test',
    component: TestComponent,
    canActivate: [authGuard]
  },
];
