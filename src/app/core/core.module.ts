import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
