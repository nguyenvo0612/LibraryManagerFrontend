import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './pages/user/about-us/about-us.component';
import { AccountComponent } from './pages/user/account/account.component';
import { BorrowTicketComponent } from './pages/user/borrow-ticket/borrow-ticket.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'borrow-ticket', component: BorrowTicketComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
