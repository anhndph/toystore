import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProducDetailGuard implements CanActivate {
  constructor(private router:Router) {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;
    if (isNaN(id) || id  < 0) {
        alert('invalid id ');
        this.router.navigate(['/shopnow'])
        return false;
    }
    return true;
  
      
  }
  
}
