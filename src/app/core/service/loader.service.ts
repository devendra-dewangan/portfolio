import { inject, Injectable, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loader = signal(false);
  private router = inject(Router);
  public readonly loader  = this._loader.asReadonly();


  constructor(){
    this.router.events.subscribe(event =>{

      if(event instanceof NavigationStart){
        this._loader.set(true);
      }

      if(event instanceof NavigationEnd
        || event instanceof NavigationCancel
        || event instanceof NavigationError
      ){
        this._loader.set(false);
      }
    });
  }
}
