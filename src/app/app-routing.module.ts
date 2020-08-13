import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { CanLoadGaurd } from './core/guards/can-load.guard';


const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "forgotpassword", component: ForgotPasswordComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./feature-modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [CanLoadGaurd]
  },
  {
    path: 'std',
    loadChildren: () => import('./feature-modules/student/student.module').then(m => m.StudentModule),
    canLoad: [CanLoadGaurd]
  },
  {
    path: 'staff',
    loadChildren: () => import('./feature-modules/staff/staff.module').then(m => m.StaffModule),
    canLoad: [CanLoadGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
