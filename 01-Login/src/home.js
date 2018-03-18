import { inject } from 'aurelia-framework';
import { AuthService } from './auth-service';

@inject(AuthService)
export class Home {
  constructor(AuthService) {
    this.auth = AuthService;
    console.log(this.auth);
  }
}
