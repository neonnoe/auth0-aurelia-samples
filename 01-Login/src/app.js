import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import { AuthService } from './auth-service';

@inject(AuthService)
export class App {
  constructor(AuthService) {
    this.auth = AuthService;
    this.authenticated = this.auth.isAuthenticated();
    this.auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated;
    });
  }
  configureRouter(config, router) {
    config.title = 'Aurelia - Auth0';
    config.options.pushState = true;
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('./home'),
        nav: true,
        title: 'Home'
      },
      {
        route: 'callback',
        name: 'callback',
        moduleId: PLATFORM.moduleName('./callback'),
        nav: false,
        title: 'Callback'
      }
    ]);

    this.router = router;
  }
}
