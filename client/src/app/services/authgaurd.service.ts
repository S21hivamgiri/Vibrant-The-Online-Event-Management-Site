import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const expectedRole = route.data.role;
        return forkJoin([this.auth.IsLogin(), this.auth.GetUserDetails()]).pipe(map((data) => {
            if (data[0] && data[1].roles.indexOf(expectedRole) > -1) {
                return true;
            }
            this.router.navigate(['/login']);
            return false;
        }));
    }
}