// import { ActivatedRouteSnapshot, CanActivate, Router,  RouterStateSnapshot } from '@angular/router';
// import { AuthService } from '../../services/services/auth.service';
// import { Injectable } from '@angular/core';


// @Injectable()
// export class AuthGuard implements CanActivate{
// constructor(private auth :AuthService, private router: Router){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//    )
//   :boolean
//   {
//     if(!this.auth.isLoggedIn()){
//       this.router.navigate(['admin/dashboard']);
//       return true;
//     }
//     return false;
//   }
// }
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}



