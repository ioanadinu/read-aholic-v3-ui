import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setAuthentication(userEmail:string, password:string, roles: Array<string>) {
    sessionStorage.setItem('user-email', userEmail);
    sessionStorage.setItem('user-password', password);
    sessionStorage.setItem('user-roles', JSON.stringify(roles));
  }

  isUserLogged() {
    return sessionStorage.getItem('user-email')!=null && sessionStorage.getItem('user-email')!="";
  }

  getUserEmail() {
    return sessionStorage.getItem('user-email');
  }

  getUserPassword() {
    return sessionStorage.getItem('user-password');
  }

  getUserRoles() : Array<string> {
    return this.isUserLogged ? JSON.parse(sessionStorage.getItem('user-roles')) : [];
  }
}
